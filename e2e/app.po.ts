export class AcroClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('acro-client-app h1')).getText();
  }
}
