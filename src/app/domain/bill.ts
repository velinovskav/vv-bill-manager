import {PaymentStatus} from './payment-status';

export class Bill {
  billType?: string;
  paymentStatus?: PaymentStatus;
  validFor: Date;
  value?: number;
}
