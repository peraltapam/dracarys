import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dragonList', canActivate: [AuthGuard], component: DragonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
