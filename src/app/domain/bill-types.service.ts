import {Injectable} from '@angular/core';
import {BillType, Electricity, Heating, InternetAndTV, ServiceCharges, Water} from './bill-type';

@Injectable()
export class BillTypesService {

  constructor() {
  }

  getBilTypes() {
    return [
      new BillType(Electricity.label, Electricity.route),
      new BillType(Water.label, Water.route),
      new BillType(Heating.label, Heating.route),
      new BillType(InternetAndTV.label, InternetAndTV.route),
      new BillType(ServiceCharges.label, ServiceCharges.route)
    ];
  }
}
