import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EventService } from './shared/event.service';
import { IEvent } from "./shared/index";

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'

})

export class EventsListComponent implements OnInit  {

  events:IEvent[];

  constructor(private eventService: EventService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

}
