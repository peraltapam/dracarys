import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DragonListComponent } from './dragon/dragon-list/dragon-list.component';
import { DragonDetailComponent } from './dragon/dragon-detail/dragon-detail.component';
import { DragonEditComponent } from './dragon/dragon-edit/dragon-edit.component';
import { DragonNewComponent } from './dragon/dragon-new/dragon-new.component';
import { AuthGuard } from './login/auth/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { DragonListResolverService } from './dragon/dragon-list-resolver.service';
import { DragonResolverService } from './dragon/dragon-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'dragon-list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', canActivate: [AuthGuard], component: DragonNewComponent },
  { path: 'dragon-list',
    canActivate: [AuthGuard],
    component: DragonListComponent,
    resolve: [DragonListResolverService] },
  { path: 'dragon-list/:id',
    canActivate: [AuthGuard],
    component: DragonDetailComponent,
    resolve: [DragonResolverService] },
  { path: 'dragon-list/:id/edit', canActivate: [AuthGuard], component: DragonEditComponent },
  { path: 'not-found', component: NotFoundComponent, data: { message: 'Page not found!'}},
  // this has to be the last path on this list
  { path: '**', redirectTo: 'not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
