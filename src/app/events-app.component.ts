import { Component } from '@angular/core';

@Component({
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'app';
}
