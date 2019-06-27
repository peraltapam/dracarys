import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  // using reactive form approach as exercise
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });

    this.alert = null;
  }

  // handle login form submition
  loginHandler() {
    const form = this.loginForm.value;
    this.isLoading = true;

    // validate user authentication
    if (this.authService.validateLogin(form.username, form.password)) {
      this.router.navigate(['/dragon-list']);
      this.alert = null;
    } else {
      this.alert = 'Username or password invalid!';
    }
    this.isLoading = false;
  }

  // clear alert message
  resetAlert() {
    this.alert = null; 
  }

}
