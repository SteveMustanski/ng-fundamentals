import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail-component.html',
  styles: [
    `
    .pad-left { margin-left: .5rem;}
    .well div {color: #bbb;}
    `
  ]
})

export class EventThumbnailComponent  {
  @Input()  event:any;
}
