import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { DragonModule } from './dragon/dragon.module';
import { SharedModule } from './shared/shared.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NotFoundComponent } from './not-found/not-found.component';
import { DragonReducer } from './dragon/store/dragon.reducer';
import { DragonEffects } from './dragon/store/dragon.effects';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ dragons: DragonReducer }),
    EffectsModule.forRoot([DragonEffects]),
    HttpClientModule,
    LoginModule,
    DragonModule,
    SharedModule,
    AngularFontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
