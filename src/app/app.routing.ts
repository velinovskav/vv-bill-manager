import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {VvLoginComponent} from './vv-login/vv-login.component';
import {VvOverviewComponent} from './vv-overview/vv-overview.component';

const APP_ROUTES: Routes = [
  {path: 'login', component: VvLoginComponent},
  {path: 'overview', component: VvOverviewComponent},
  {path: 'overview/electricity', component: VvOverviewComponent},
  {path: 'overview/water', component: VvOverviewComponent},
  {path: 'overview/heating', component: VvOverviewComponent},
  {path: 'overview/internetAndTv', component: VvOverviewComponent},
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
