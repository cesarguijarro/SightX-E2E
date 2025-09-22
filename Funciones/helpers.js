// helpers.js
import { Selector, t } from "testcafe";
import Funciones, { softExpect } from "./page-model.js";
import fs from "fs";
import path from "path";

const waitingTime = 3000;
const f = new Funciones();

/**
 * Espera a que un submenu sea visible
 * @param {Selector} submenuSelector
 * @param {string} name
 */
export async function waitForSubmenuVisible(submenuSelector, name) {
    await t.expect(submenuSelector.exists).ok(`❌ Submenu "${name}" does not exist`);
    await t.expect(submenuSelector.visible).ok(`❌ Submenu "${name}" never became visible`);
}

/**
 * Hace click en un menú y valida la carga de la página y headers CSP
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

        // Validación de que la nueva página tiene contenido
        const body = Selector('body');
        await t
            .expect(body.exists).ok(`❌ Body not found after clicking ${menuName}`)
            .expect(body.textContent).notEql('', `❌ Page is empty after clicking ${menuName}`);

        console.log(`✅ Page loaded correctly after ${menuName}`);
    } catch (err) {
        const msg = `❌ Error when clicking on ${menuName}: ${err.toString()}`;
        console.log(msg);
        errors.push(msg);

        // Tomar screenshot solo en error
        const screenshotDir = path.join(process.cwd(), "screenshots", "errors");
        if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });
        const screenshotPath = path.join(screenshotDir, `${menuName.replace(/\s+/g,'_')}_${Date.now()}.png`);
        await t.takeScreenshot({ path: screenshotPath, fullPage: true });
    }

    // Validar cabeceras CSP en la nueva página
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
