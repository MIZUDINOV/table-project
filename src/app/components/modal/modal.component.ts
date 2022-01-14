import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { tableActions } from 'src/app/store/actions';
import { User } from 'src/app/store/state/table';

interface DialogData {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    public name = this.data.name;
    public username = this.data.username;
    public email = this.data.email;
    public phone = this.data.phone;

    constructor(
        @Inject(MAT_DIALOG_DATA) private readonly data: DialogData,
        private dialogRef: MatDialogRef<ModalComponent>,
        private store: Store<User[]>
    ) {}

    saveUserData() {
        const userData = {
            id: this.data.id,
            name: this.name ? this.name : 'no name',
            username: this.username ? this.username : 'no username',
            email: this.email ? this.email : 'no email',
            phone: this.phone ? this.phone : 'no phone',
        };

        this.store.dispatch(tableActions.userEdit(userData));
        this.dialogRef.close();
    }

    closeDialog() {
        this.dialogRef.close();
    }
}
