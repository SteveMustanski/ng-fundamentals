import { Component, OnInit } from '@angular/core';
import { ISession } from '../events';
import { AuthService } from '../user/auth.service';
import { EventService } from '../events/index';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavBarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: ISession[];

  constructor(public auth:AuthService, private eventService: EventService) {

  }

  ngOnInit() { }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
        this.foundSessions = sessions;
      })
}
}
