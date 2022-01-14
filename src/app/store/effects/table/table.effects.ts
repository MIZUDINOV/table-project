import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    catchError,
    EMPTY,
    EmptyError,
    from,
    map,
    mergeMap,
    Observable,
    of,
    switchMap,
    tap,
} from 'rxjs';
import { tableActions } from '../../actions';
import { User } from '../../state/table';

@Injectable()
export class TableEffects {
    private readonly usersUrl = 'https://jsonplaceholder.typicode.com/users';

    public readonly fetchUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(tableActions.fetchUsers),
            switchMap(() =>
                this.getUsers().pipe(
                    map((users) => {
                        const sortedUsers = users.map((item) => ({
                            id: item.id,
                            name: item.name,
                            username: item.username,
                            email: item.email,
                            phone: item.phone,
                        }));
                        return tableActions.fetchUsersSuccess({
                            users: sortedUsers,
                        });
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(private actions$: Actions, private http: HttpClient) {}

    private getUsers() {
        return this.http.get<User[]>(this.usersUrl);
    }
}
