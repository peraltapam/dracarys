import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
	// fake user data
	authUser: User = { username: 'dany', password: 'drogon' };

	loggedIn = new BehaviorSubject<boolean>(false);

	isAuthenticated() {
		const promise = new Promise(
			resolve => {
				resolve(this.loggedIn.value);
			}
		);
		return promise;
	}

	validateLogin(username: string, password: string) {
		if(username === this.authUser.username && password === this.authUser.password) {
			this.login();
		}
		return this.loggedIn.value;
	}

	autoLogin() {
		const user = localStorage.getItem('userData');
		if(user) {
			this.loggedIn.next(true);
		}
	}

	login() {
		localStorage.setItem('userData', JSON.stringify(this.authUser.username));
		this.loggedIn.next(true);
	}

	logout() {
		localStorage.removeItem('userData');
		this.loggedIn.next(false);
	}
}