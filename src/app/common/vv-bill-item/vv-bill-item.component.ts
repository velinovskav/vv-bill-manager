import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../domain/bill';

@Component({
  selector: 'app-vv-bill-item',
  templateUrl: './vv-bill-item.component.html',
  styleUrls: ['./vv-bill-item.component.css']
})
export class VvBillItemComponent implements OnInit {

  @Input() bill: Bill;

  constructor() {
  }

  ngOnInit() {
  }

}
