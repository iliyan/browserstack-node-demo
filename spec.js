describe('search', function () {
  it('should search using keyword', function () {
    browser.driver
        .get('http://www.ociweb.com/search')
        .then(function () {
          browser.driver
              .findElement(by.css('input.gsc-input'))
              .sendKeys('open source\n');
          browser.sleep(5000);
        }, function () {
          browser.takeScreenshot();
        });
  });
});