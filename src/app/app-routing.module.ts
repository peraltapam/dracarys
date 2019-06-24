import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DragonListComponent } from './dragon/dragon-list/dragon-list.component';
import { DragonDetailComponent } from './dragon/dragon-detail/dragon-detail.component';
import { DragonEditComponent } from './dragon/dragon-edit/dragon-edit.component';
import { DragonNewComponent } from './dragon/dragon-new/dragon-new.component';
import { AuthGuard } from './login/auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'dragon-list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'dragon-list', canActivate: [AuthGuard], component: DragonListComponent },
  { path: 'register', component: DragonNewComponent },
  { path: 'dragon-list', component: DragonListComponent },
  { path: 'dragon-list/:id', component: DragonDetailComponent },
  { path: 'dragon-list/:id/edit', component: DragonEditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
