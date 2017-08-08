import { Injectable }     from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class OperationApi {
  constructor (
    private http: Http
  ) {}

  all(company_id: Number, filter: String) {
    return this.http.get(`/api/v1/operations.json?company_id=${company_id}&filter=${filter}`)
      .map((res:Response) => res.json());
  }

  import(fileList: FileList) {
    if(fileList.length > 0) {
      let file: File = fileList[0];

      let formData: FormData = new FormData();
      formData.append('file', file, file.name);

      let headers = new Headers();
      headers.append('Accept', 'application/json');

      let options = new RequestOptions({ headers: headers });

      return this.http.post('/api/v1/operations/import.json', formData, options)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
    }
  }

  stats(id: String) {
    return this.http.get(`/api/v1/operations/stats.json?jid=${id}`)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
  }
}
