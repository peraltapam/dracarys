import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
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

  loginHandler() {
    const form = this.loginForm.value;
    this.isLoading = true;
    if (this.authService.validateLogin(form.username, form.password)) {
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
