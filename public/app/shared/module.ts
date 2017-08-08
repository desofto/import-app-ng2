import { NgModule }             from '@angular/core';

import { ContenteditableModel } from './contenteditable-model';
import { InputModelSelected }   from './input-model-selected';
import { FocusMe }              from './focus-me';
import { PipeInvert }           from './pipe-invert';

@NgModule({
  imports: [
  ],
  declarations: [
    ContenteditableModel,
    InputModelSelected,
    FocusMe,
    PipeInvert
  ],
  exports: [
    ContenteditableModel,
    InputModelSelected,
    FocusMe,
    PipeInvert
  ]
})

export class SharedModule {}
