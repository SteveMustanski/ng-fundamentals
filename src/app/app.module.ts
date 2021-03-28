import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import {
  EventThumbnailComponent,
  EventsListComponent,
  EventListResolver,
  EventService,
  EventRouteActivator,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent
} from './events/index';

import { DurationPipe } from './events/shared/duration.pipe';


import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from "./nav/navbar.component";
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { CollapsibleWelllComponent } from './common/collapsible-well.component';
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { UserModule } from './user/user.module';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from "./events/event-details/session-list.component";

declare let toastr : Toastr

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CollapsibleWelllComponent,
    DurationPipe,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    UserModule,
    FormsModule
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: TOASTR_TOKEN, useValue: toastr
    },
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }

    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {

  if (component.isDirty) {
    return window.confirm('You have not saved, do you really want to cancel?')
  }
  return true;
}
