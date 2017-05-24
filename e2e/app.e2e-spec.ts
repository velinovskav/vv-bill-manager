import { VvBillManagerPage } from './app.po';

describe('vv-bill-manager App', () => {
  let page: VvBillManagerPage;

  beforeEach(() => {
    page = new VvBillManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
