import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { TableModule } from './components/table/table.module';
import { TableEffects } from './store/effects/table/table.effects';
import { CustomStoreModule } from './store/store.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TableModule,
        CustomStoreModule,
        EffectsModule.forRoot([TableEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
