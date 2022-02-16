import { LoginComponent } from './modules/user/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/user/user/user-routing.module').then(m => m.UserRoutingModule),
  },
  {
    path: '**',
    redirectTo:'users',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
