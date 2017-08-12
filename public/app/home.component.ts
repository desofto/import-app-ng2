import { Component, OnInit }    from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { PingApi }      from './api/ping';

@Component({
  selector: 'my-app',
  templateUrl: '/app/home.component.html',
  styles: [
    'nav { margin: 1rem 0 1rem 0; }',
    'nav a { padding: 0 1rem 0 1rem; text-decoration: none; }',
    'a.active { background: #337ab7; color: white; }'
  ]
})

export class HomeComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  jid: String = "";

  ngOnInit() {
    this.router.events.subscribe((event: NavigationEnd) => {
      this.jid = localStorage.getItem("jid");
    });
  }

  storeToken(id: string) {
    this.jid = id;
    localStorage.setItem("jid", id);
  }

  resetToken() {
    this.jid = "";
    localStorage.removeItem("jid");
  }
}
