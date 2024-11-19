import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";

import {SingleUserResponse, User} from "../interfaces/user-request.interface";

import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private httpClient = inject(HttpClient);
  private baseUrl: string = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<SingleUserResponse>(`${this.baseUrl}/${id}`, {}).pipe(
      map((response) => response.data),
      tap(console.log)
    )
  }

}
