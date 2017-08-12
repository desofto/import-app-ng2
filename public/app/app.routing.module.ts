import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }    from './home.component';

import { Progress }         from './progress';
import { Companies }        from './companies';
import { Uploader }         from './uploader';
import { PageNotFoundComponent } from './not-found';

const appRoutes: Routes = [
  { path: 'progress/:id',  component: Progress },
  { path: 'main',           component: Companies },
  { path: 'upload',         component: Uploader },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
