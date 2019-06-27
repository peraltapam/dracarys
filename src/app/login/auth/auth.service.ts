import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
	// fake user data
	authUser: User = { username: 'dany', password: 'drogon' };

	loggedIn = false;

	isAuthenticated() {
		const promise = new Promise(
			resolve => {
				resolve(this.loggedIn);
			}
		);
		return promise;
	}

	validateLogin(username: string, password: string) {
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