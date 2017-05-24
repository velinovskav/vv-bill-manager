import {BillType} from './bill-type';
import {PaymentStatus} from './payment-status';

export class Bill {
  billType?: BillType;
  paymentStatus?: PaymentStatus;
  validFor: Date;
  value?: number;
}
