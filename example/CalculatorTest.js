


describe('Angularjs homepages', function(){
    it('should greet the nameed user', function (){

        browser.get('http://www.angularjs.org');

        element(by.model('yourName')).sendKeys('Julie');


        var greeting = element(by.binding('yourName'));

        expect(greeting.getText()).toEqual('Hello Julie!');

    });
});
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
                if(String(values)==String(c))
                {
                    item.click();
                }
            });
        });

        goButton.click();
    }

    beforeEach(function() {

        browser.get('http://juliemr.github.io/protractor-demo/');

    });

    it('should have a history', function() {
        Calc(1, 2, add);
        expect(latestResult.getText()).toEqual('3');

        Calc(3, 4, mul);



        expect(latestResult.getText()).toEqual('12');

        expect(history.count()).toEqual(2);

    });

    it('Locators',function() {

        Calc(3,5, mul);

        Calc(3,5, divide);
        Calc(3,5, sub);


        Calc(10,6, add);

        //CSS: TagName attribute='value'
        element(by.repeater("result in memory")).element(by.css('td:nth-child(3)')).getText().then(function(text){
          console.log(text);
        });

        element.all(by.repeater("result in memory")).each(function(item)
        {
            item.element(by.css("td:nth-child(3)")).getText().then(function(text)
            {

                console.log('this is ' + text);
            });
        });
    });

    it('open Anjular js website', function () {

        Calc(3, 5, add);

        element(by.repeater);
    });



});

// describe('Actions demo',function() {
//
//     it('Open Posse website',function() {
//         //moving the mouse into that textbox
//         //sendkeys
//         //keyboard arrow
//         //Keyboard enter
//         browser.get("https://posse.com/");
//         element(by.model("userInputQuery")).sendKeys("river");
//
//         browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();
//
//         browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//         browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
//         {
//
//             browser.sleep(2000);
//             expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
//
//             element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
//             element(by.css("a[ng-href*='London/River Island']")).click().then(function()
//             {
//                 browser.getTitle().then(function (title) {
//                    console.log(title + "title of the page before switching");
//                 });
//                 browser.sleep(2000);
//
//
//                 browser.getAllWindowHandles().then(function (handlers) {
//                     browser.switchTo().window(handlers[1]);
//                     browser.getTitle().then(function (title) {
//
//                         console.log(title + "title of the page after switching");
//                     });
//                 });
//             });
//         });
//     });
// });

