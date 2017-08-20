import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Bill} from '../domain/bill';
import {BillType} from '../domain/bill-type';
import {BillsService} from '../domain/bills.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BillTypesService} from '../domain/bill-types.service';

@Component({
  selector: 'app-vv-new-bill',
  templateUrl: './vv-new-bill.component.html',
  styleUrls: ['./vv-new-bill.component.css']
})
export class VvNewBillComponent implements OnInit, OnDestroy  {
  newBillForm: FormGroup;
  billType: BillType;
  private bill: Bill;
  private sub: any;

  constructor(private fb: FormBuilder, private billsService: BillsService, private billTypeService: BillTypesService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.newBillForm = this.fb.group({
      validFor: ['', Validators.required],
      value: ['', Validators.required],
      paymentStatus: this.fb.group({
        online: [false]
      })
    });

    this.sub = this.route.params.subscribe(params => {
      this.billType = this.billTypeService.getBillTypeByKey(params['billType']);
    });

    this.newBillForm.valueChanges.subscribe((value) => {
      this.bill = value;
      this.bill.paymentStatus.paid = true;
      this.bill.billType = this.billType.key;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  save() {
    this.billsService.addBill(this.bill);
    this.cancel();
  }

  cancel() {
    this.router.navigate(['overview/' + this.billType.key]);
  }
}
