import { createReducer, on } from '@ngrx/store';

import { tableActions } from '../../actions';

import { User } from '../../state/table';

const initialState: User[] = [];

export const tableReducer = createReducer(
    initialState,
    on(tableActions.fetchUsers, (_) => _),
    on(tableActions.fetchUsersSuccess, (_, { users }) => users),
    on(tableActions.userEdit, (state, user) => {
        const updatedUsers = [...state];

        const updatedUserIndex = updatedUsers.findIndex(
            (item) => user.id === item.id
        );

        updatedUsers[updatedUserIndex] = user;
        return updatedUsers;
    })
);
