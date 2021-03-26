import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: 'collapsible-well.component.html'
})

export class CollapsibleWelllComponent implements OnInit {
  visible: boolean = true

  constructor() { }

  ngOnInit() { }

  toggleContent() {
    this.visible = !this.visible;
  }
}
