import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  user = {username: 'dany', password: 'drogon'};
  showAlert = false;

  constructor() { }

  ngOnInit() {
  }

  loginHandler(form: NgForm) {
    console.log('login clicked', form);
    if(form.value.username === this.user.username &&
       form.value.password === this.user.password ) {
      console.log('login successful');
      this.showAlert = false;
    } else {
      this.showAlert = true;
    }
  }

}
