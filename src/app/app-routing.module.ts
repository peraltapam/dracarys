import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dragonList', component: DragonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
