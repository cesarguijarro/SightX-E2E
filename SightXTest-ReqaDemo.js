import { Selector } from "testcafe";
import { ClientFunction } from 'testcafe';
import XPathSelector from "./xpath-selector.js";

import Funciones from "./Funciones/page-model.js"; 


import { log, time } from "console";
import { softExpect } from "./Funciones/page-model.js";

let waitingTime = 3000;

fixture( 'E2E SightX - Send Request a Demo form' )
    .page('https://sightx.io/request-a-demo')

    const xFirstName = XPathSelector("//input[@placeholder='First Name']");
    const xLastName = XPathSelector("//input[@placeholder='Last Name']");
    const xWorkEmail = XPathSelector("//input[@name='email']");
    const xCompanyName = XPathSelector("//input[@name='companyName']");
    const xJobTitle = XPathSelector("//input[@name='jobTitle']");
    const xPhoneNumber = XPathSelector("//input[@name='phoneNumber']");
    const xCountry = XPathSelector("//select[@name='country']");  // Select element

    /*
    const xEmployees = XPathSelector("//select[@name='Employees__c']");
    const xCountry = XPathSelector("//select[@name='Country']");
    */
    const xMessage = XPathSelector("//input[contains(@name,'tell-us-more')]");
    const xSubmitButton = XPathSelector("//button[@type='submit']");
    //const xRecaptchaCheckbox = XPathSelector("//div[@class='recaptcha-checkbox-border']");

    const recaptchaIframe = Selector('iframe[title="reCAPTCHA"]');
    const recaptchaCheckbox = Selector('#recaptcha-anchor');


    

//div[@class='recaptcha-checkbox-border']

    const funciones = new Funciones();

    test.only('TEST : fill the form and send a req a demo', async t => {
    /*await funciones._ScrollPageBy(t, 1787);  // baja
    await t.wait(2511); // espera 2.511 segundos
    await funciones._ScrollPageBy(t, -1787); // sube
    await t.wait(1798); // espera 1.798 segundos
*/


    await t.maximizeWindow().wait(waitingTime);

    await funciones._TypeText(t, xFirstName, "John", 0.9);
    console.log('First name entered');
    await funciones._TypeText(t, xLastName, "Doe", 0.9);
    console.log('Last name entered');
    await funciones._TypeText(t, xWorkEmail, "john.doe@example.com", 0.9);
    console.log('Work email entered');
    await funciones._TypeText(t, xCompanyName, "Example Inc.", 0.9);
    console.log('Company name entered'); 
    
        
    // Switch into the iframe
    await t.switchToIframe(recaptchaIframe);
    // Click the checkbox inside
    await t.click(recaptchaCheckbox);
    // Switch back to main page
    await t.switchToMainWindow();
    console.log('Recaptcha checkbox clicked, please solve the captcha manually if needed');  

    await funciones._TypeText(t, xJobTitle, "Manager", 0.9);
    console.log('Job title entered');
    await funciones._TypeText(t, xPhoneNumber, "1234567890", 0.9);
    console.log('Phone number entered');  
    await funciones._SelectOptionByText(t, xCountry, "United States");
    console.log('Country selected');
    await funciones._TypeText(t, xMessage, "this is a test please ignore", 0.9);
    console.log('Message entered');

    await t.wait(5000); // Wait for 5 seconds to allow manual captcha solving
    /*
    await funciones._Click(t, xSubmitButton);
    */
});
