import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiUrl = 'http://localhost:5000/api/v1/users';
  constructor(public http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
    }),
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  
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
