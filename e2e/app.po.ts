export class IdGenyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('id-geny-app h1')).getText();
  }
}
