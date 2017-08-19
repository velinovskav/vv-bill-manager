import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {VvLoginComponent} from './vv-login/vv-login.component';
import {VvOverviewComponent} from './vv-overview/vv-overview.component';
import {VvBillListComponent} from './vv-overview/vv-bill-list/vv-bill-list.component';

const APP_ROUTES: Routes = [
  {
    path: 'login', component: VvLoginComponent
  },
  {
    path: 'overview',
    component: VvOverviewComponent,
    children: [
      {path: 'electricity', component: VvBillListComponent},
      {path: 'water', component: VvBillListComponent},
      {path: 'heating', component: VvBillListComponent},
      {path: 'internetAndTv', component: VvBillListComponent},
      {path: 'serviceCharges', component: VvBillListComponent}
    ]
  },
  {
    path: '', redirectTo: '/overview', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/login', pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
