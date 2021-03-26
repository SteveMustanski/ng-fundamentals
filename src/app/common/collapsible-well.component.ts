import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: 'collapsible-well.component.html'
})

export class CollapsibleWelllComponent implements OnInit {
  @Input() title: string;

  visible: boolean = true

  constructor() { }

  ngOnInit() { }

  toggleContent() {
    this.visible = !this.visible;
  }
}
