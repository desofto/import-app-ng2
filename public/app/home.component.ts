import { Component, OnInit }    from '@angular/core';

import { PingApi }      from './api/ping';

@Component({
  selector: 'my-app',
  templateUrl: '/app/home.component.html'
})

export class HomeComponent implements OnInit {
  constructor(
  ) {}

  jid: String = "";

  ngOnInit() {
    this.jid =  localStorage.getItem("jid");
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
