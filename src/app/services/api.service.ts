import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { Posts } from '../_models/posts';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  getPosts():Observable<Posts[]> {
    return this.http.get<Posts[]>(this.baseUrl);
  }

}
