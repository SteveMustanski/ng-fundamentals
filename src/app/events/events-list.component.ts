import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EventService } from './shared/event.service';
import { ToastrService } from "../common/toastr.service";

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'

})

export class EventsListComponent implements OnInit  {

  events:any;

  constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName)
  }
}
