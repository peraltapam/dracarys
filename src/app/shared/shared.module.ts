import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertMessagesComponent } from './alert-messages/alert-messages.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    AlertMessagesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoadingSpinnerComponent,
    AlertMessagesComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {}