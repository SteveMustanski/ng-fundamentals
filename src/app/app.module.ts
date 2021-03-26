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


import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from "./nav/navbar.component";
import { ToastrService } from './common/toastr.service';
import { CollapsibleWelllComponent } from './common/collapsible-well.component';
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { UserModule } from './user/user.module';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from "./events/event-details/session-list.component";

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CollapsibleWelllComponent,
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
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
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
