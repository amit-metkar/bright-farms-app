import { BrightFarmsAppPage } from './app.po';

describe('bright-farms-app App', () => {
  let page: BrightFarmsAppPage;

  beforeEach(() => {
    page = new BrightFarmsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
