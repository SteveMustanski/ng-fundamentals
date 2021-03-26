import { Component, OnInit } from '@angular/core';
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent, ISession } from "../shared/index";

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent implements OnInit {
  event:IEvent;
  addMode: boolean;
  constructor(private eventService:EventService, private route:ActivatedRoute) { }

  ngOnInit() {
      this.event = this.eventService.getEvent(+this.route.snapshot.params['id']) // the '+' casts the id to a number
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session:ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
