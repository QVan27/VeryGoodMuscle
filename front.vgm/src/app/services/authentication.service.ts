import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { Storage } from '@capacitor/storage';


const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    null
  );
  token = '';

  constructor(private http: HttpClient) {
    this.loadToken();
  }
  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  login(credentials: { email; password }): Observable<any> {
    return this.http.post(`http://localhost:5000/api/v1/auth/login`, credentials).pipe(
      map((data: any) => data.token),
      switchMap((token) => {
        return from(Storage.set({ key: TOKEN_KEY, value: token }));
      }),
      tap((_) => {
        this.isAuthenticated.next(true);
      })
    );
  }

  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    return Storage.remove({ key: TOKEN_KEY });
  }
}
