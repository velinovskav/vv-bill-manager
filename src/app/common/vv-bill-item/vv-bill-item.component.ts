import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../domain/bill';
import {BillTypesService} from '../../domain/bill-types.service';

@Component({
  selector: 'app-vv-bill-item',
  templateUrl: './vv-bill-item.component.html',
  styleUrls: ['./vv-bill-item.component.css']
})
export class VvBillItemComponent implements OnInit {

  @Input() bill: Bill;

  constructor(private billTypeService: BillTypesService) {
  }

  ngOnInit() {
  }

  getBillTypeIcon() {
    return this.billTypeService.getBillTypeByKey(this.bill.billType).icon;
  }

}
