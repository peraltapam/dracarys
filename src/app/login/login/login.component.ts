import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  alert = null;
  isLoading = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.alert = null;
  }

  loginHandler(form: NgForm) {
    this.isLoading = true;
    if (this.authService.validateLogin(form.value.username, form.value.password)) {
      this.router.navigate(['/dragon-list']);
      this.alert = null;
    } else {
      this.alert = 'Username or password invalid!';
    }
    this.isLoading = false;
  }

  resetAlert() {
    this.alert = null; 
  }

}
