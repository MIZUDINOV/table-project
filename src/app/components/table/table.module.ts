import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { TableComponent } from './table.component';
import { ModalComponent } from '../modal/modal.component';
import { EditUserDataModule } from '../modal/modal.module';

@NgModule({
    imports: [
        MatTableModule,
        MatDialogModule,
        MatIconModule,
        EditUserDataModule,
    ],
    declarations: [TableComponent],
    entryComponents: [ModalComponent],
    exports: [TableComponent],
})
export class TableModule {}
