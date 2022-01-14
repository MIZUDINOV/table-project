import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tableActions } from 'src/app/store/actions';
import { tableSelectors } from 'src/app/store/selectors';
import { User } from 'src/app/store/state/table';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'table-comp',
    templateUrl: './table.template.html',
    styleUrls: ['./table.style.scss'],
})
export class TableComponent implements OnInit {
    public readonly dataSource$: Observable<User[]> = this.store.select(
        tableSelectors.getSelectUsers
    );
    public readonly displayedColumns: string[] = [
        'id',
        'name',
        'username',
        'email',
        'phone',
    ];

    constructor(
        private store: Store<{ users: User[] }>,
        private readonly dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.store.dispatch(tableActions.fetchUsers());
    }

    changeTableUserData(data: User) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '30%';
        dialogConfig.data = data;

        this.dialog.open(ModalComponent, dialogConfig);
    }
}
