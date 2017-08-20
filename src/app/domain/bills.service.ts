import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {BillType} from './bill-type';
import {Observable} from 'rxjs/Observable';
import {Bill} from './bill';

@Injectable()
export class BillsService {

  constructor(private db: AngularFireDatabase) {
  }

  getBillsForType(type: BillType): Observable<Array<Bill>> {
    return this.db.list('/bills', {
      query: {
        orderByChild: 'billType',
        equalTo: type.key
      }
    }).map((data) => {
      // order in desc order
      data.sort((a, b) => a.validFor < b.validFor ? 1 : -1);
      return data;
    });
  }

  addBill(bill: Bill) {
    const bills = this.db.list('/bills');
    bills.push(bill);
  }

}
