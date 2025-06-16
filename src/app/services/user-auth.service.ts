import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

import { DUMMY_USER } from '../data/dummy-user';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  isLoggedinIn = false;
  user: User | null = null;

  login() {
    this.isLoggedinIn = true;
    this.user = DUMMY_USER;
  }
  logout() {
    this.isLoggedinIn = false;
    this.user = null;
  }
}
