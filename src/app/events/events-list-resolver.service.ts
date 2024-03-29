import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from "rxjs/operators";
import { EventService } from './shared/event.service';

@Injectable({providedIn: 'root'})
export class EventListResolver implements Resolve<any> {
  constructor(private eventService:EventService) { }

  resolve() {
    return this.eventService.getEvents() //resolver automaticaly subscribes to observable
  };

}
