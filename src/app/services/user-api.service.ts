import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../models/contact';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Contact[]> {
    return this.http.get<Contact[]>('https://jsonplaceholder.typicode.com/users');
  }
}
