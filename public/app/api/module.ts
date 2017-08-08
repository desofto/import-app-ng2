import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';

import { CompanyApi }   from './company';
import { OperationApi } from './operation';
import { PingApi }      from './ping';

@NgModule({
  imports: [
    HttpModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    CompanyApi,
    OperationApi,
    PingApi
  ]
})

export class ApiModule {}
