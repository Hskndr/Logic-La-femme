import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MemberSignInComponent} from './member-sign-in/member-sign-in.component';
import {ViewComponent} from './member-sign-in/membercrud/view/view.component';
import {CreateComponent} from './member-sign-in/membercrud/create/create.component';
import {UpdateComponent} from './member-sign-in/membercrud/update/update.component';
import {ReadComponent} from './member-sign-in/membercrud/read/read.component';

const routes: Routes = [
  {path: 'view', component: ViewComponent},
  {path: 'create', component: CreateComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'view/:id', component: ReadComponent},
  {
    path: '', component: MemberSignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberSignInRoutingModule {
}


