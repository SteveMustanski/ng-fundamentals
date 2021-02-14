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
  CreateEventComponent
} from './events/index';


import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from "./nav/navbar.component";
import { ToastrService } from './common/toastr.service';
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UserModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
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
