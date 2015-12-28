# browserstack-node-demo

This is sample project intended to demonstrate a web site test automation. The test accesses a site through a number 
of browser and OS combinations and performs a few basic assertions.

The site to test is publicly-available. The test browsers are hosted at BrowserStack. This sample is using the 
BrowserStack JS language bindings and is running in Node.js

After cloning the source code run the following to update the environment:

```
npm install
```

The authentication and authorization information must be supplied via environment variables BROWSERSTACK_USERNAME and 
BROWSERSTACK_KEY. Naturally, these are just dummy values.

```
export BROWSERSTACK_USERNAME=browserstack512-dummy
export BROWSERSTACK_KEY=XKDMu5yXdzAYvGT1eRqw-dummy
```

To run the Webdriver tests run:

```
npm run demo
```

To run the Protracto-based tests:

```
npm run test
```

Check out the results at https://www.browserstack.com/automate
