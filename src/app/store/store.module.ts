import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { tableReducer } from './reducers/table/table.reducer';

@NgModule({
    imports: [
        HttpClientModule,
        StoreModule.forRoot({ users: tableReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
    ],
})
export class CustomStoreModule {}
