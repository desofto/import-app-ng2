import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

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
    private route: ActivatedRoute,
    private router: Router,
    private operations: OperationApi
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((p: any) => {
      this.id = p.id;
      this.setTimer();
    });
  }

  private setTimer() {
    Observable.timer(100).subscribe(() => {
      this.update();
    });
  }

  private update() {
    this.operations.stats(this.id).subscribe(
        data => {
          this.info = data;
          if(this.info['status'] != 'complete') {
            this.setTimer();
          } else {
            setTimeout(() => {
              this.complete.emit();
              this.router.navigate(['/main']);
            }, 3000);
          }
        },
        error => console.log(error)
      )
  }
}
