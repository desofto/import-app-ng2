import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { OperationApi } from './api/operation';

@Component({
  selector: 'import-progress',
  templateUrl: './progress.html'
})

export class Progress implements OnInit {
  @Input('id') id: String;
  @Output('complete') complete = new EventEmitter();

  info: Object = {}

  constructor(
    private operations: OperationApi
  ) {}

  ngOnInit() {
    this.setTimer()
  }

  private setTimer() {
    setTimeout( () => {
      this.update();
    }, 100);
  }

  private update() {
    this.operations.stats(this.id).subscribe(
        data => {
          this.info = data;
          if(this.info['status'] != 'complete') {
            this.setTimer();
          } else {
            this.complete.emit();
          }
        },
        error => console.log(error)
      )
  }

}
