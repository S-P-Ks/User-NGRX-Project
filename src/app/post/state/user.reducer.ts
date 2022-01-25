import { createReducer, on } from '@ngrx/store';
import { addUser, getUser, updateUser } from './user.action';
import { users } from './user.state';

export const _userReducer = createReducer(
  users,
  on(getUser, (state, action) => {
    console.log(action);
    console.log(state.users);
    return { ...state, users: action.users };
  }),
  on(addUser, (state, action) => {
    console.log(action);
    let newUs = { ...action.user };
    newUs.id = state.users.length + 1;
    console.log(newUs);
    return {
      ...state,
      users: [...state.users, newUs],
    };
  }),
  on(updateUser, (state, action) => {
    const updatedUsers = state.users.map((user) =>
      user.id == action.user.id ? action.user : user
    );
    return {
      ...state,
      users: updatedUsers,
    };
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
