import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  user = {username: 'dany', password: 'drogon'};
  showAlert = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginHandler(form: NgForm) {
    if(form.value.username === this.user.username &&
       form.value.password === this.user.password ) {
      this.showAlert = false;
      this.router.navigateByUrl('/dragonList');
    } else {
      this.showAlert = true;
    }
  }

}
