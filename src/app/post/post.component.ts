import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUser } from './state/user.action';
import { users, usersList } from './state/user.state';
import { UserService } from './user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(
    private store: Store<{ users: usersList }>,
    private userService: UserService
  ) {}
  Users!: any;
  ngOnInit(): void {
    this.getUsers();
    this.store.select('users').subscribe((data) => (this.Users = data.users));
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (users) => (
        (this.Users = users),
        console.log(this.Users),
        this.store.dispatch(getUser({ users: users }))
      ),
      (err) => console.log(err),
      () => console.log('Completed getting users')
    );
  }
}
