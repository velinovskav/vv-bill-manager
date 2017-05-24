import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import { VvLoginComponent } from './vv-login/vv-login.component';
import {MdButtonModule, MdCardModule, MdInputModule, MdListModule, MdTab, MdTabsModule} from '@angular/material';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AuthenticationService} from './vv-login/authentication.service';
import {routing} from './app.routing';
import { VvOverviewComponent } from './vv-overview/vv-overview.component';
import {BillTypesService} from "./domain/bill-types.service";
import { VvListItemComponent } from './common/vv-list-item/vv-list-item.component';
import { VvBillItemComponent } from './common/vv-bill-item/vv-bill-item.component';
import {BillsService} from "./domain/bills.service";

@NgModule({
  declarations: [
    AppComponent,
    VvLoginComponent,
    VvOverviewComponent,
    VvBillItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MdCardModule, MdInputModule, MdButtonModule, MdTabsModule, MdListModule
  ],
  providers: [AuthenticationService, BillTypesService, BillsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
