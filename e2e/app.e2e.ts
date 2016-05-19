import { AcroClientPage } from './app.po';

describe('acro-client App', function() {
  let page: AcroClientPage;

  beforeEach(() => {
    page = new AcroClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('acro-client works!');
  });
});
