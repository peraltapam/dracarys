import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  showAlert = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  loginHandler(form: NgForm) {
    if (this.authService.validateLogin(form.value.username, form.value.password)) {
      this.router.navigateByUrl('/dragonList');
      this.showAlert = false;
      } else {
        this.showAlert = true;
      }

  }

}
