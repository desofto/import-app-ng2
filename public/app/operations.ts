import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'operations',
  templateUrl: './operations.html'
})

export class Operations implements OnChanges {
  @Input('operations') operations: Array<Object>;
  @Input('filter') filter: String;

  operations_filtered: Array<Object>;

  constructor(
  ) {}

  ngOnChanges() {
    let filter = this.filter.toLowerCase();
    this.operations_filtered = this.operations.filter(operation => {
      return filter.length <= 0 ||
        (operation['status'] && operation['status'].toLowerCase().match(filter)) ||
        (operation['categories'] && operation['categories'].toLowerCase().match(filter)) ||
        (operation['invoice_num'] && operation['invoice_num'].toLowerCase().match(filter)) ||
        (operation['reporter'] && operation['reporter'].toLowerCase().match(filter))
    });
  }
}
