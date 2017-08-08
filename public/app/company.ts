import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OperationApi } from './api/operation';

@Component({
  selector: 'company',
  templateUrl: './company.html',
  styles: [
    'h4 { cursor: pointer; }'
  ]
})

export class Company {
  @Input('company') company: Object;
  @Input('filter') filter: String;

  constructor(
    private operation_api: OperationApi
  ) {}

  open: Boolean = false;
  loading: Boolean = false;
  operations: Array<Object> = [];

  className() {
    if(this.open) {
      return 'open';
    } else {
      return 'closed';
    }
  }

  toggle() {
    this.open = !this.open;
    if(this.open) {
      this.operations = [];
      this.loading = true;
      this.operation_api.all(this.company['id'], this.filter).subscribe(data => {
        this.operations = data;
        this.loading = false;
      }, error => {
        this.loading = false;
        console.log(error);
      });
    }
  }


}
