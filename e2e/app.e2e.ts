import { IdGenyPage } from './app.po';

describe('id-geny App', function() {
  let page: IdGenyPage;

  beforeEach(() => {
    page = new IdGenyPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('id-geny works!');
  });
});
