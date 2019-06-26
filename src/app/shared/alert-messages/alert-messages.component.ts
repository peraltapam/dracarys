import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-messages',
  templateUrl: './alert-messages.component.html',
  styleUrls: ['./alert-messages.component.sass']
})
export class AlertMessagesComponent {
  @Input() message: string;
  @Input() isError: boolean;
  @Output() close = new EventEmitter<void>();

  constructor() {}

  onClose() {
    this.close.emit();
  }

}
