import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { user, usersList } from './state/user.state';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  url = 'https://jsonplaceholder.typicode.com/users';
  getUsers() {
    return this.http.get(this.url).pipe(
      tap((users) => console.log(users)),
      map((users: any) =>
        users.map((user: user) => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
        }))
      )
    );
  }

  getUser(id: any) {
    console.log(id);
    return this.http.get(this.url + `/${id}`).pipe(
      map((user: any) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      }))
    );
  }

  patchUser(user: user) {
    console.log(user);
    return this.http.patch(`${this.url}/${user.id}`, user).pipe(
      map((user: any) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      }))
    );
  }
}
