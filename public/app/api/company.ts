import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CompanyApi {
  constructor (
    private http: Http
  ) {}

  all() {
    return this.http.get('/api/v1/companies.json')
      .map((res:Response) => res.json());
  }
}
