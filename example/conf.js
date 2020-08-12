// conf.js
exports.config = {
    directConnect: true,
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['CalculatorTest.js', 'Test.js', 'Frames.js', 'Sync.js'],
    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [
        {
            browserName: 'chrome'
        },
        {
            browserName: 'firefox'
        }

    ],
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};