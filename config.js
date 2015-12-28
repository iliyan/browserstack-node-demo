var bs = require('./browserstack.js');
var _ = require('lodash');

// Input capabilities
var capabilities = _.merge(bs.capabilities, {
  browserName: 'Safari',
  browser_version: '8.0',
  os: 'OS X',
  os_version: 'Yosemite',
  resolution: '1024x768',

  build:  process.env.TRAVIS_BUILD_NUMBER || process.env.BUILD_NUMBER || '<manual>',
  name: 'Protractor Tests'
});

exports.config = {
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
  capabilities: capabilities,
  specs: ['spec.js']
};