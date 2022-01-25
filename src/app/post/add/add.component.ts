import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { addUser } from '../state/user.action';
import { user, usersList } from '../state/user.state';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  promptUser!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<{ users: usersList }>,
    private service: UserService
  ) {}

  ngOnInit(): void {
    this.promptUser = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  submit() {
    if (!this.promptUser.valid) {
      return;
    }

    const newUser: user = {
      name: this.promptUser.value.name,
      email: this.promptUser.value.email,
      username: this.promptUser.value.username,
      id: 0,
    };

    console.log(newUser);

    this.store.dispatch(addUser({ user: newUser }));
  }
}
