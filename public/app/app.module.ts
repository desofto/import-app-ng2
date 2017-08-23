import { NgModule }         from '@angular/core';
import { Router }           from '@angular/router';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { AppRoutingModule } from './app.routing.module';

import { HomeComponent }    from './home.component';

import { Progress }         from './progress';
import { Companies }        from './companies';
import { Company }          from './company';
import { Operations }       from './operations';
import { Operation }        from './operation';
import { Uploader }         from './uploader';
import { Filter }           from './filter';
import { PageNotFoundComponent } from './not-found';

import { SharedModule }     from './shared/module';
import { ApiModule }        from './api/module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    //SimpleNotificationsModule.forRoot(),
    MdInputModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,

    AppRoutingModule,
    SharedModule,
    ApiModule
  ],
  declarations: [
    HomeComponent,
    Progress,
    Companies,
    Company,
    Operations,
    Operation,
    Uploader,
    Filter,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [HomeComponent]
})

export class AppModule {}
