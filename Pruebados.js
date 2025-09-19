import { Selector } from "testcafe";
import XPathSelector from "./xpath-selector";

let waitingTime = 1500;

fixture( 'Reiniciar testcafe')
    .page('https://devexpress.github.io/testcafe/example');
    //.page('https://www.sightx.io/');
    
    test('first test', async t => {
        await t
            .typeText('#developer-name', 'John Smith')
            .click('#submit-button')
            .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
    });

    test('second test', async t => {
        const check01 = XPathSelector('//*[@id="remote-testing"]');
        await t
            .typeText('#developer-name', 'John Smith')
            .click(check01)
            .click('#reusing-js-code')
            .click('#submit-button')
            // .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
            await t.wait(5000);
    });

    test('tercer test', async t => {
        const checkRemoteTesting = XPathSelector('//input[contains(@id,"remote-testing")]');
        const checkReusingJsCode = XPathSelector('//input[contains(@id,"reusing-js-code")]');
        const submitButton = XPathSelector('//button[contains(@id,"submit-button")]');

        await t
            .maximizeWindow()
            .wait(waitingTime)

            .typeText('#developer-name', 'John Smith')
            .click(checkRemoteTesting)
            .wait(waitingTime)
            .click(checkReusingJsCode)
            .wait(waitingTime)
            .click(submitButton)
            .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');


    });
