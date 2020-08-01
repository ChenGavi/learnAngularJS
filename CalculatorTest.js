
describe('Protractor Element Demo',function() {

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var operator = element.all(by.tagName("option"));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));
    var add = 'ADD';
    var sub = 'SUBTRACTION';
    var mul = 'MULTIPLICATION';
    var divide = 'DIVISION';
    var modulo = 'MODULO';

    function Calc(a,b,c)
    {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        operator.each(function(item)
        {
            item.getAttribute("value").then(function(values)
            {
                if(values==c)
                {
                    item.click();
                }
            })
        })
        goButton.click();
    }

    beforeEach(function() {

        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a history', function() {
        Calc(1, 2, add);
        expect(latestResult.getText()).toEqual('3');

        Calc(3, 4, mul);
        expect(latestResult.getText()).toEqual('12')

        expect(history.count()).toEqual(2);

    });

    it('Locators',function() {

        Calc(3,5, mul);

        Calc(3,5, divide);
        Calc(3,5, divide);
        Calc(10,6, add);
        element.all(by.repeater("result in memory")).each(function(item)
        {
            item.element(by.css("td:nth-child(3)")).getText().then(function(text)
            {

                console.log('this is ' + text);
            })
        })
    })

})