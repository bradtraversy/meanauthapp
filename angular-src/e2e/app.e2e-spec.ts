import { AngularSrcPage } from './app.po';

describe('angular-src App', function() {
  let page: AngularSrcPage;

  beforeEach(() => {
    page = new AngularSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
