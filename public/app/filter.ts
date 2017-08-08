import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.html'
})

export class Filter {
  @Output('changed') changed = new EventEmitter();

  filter: String = "";

  constructor(
  ) {}

  private applyFilter() {
    this.changed.emit(this.filter);
  }
}
