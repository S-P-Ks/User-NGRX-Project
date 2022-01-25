import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUser, updateUser } from '../post/state/user.action';
import { getusers } from '../post/state/user.selector';
import { user } from '../post/state/user.state';
import { UserService } from '../post/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  updateForm!: FormGroup;
  user!: any;
  @Output() updatedUser = new EventEmitter();

  constructor(
    private store: Store<user>,
    private service: UserService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    });

    console.log('Up');

    this.router.params.subscribe(
      (data) =>
        this.store.select(getusers, { id: data['id'] - 1 }).subscribe(
          (d) => (
            this.updateForm.setValue({
              id: d?.id,
              name: d?.name,
              email: d?.email,
              username: d?.username,
            }),
            console.log(d)
          )
        ),
      (err) => console.log(err),
      () => console.log('update')
    );
  }

  update() {
    this.service.patchUser(this.updateForm.value).subscribe(
      (p: user) => this.store.dispatch(updateUser({ user: p })),
      (err) => console.log(err),
      () => console.log('up')
    );
  }
}
