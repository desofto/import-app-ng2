import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ContenteditableModel }                   from './contenteditable-model';

@Component({
  selector: 'input-model',
  template: '<div contenteditable="true" [contenteditableModel]="model" (contenteditableModelChange)="onEdit($event)"></div>'
  //directives: [ContenteditableModel]
})

export class InputModel {
  @Input('model') model: any;
  @Output('modelChange') update = new EventEmitter();

  onEdit(value: string) {
    this.update.emit(value);
  }
}
