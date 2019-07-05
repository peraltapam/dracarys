import { Component, OnInit } from '@angular/core';

import { AuthService } from './login/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Dracarys';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.autoLogin();
  }
}
