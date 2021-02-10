import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail-component.html',
  styles: [
    `
    .pad-left { margin-left: .5rem;}
    .well div {color: #bbb;}
    .thumbnail {min-height: 21rem}
    `
  ]
})

export class EventThumbnailComponent  {
  @Input()  event:any;
}
