import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/login/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean;

  constructor(private authService: AuthService ) { }

  ngOnInit() {
    this.authService.loggedIn.subscribe(
      authenticated => {
        this.isUserLoggedIn = authenticated;
      }
    )
  }

  logoutHandler() {
    this.authService.logout();
  }

}
