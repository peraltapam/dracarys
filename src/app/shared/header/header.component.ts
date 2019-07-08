import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from 'src/app/login/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isUserLoggedIn: boolean;

  private loginSubscription: Subscription;

  constructor(private authService: AuthService ) { }

  ngOnInit() {
    this.loginSubscription = this.authService.loggedIn.subscribe(
      authenticated => {
        this.isUserLoggedIn = authenticated;
      }
    )
  }

  logoutHandler() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }

}
