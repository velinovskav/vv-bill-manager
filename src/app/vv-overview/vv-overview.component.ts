import {Component, OnInit} from '@angular/core';
import {BillTypesService} from '../domain/bill-types.service';
import {BillType, Electricity} from '../domain/bill-type';
import {Router} from "@angular/router";

@Component({
  selector: 'app-vv-overview',
  templateUrl: './vv-overview.component.html',
  styleUrls: ['./vv-overview.component.css']
})
export class VvOverviewComponent implements OnInit {

  billTypes: Array<any>;

  constructor(private billTypesService: BillTypesService, private router: Router) {
  }

  ngOnInit() {
    this.billTypes = this.billTypesService.getBilTypes();
  }

  getRoute(type: BillType) {
    return '/overview/' + type.key;
  }
}
