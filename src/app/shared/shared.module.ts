import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertMessagesComponent } from './alert-messages/alert-messages.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    AlertMessagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent,
    AlertMessagesComponent
  ]
})
export class SharedModule {}