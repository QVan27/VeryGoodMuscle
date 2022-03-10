import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiUrl = 'http://localhost:5000/api/v1/users';
  constructor(public http: HttpClient) {
    console.log(`Yes Siiiiiir`);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
    }),
  };

  getAllUsers() {
    return new Promise((resolve) => {
      this.http.get(`${this.apiUrl}`, this.httpOptions).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
