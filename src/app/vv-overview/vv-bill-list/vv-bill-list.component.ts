import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BillType} from '../../domain/bill-type';
import {Bill} from '../../domain/bill';
import {BillsService} from '../../domain/bills.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BillTypesService} from '../../domain/bill-types.service';

@Component({
  selector: 'app-vv-bill-list',
  templateUrl: './vv-bill-list.component.html',
  styleUrls: ['./vv-bill-list.component.css']
})
export class VvBillListComponent implements OnInit {

  bills: Observable<Array<Bill>>;
  billType: BillType;

  constructor(private billTypeService: BillTypesService, private billsService: BillsService,
              private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.billType = this.billTypeService.getBillTypeByKey(this.activateRoute.routeConfig.path);
    this.bills = this.billsService.getBillsForType(this.billType);
  }

  addNew() {
    this.router.navigate(['/new', this.billType.key]);
  }
}
