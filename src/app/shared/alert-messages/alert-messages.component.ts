import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-messages',
  templateUrl: './alert-messages.component.html',
  styleUrls: ['./alert-messages.component.sass']
})
export class AlertMessagesComponent {
  // receive props to dynamically set the alert info and style
  @Input() message: string;
  @Input() isError: boolean;

  // send event to close alert and clear message
  @Output() close = new EventEmitter<void>();

  constructor() {}

  onClose() {
    this.close.emit();
  }

}
