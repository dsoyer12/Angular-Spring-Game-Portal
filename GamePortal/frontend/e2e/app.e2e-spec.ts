import { frontendPage } from './app.po';

describe('frontend App', () => {
  let page: frontendPage;

  beforeEach(() => {
    page = new frontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
