import { createAction, props } from '@ngrx/store';
import { user, usersList } from './user.state';

export const addUser = createAction('addUser', props<{ user: user }>());
export const updateUser = createAction('updateUser', props<{ user: user }>());
export const getUser = createAction('getUser', props<{ users: user[] }>());
