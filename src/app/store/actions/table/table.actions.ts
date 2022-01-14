import { createAction, props } from '@ngrx/store';

import { User } from '../../state/table';

export const fetchUsers = createAction('[Users Table Page] Fetch Users');

export const fetchUsersSuccess = createAction(
    '[Users Table Page] Fetch Users Success',
    props<{ users: User[] }>()
);

export const userEdit = createAction(
    '[User Table Row] Edit User',
    props<User>()
);
