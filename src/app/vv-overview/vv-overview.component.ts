import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BillTypesService} from '../domain/bill-types.service';
import {AuthenticationService} from '../vv-login/authentication.service';
import {Bill} from '../domain/bill';
import {BillType} from '../domain/bill-type';
import {BillsService} from '../domain/bills.service';

@Component({
  selector: 'app-vv-overview',
  templateUrl: './vv-overview.component.html',
  styleUrls: ['./vv-overview.component.css']
})
export class VvOverviewComponent implements OnInit {

  billTypes: Array<any>;
  bills: Observable<Array<Bill>>;

  constructor(private billTypesService: BillTypesService, private billsService: BillsService,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.billTypes = this.billTypesService.getBilTypes();
  }

  getBills(type: BillType) {
    this.bills = this.billsService.getBillsForType(type);
  }

  logout() {
    this.authService.doLogout();
  }

}
