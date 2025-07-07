import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.services';
import { User } from '../models/user.model';

import { DUMMY_USER } from '../data/dummy-user';
import { Observable, switchMap } from 'rxjs';

type Token = {
  success: boolean;
  expires_at: string;
  request_token: string;
};

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  isLoggedIn: boolean = false;
  user: User | null = null;
  token: Token | null = null;
  sessionId: string | null = null;

  private apiService = inject(ApiService);

  requestToken(): Observable<Token> {
    return this.apiService.getData<Token>('authentication/token/new');
  }
  tokenIsExpired() {
    if (!this.token) return;
    return new Date() < new Date(this.token.expires_at);
  }

  initSession() {
    const currentSession = localStorage.getItem('session_id');
    const currentExpiration = localStorage.getItem('expires_at');

    if (
      !currentSession ||
      !currentExpiration ||
      new Date() >= new Date(currentExpiration)
    )
      return;
    this.sessionId = currentSession;
    this.apiService
      .getData<User>(`account?session_id=${this.sessionId}`)
      .subscribe({
        next: res => {
          this.user = res;
          this.isLoggedIn = true;
        }
      });
  }

  login(username: string, password: string): Observable<User> {
    // this.requestToken().subscribe({
    //   next: token => {
    //     if (!token) return;
    //     console.log('thoek', token);
    //     this.token = token;
    //   }
    // });
    // const params = {
    //   username,
    //   password,
    //   request_token: this.token?.request_token
    // };
    // return this.apiService.postData<Token>(
    //   'authentication/token/validate_with_login',
    //   params
    // );
    return this.requestToken().pipe(
      switchMap(token => {
        const params = {
          username,
          password,
          request_token: token.request_token
        };
        return this.apiService
          .postData<Token>('authentication/token/validate_with_login', params)
          .pipe(
            switchMap(() => {
              return this.apiService.postData<{
                success: boolean;
                session_id: string;
              }>('authentication/session/new', {
                request_token: token.request_token
              });
            }),
            switchMap(sessioRes => {
              this.sessionId = sessioRes.session_id;
              localStorage.setItem('session_id', sessioRes.session_id);
              localStorage.setItem('expires_at', token.expires_at);
              return this.apiService.getData<User>(
                `account?session_id=${sessioRes.session_id}`
              );
            })
          );
      })
    );
  }
  logout() {
    this.isLoggedIn = false;
    this.user = null;
  }
}
