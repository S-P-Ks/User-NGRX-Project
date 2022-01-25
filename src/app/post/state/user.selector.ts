import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersList } from './user.state';

export const getUsersPost = createFeatureSelector<usersList>('users');

export const getusers = createSelector(
  getUsersPost,
  (state: any, props: any) => {
    return state.users[props.id] ? state.users[props.id] : null;
  }
);
