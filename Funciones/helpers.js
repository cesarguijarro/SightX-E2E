// helpers.js
import { Selector, t } from "testcafe";
import Funciones, { softExpect } from "./page-model.js";
import fs from "fs";
import path from "path";

const waitingTime = 3000;
const f = new Funciones();

/**
 * Wait for a submenu to be visible
 * @param {Selector} submenuSelector
 * @param {string} name
 */
export async function waitForSubmenuVisible(submenuSelector, name) {
    await t.expect(submenuSelector.exists).ok(`❌ Submenu "${name}" does not exist`);
    await t.expect(submenuSelector.visible).ok(`❌ Submenu "${name}" never became visible`);
}

/**
 * Wait for a menu to be clickable and validate the page load and CSP headers
 * @param {TestController} t
 * @param {Selector} menuSelector
 * @param {string} menuName
 * @param {RequestLogger} logger
 * @param {Array} errors
 */
export async function clickMenuAndValidate(t, menuSelector, menuName, logger, errors) {
    if (!menuSelector) {
        const msg = `❌ Selector undefined for ${menuName}`;
        console.log(msg);
        errors.push(msg);
        return;
    }

    const exists = await menuSelector.exists;

    if (!exists) {
        const msg = `❌ Menu not found: ${menuName}`;
        console.log(msg);
        errors.push(msg);
        return;
    }

    await softExpect(t, menuSelector, `✅ Menu visible: ${menuName}`);

    try {
        await f._clickAndLog(t, menuSelector, `Clicked menu: ${menuName}`, waitingTime);

        // Validation that the new page has content
        const body = Selector('body');
        await t
            .expect(body.exists).ok(`❌ Body not found after clicking ${menuName}`)
            .expect(body.textContent).notEql('', `❌ Page is empty after clicking ${menuName}`);

        console.log(`✅ Page loaded correctly after ${menuName}`);
    } catch (err) {
        const msg = `❌ Error when clicking on ${menuName}: ${err.toString()}`;
        console.log(msg);
        errors.push(msg);

        //  Take screenshot only on error
        const screenshotDir = path.join(process.cwd(), "screenshots", "errors");
        if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });
        const screenshotPath = path.join(screenshotDir, `${menuName.replace(/\s+/g,'_')}_${Date.now()}.png`);
        await t.takeScreenshot({ path: screenshotPath, fullPage: true });
    }

    // Validate CSP headers on the new page - content-security-policy
    const lastRequest = logger.requests[logger.requests.length - 1];
    const cspHeader = lastRequest?.response?.headers?.['content-security-policy'];

    if (cspHeader) {
        const msg = `❌ CSP header SHOULD NOT be present after ${menuName}`;
        console.log(msg);
        errors.push(msg);                
    } else {
        console.log(`✅ CSP header correctly absent after ${menuName}`);
    }
}
