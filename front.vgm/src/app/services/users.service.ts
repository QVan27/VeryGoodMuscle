// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

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
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
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

  // getById(id: number) {
  //   return new Promise((resolve) => {
  //     this.http.get(this.apiUrl + id, this.httpOptions).subscribe(
  //       (data) => {
  //         resolve(data);
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  //   });
  // }
  // getById(id) {
  //   return this.http
  //     .get(this.apiUrl + '/' + id)
  //     .pipe(retry(2), catchError(this.handleError));
  // }
}
