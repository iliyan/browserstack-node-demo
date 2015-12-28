var bs = require('./browserstack.js');

exports.config = {
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
  specs: ['spec.js'],

  capabilities: bs.capabilities
};