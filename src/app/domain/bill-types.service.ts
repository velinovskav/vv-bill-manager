import {Injectable} from '@angular/core';
import {BillType, Electricity, Heating, InternetAndTV, ServiceCharges, Water} from './bill-type';

@Injectable()
export class BillTypesService {

  constructor() {
  }

  getBilTypes() {
    return [
      Object.assign(new BillType(), Electricity),
      Object.assign(new BillType(), Water),
      Object.assign(new BillType(), Heating),
      Object.assign(new BillType(), InternetAndTV),
      Object.assign(new BillType(), ServiceCharges)
    ];
  }

  getBillTypeByKey(type: string) {
    return this.getBilTypes().find(billType => billType.key === type);
  }
}
