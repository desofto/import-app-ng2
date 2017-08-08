import { Component, Input, Output, EventEmitter } from '@angular/core';

import { OperationApi } from './api/operation';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.html'
})

export class Uploader {
  @Output('uploaded') uploaded = new EventEmitter();

  constructor(
    private operations: OperationApi
  ) {}

  uploadFile(fileList: FileList) {
    this.operations.import(fileList)
      .subscribe(
        data => this.uploaded.emit(data),
        error => console.log(error)
      );
  }
}
