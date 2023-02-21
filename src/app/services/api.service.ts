import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,pipe, throwError } from 'rxjs';
import { map,tap } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { Posts } from '../_models/posts';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  getPosts():Observable<Posts[]> {
    return this.http.get<Posts[]>(this.baseUrl)
  // .pipe(
  //       tap(() => {
  //         if (HttpErrorResponse instanceof ErrorEvent) {
  //           //client side error
  //           throw new TypeError(`Value`);
  //         }
  //       })
  //     );
  }
  // public handleError(error: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent){
  //     //client Error{}
  //     errorMessage = `Error :${error.error}`
  // }else{
  // //server side error
  // errorMessage=`Status: ${error.status} \n Message: ${error.message}`
  //   }
  //   return throwError(errorMessage);
  // }
}
