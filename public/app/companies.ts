import { Component, OnInit } from '@angular/core';

import { CompanyApi } from './api/company';

@Component({
  selector: 'companies',
  templateUrl: './companies.html'
})

export class Companies implements OnInit {
  constructor(
    private company: CompanyApi
  ) {}

  filter: String = "";
  companies: Array<Object> = [];

  ngOnInit() {
    this.company.all().subscribe( data => {
      this.companies = data;
    });
  }

  filterUpdated(filter: String) {
    this.filter = filter;
  }
}
