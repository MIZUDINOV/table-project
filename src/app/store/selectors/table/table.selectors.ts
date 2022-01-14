import { createSelector } from '@ngrx/store';
import { User, UserState } from '../../state/table';

export const selectUsers = (state: UserState) => state.users;

export const getSelectUsers = createSelector(
    selectUsers,
    (users: User[]) => users
);
