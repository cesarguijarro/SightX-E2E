import { Selector } from "testcafe";
import { ClientFunction } from 'testcafe';
import XPathSelector from "./xpath-selector";
import { log } from "console";
import Funciones from "./Funciones/page-model";

let waitingTime = 3000;
const funciones = new Funciones();

fixture( 'E2E SightX - Validate all menu items' )
    .page('https://www.sightx.io/')
        test.only('TEST : SightX site is UP', async t => {

        await funciones._MaxWindow(t, 3000);  // <-- pasar `t`

        /* Validate that user is redirected to home page when click over the logo in all pages */
        const Logo = XPathSelector('//img[@alt="Home"]');
        
        await t
            .expect(Logo.exists).ok('Logo is not visible')
            .click(Logo)
            .wait(waitingTime);

        });
