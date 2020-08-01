
// Test.js
describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    beforeEach(function() {

        // browser.waitforAngularEnabled(false);
        // browser.get('https://www.google.ca/')   //non angular apps
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a history', function() {
        add(1, 2);
        add(3, 4);

        expect(history.count()).toEqual(2);

        add(5, 6);

        expect(history.count()).toEqual(3); // This is wrong!
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function() {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        goButton.click();

        expect(latestResult.getText()).toEqual('3');
    });

    it('should add four and six', function() {
        // Fill this in.
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);

        goButton.click();

        expect(latestResult.getText()).toEqual('10');
        expect(latestResult.getText()).not.toEqual('8');
    });

    it('should read the value from an input', function() {
        firstNumber.sendKeys(1);
        expect(firstNumber.getAttribute('value')).toEqual('1');
    });

});