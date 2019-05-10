import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './home/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './main-page/main-page.module#MainPageModule'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**', redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
