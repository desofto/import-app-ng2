import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PingApi {
  constructor (
    private http: Http
  ) {}

  run() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/v1/ping').map((res:Response) => res.json()).subscribe((data: any) => {
        resolve(data);
      });
    });
  }
}
