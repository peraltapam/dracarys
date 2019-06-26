import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/login/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }

  logoutHandler() {
    this.authService.logout();
  }

}
