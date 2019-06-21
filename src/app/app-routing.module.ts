import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { DragonDetailComponent } from './dragon-list/dragon-detail/dragon-detail.component';
import { DragonEditComponent } from './dragon-list/dragon-edit/dragon-edit.component';
import { AuthGuard } from './login/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'dragon-list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'dragon-list', canActivate: [AuthGuard], component: DragonListComponent },
  { path: 'dragon-list', component: DragonListComponent },
  { path: 'dragon-list/:id', component: DragonDetailComponent, children: [
    { path: 'edit', component: DragonEditComponent }
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
