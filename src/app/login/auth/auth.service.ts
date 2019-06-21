import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
	authUser = { username: 'dany', password: 'drogon' };
	loggedIn = false;

	isAuthenticated() {
		const promise = new Promise(
			(resolve, reject) => {
				resolve(this.loggedIn);
			}
		);
		return promise;
	}

	validateLogin(username, password) {
		if(username === this.authUser.username && password === this.authUser.password) {
			this.login();
		}
		return this.loggedIn;
	}

	login() {
		this.loggedIn = true;
	}

	logout() {
		this.loggedIn = false;
	}
}