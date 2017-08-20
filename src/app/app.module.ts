import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {VvLoginComponent} from './vv-login/vv-login.component';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdLineModule, MdListModule,
  MdTabsModule
} from '@angular/material';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AuthenticationService} from './vv-login/authentication.service';
import {routing} from './app.routing';
import {VvOverviewComponent} from './vv-overview/vv-overview.component';
import {BillTypesService} from './domain/bill-types.service';
import {BillsService} from './domain/bills.service';
import {VvBillItemComponent} from './common/vv-bill-item/vv-bill-item.component';
import {VvNewBillComponent} from './vv-new-bill/vv-new-bill.component';
import {VvBillListComponent} from './vv-overview/vv-bill-list/vv-bill-list.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCxDDIb51o2JYS0_S6hrIe3lweYRq7XemA',
  authDomain: 'vv-bill-manager.firebaseapp.com',
  databaseURL: 'https://vv-bill-manager.firebaseio.com',
  projectId: 'vv-bill-manager',
  storageBucket: 'vv-bill-manager.appspot.com',
  messagingSenderId: '230346116302'
};

@NgModule({
  declarations: [
    AppComponent,
    VvLoginComponent,
    VvOverviewComponent,
    VvBillItemComponent,
    VvNewBillComponent,
    VvBillListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MdCardModule, MdInputModule, MdButtonModule, MdTabsModule, MdListModule, MdIconModule, MdLineModule
  ],
  providers: [AuthenticationService, BillTypesService, BillsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
