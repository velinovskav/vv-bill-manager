export const Electricity = {label: 'Electricity', route: ''};
export const Water = {label: 'Water', route: ''};
export const Heating = {label: 'Heating', route: ''};
export const InternetAndTV = {label: 'TV and Internet', route: ''};
export const ServiceCharges = {label: 'Service charges', route: ''};

export class BillType {
  label: string;
  route: string;

  constructor(label: string, route: string) {
    this.label = label;
    this.route = route;
  }
}
