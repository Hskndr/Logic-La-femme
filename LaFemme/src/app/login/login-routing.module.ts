import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {AdminComponent} from './admin/admin.component';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
