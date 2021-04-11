import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import {
  EventThumbnailComponent,
  EventsListComponent,
  EventListResolver,
  EventService,
  EventRouteActivator,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  UpvoteComponent,
  VoterService,
  LocationValidator
} from './events/index';

import { DurationPipe } from './events/shared/duration.pipe';


import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from "./nav/navbar.component";
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWelllComponent, SimpleModalComponent, ModalTriggerDirective } from "./common/index";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { UserModule } from './user/user.module';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from "./events/event-details/session-list.component";

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    NavBarComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CollapsibleWelllComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    UpvoteComponent,
    SessionListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    UserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    VoterService,
    LocationValidator,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},
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
