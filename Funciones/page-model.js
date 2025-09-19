import { t, Selector } from "testcafe";
import XPathSelector from "./xpath-selector.js";
import { ClientFunction } from "testcafe";

let waitingTime = 3000;
let sp = 0.9;


export async function softExpect(t, selector, message) {
    try {
        const text = await selector.innerText;
        await t.expect(selector.visible).ok(message, { timeout: 5000 });
//        log("✅ Passed:", message, "| Element text:", text);
          console.log("✅ Passed:", message) ;
        return true;
    } catch (err) {
        try {
            const text = await selector.innerText;
            //console.log("⚠️ Not Found or Invisible:", message, "| Element text:", text);
            console.log("⚠️ Not Found or Invisible:", message);
        } catch {
            // console.log("⚠️ Not Found or Invisible:", message, "| (no innerText available)");
            console.log("⚠️ Not Found or Invisible:", message);
        }
        return false;
    }
}


export default class Funciones {   // <-- export default

    async _MaxWindow(t, myTime = waitingTime) {
        await t
            .maximizeWindow()
            .wait(myTime);
    }

    async _MinWindow(t, myTime = waitingTime) {
        await t
            .minimizeWindow()
            .wait(myTime);
    }

    async _TypeText(t, select, myText, mySpeed = sp) {
        await t.typeText(select, myText, { speed: mySpeed });
    }

    async _clearText(t, select, myText, mySpeed = sp) {
        await t.typeText(select, myText, { replace: true, speed: mySpeed });
    }

    async _Click(t, select) {
        await t.click(select);
    }

    async _clickAndLog(t, selector, message, waitTime = 3000) {
    await t.click(selector).wait(waitTime);
   //console.log(message);
    }  

    async _ClickXPath(t, select) {
        const element = XPathSelector(select);
        await t.click(element);
    }

    async _SelectOptionByText(t, selectElement, visibleText) {
    await t
        .click(selectElement) // Abre el dropdown
        .click(selectElement.find('option').withText(visibleText));
    }

    async _ScrollPageBy(t, pixels) {
        const scrollBy = ClientFunction((yDelta) => window.scrollBy(0, yDelta));
        await scrollBy(pixels);
    }




}
