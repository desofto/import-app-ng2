import { Component }            from '@angular/core';
//import { ContenteditableModel } from './contenteditable-model';
import { InputModel }           from './input-model';

@Component({
  selector: 'input-model-selected',
  template: '<div contenteditable="true" (focus)="selectAllContent($event)" [contenteditableModel]="model" (contenteditableModelChange)="onEdit($event)"></div>',
  //directives: [ContenteditableModel],
  styles: [
    'div { border: 1px green solid; }'
  ]
})

export class InputModelSelected extends InputModel {
  selectAllContent($event: any) {
    setTimeout( () => document.execCommand('selectAll', false, null), 0 );
  }
}
