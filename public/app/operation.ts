import { Component, Input } from '@angular/core';

@Component({
  selector: 'operation',
  templateUrl: './operation.html'
})

export class Operation {
  @Input('operation') operation: Object;

  constructor(
  ) {}
}
