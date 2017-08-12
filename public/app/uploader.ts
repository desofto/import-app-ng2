import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { OperationApi } from './api/operation';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.html'
})

export class Uploader {
  @Output('uploaded') uploaded = new EventEmitter();

  constructor(
    private router: Router,
    private operations: OperationApi
  ) {}

  uploadFile(fileList: FileList) {
    this.operations.import(fileList)
      .subscribe(
        jid => {
          this.uploaded.emit(jid);
          localStorage.setItem("jid", jid);
          this.router.navigate(['/progress', jid]);
        },
        error => console.log(error)
      );
  }
}
