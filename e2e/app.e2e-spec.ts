import { PurchaseOrderPage } from './app.po';

describe('purchase-order App', () => {
  let page: PurchaseOrderPage;

  beforeEach(() => {
    page = new PurchaseOrderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
