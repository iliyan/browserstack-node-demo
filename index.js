var bs = require('./browserstack.js');
var _ = require('lodash');
var webdriver = require('browserstack-webdriver');

// Input capabilities
var capabilities = _.merge(bs.capabilities, {
  browserName: 'Safari',
  browser_version: '8.0',
  os: 'OS X',
  os_version: 'Yosemite',
  resolution: '1024x768',

  build: '1',
  name: 'Webdriver Tests'
});

var driver = new webdriver.Builder()
    .usingServer('http://hub.browserstack.com/wd/hub')
    .withCapabilities(capabilities)
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
driver.findElement(webdriver.By.name('btnG')).click();

driver.getTitle().then(function (title) {
  console.log(title);
});

driver.quit();
