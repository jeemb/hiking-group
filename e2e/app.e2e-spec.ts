import { HikingGroupPage } from './app.po';

describe('hiking-group App', () => {
  let page: HikingGroupPage;

  beforeEach(() => {
    page = new HikingGroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
