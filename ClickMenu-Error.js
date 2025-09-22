import { MainMenu } from "./MainMenu.js";
import Funciones, { softExpect } from "./Funciones/page-model.js";
import { RequestLogger } from "testcafe";

const waitingTime = 3000;
const f = new Funciones();
let hasErrors = false; // flag global para errores

// Logger configurado para capturar headers de respuesta
const logger = RequestLogger(/.*/, {
    logRequestHeaders: true,
    logResponseHeaders: true,
    logRequestBody: true,
    stringifyRequestBody: true
});

fixture('E2E SightX - Validate all menu items')
    .page('https://www.sightx.io/')
    .requestHooks(logger);

test('TEST: Click all main menu options and validate page text with CSP', async t => {
    await t.maximizeWindow();

    // ---------------- Función auxiliar mejorada ----------------
    async function clickMenuAndValidate(menuSelector, menuName) {
        if (!menuSelector) {
            console.log(`❌ Selector undefined for ${menuName}`);
            hasErrors = true;
            return;
        }

        const exists = await menuSelector.exists;
        if (!exists) {
            console.log(`❌ Menu not found: ${menuName}`);
            hasErrors = true;
            return;
        }

        await softExpect(t, menuSelector, `✅ Menu visible: ${menuName}`);

        // Limpiar logger antes del click para capturar solo requests de esta acción
        logger.clear();

        try {
            await f._clickAndLog(t, menuSelector, `Clicked menu: ${menuName}`, waitingTime);
        } catch (err) {
            console.log(`❌ Error when clicking on ${menuName}:`, err.message);
            hasErrors = true;
        }

        // Validar CSP en todas las requests capturadas
        if (logger.requests.length === 0) {
            console.log('✅ No requests captured to validate headers');
            hasErrors = false;
        } else {
            logger.requests.forEach(req => {
                const csp = req.response.headers['content-security-policy'];
                if (!csp) {
                    console.log(`✅ CSP missing in request to ${req.request.url}`);
                    hasErrors = false;
                } else {
                    console.log(`❌ CSP present in request to ${req.request.url}`);
                    hasErrors = true;                    
                }
            });
        }
    }

    // ---------------- MAIN MENU ----------------
    console.log('>>> Main menu items validation');
    const mainMenus = [
        { selector: MainMenu.WhySightXMenu, name: 'Why SightX?' },
        { selector: MainMenu.MeetAdaMenu, name: 'Meet Ada' },
        { selector: MainMenu.CapabilitiesMenu, name: 'Capabilities Toggle' },
        { selector: MainMenu.SolutionsMenuIcon, name: 'Solutions Toggle' },
        { selector: MainMenu.CustomersMenu, name: 'Customers' },
        { selector: MainMenu.PricingMenu, name: 'Pricing' },
        { selector: MainMenu.ResourcesMenuIcon, name: 'Resources Toggle' }
    ];

    for (const menu of mainMenus) {
        await clickMenuAndValidate(menu.selector, menu.name);
        await t.navigateTo('https://www.sightx.io/');
    }
    console.log('<<< Main menu items validation');

    // ---------------- CAPABILITIES ----------------
    console.log('>>> Capabilities submenu items');
    const capabilitiesMenus = [
        { selector: MainMenu.AudienceSegmentationMenu, name: 'Audience Segmentation' },
        { selector: MainMenu.BrandTrackingMenu, name: 'Brand Tracking' },
        { selector: MainMenu.ConceptTestingMenu, name: 'Concept Testing' },
        { selector: MainMenu.ConjointAnalysisMenu, name: 'Conjoint Analysis' },
        { selector: MainMenu.HeatMappingMenu, name: 'Heat Mapping' },
        { selector: MainMenu.KeyDriverAnalysisMenu, name: 'Key Driver Analysis' },
        { selector: MainMenu.MaxDiffAnalysisMenu, name: 'MaxDiff Analysis' },
        { selector: MainMenu.VideoInterviewsMenu, name: 'Video Interviews' },
        { selector: MainMenu.GaborGrangerMenu, name: 'Gabor-Granger' },
        { selector: MainMenu.VanWestendorpMenu, name: 'Van Westendorp' },
        { selector: MainMenu.SignificanceTestingMenu, name: 'Significance Testing' },
        { selector: MainMenu.SurveySoftwareMenu, name: 'Survey Software' },
        { selector: MainMenu.TextAnalysisMenu, name: 'Text Analysis' },
        { selector: MainMenu.TURFAnalysisMenu, name: 'TURF Analysis' },
        { selector: MainMenu.OnlinePanelsMenu, name: 'Online Panels' },
        { selector: MainMenu.ResearchServicesMenu, name: 'Research Services' }
    ];

    for (const menu of capabilitiesMenus) {
        if (await MainMenu.CapabilitiesMenu.exists) {
            await softExpect(t, MainMenu.CapabilitiesMenu, 'Toggle Capabilities visible');
            await t.click(MainMenu.CapabilitiesMenu).wait(waitingTime);
        } else {
            console.log('❌ Capabilities toggle not found');
            hasErrors = true;
            continue;
        }
        await clickMenuAndValidate(menu.selector, menu.name);
        await t.navigateTo('https://www.sightx.io/');
    }
    console.log('<<< Capabilities submenu items');

    // ---------------- SOLUTIONS ----------------
    console.log('>>> Solutions submenu items');
    const solutionsMenus = [
        { selector: MainMenu.BrandTrackingSolutionsMenu, name: 'Brand Tracking' },
        { selector: MainMenu.ContentCreationMenu, name: 'Content Creation' },
        { selector: MainMenu.CustomerExperienceMenu, name: 'Customer Experience' },
        { selector: MainMenu.MarketingAdvertisingMenu, name: 'Marketing & Advertising' },
        { selector: MainMenu.PricingStrategyMenu, name: 'Pricing Strategy' },
        { selector: MainMenu.ProductDevelopmentMenu, name: 'Product Development' },
        { selector: MainMenu.ResearchInsightsMenu, name: 'Research and Insights' },
        { selector: MainMenu.ProductManagersMenu, name: 'Product Managers' },
        { selector: MainMenu.MarketersMenu, name: 'Marketers' },
        { selector: MainMenu.BrandManagersMenu, name: 'Brand Managers' },
        { selector: MainMenu.InvestorsMenu, name: 'Investors' }
    ];

    for (const menu of solutionsMenus) {
        if (await MainMenu.SolutionsMenuIcon.exists) {
            await softExpect(t, MainMenu.SolutionsMenuIcon, 'Toggle Solutions visible');
            await t.click(MainMenu.SolutionsMenuIcon).wait(waitingTime);
        } else {
            console.log('❌ Solutions toggle not found');
            hasErrors = true;
            continue;
        }
        await clickMenuAndValidate(menu.selector, menu.name);
        await t.navigateTo('https://www.sightx.io/');
    }
    console.log('<<< Solutions submenu items');

    // ---------------- RESOURCES ----------------
    console.log('>>> Resources submenu items');
    const resourcesMenus = [
        { selector: MainMenu.BlogMenu, name: 'Blog' },
        { selector: MainMenu.ContentHubMenu, name: 'Content Hub' },
        { selector: MainMenu.GlossaryMenu, name: 'Glossary' }
    ];

    for (const menu of resourcesMenus) {
        if (await MainMenu.ResourcesMenuIcon.exists) {
            await softExpect(t, MainMenu.ResourcesMenuIcon, 'Toggle Resources visible');
            await t.click(MainMenu.ResourcesMenuIcon).wait(waitingTime);
        } else {
            console.log('❌ Resources toggle not found');
            hasErrors = true;
            continue;
        }
        await clickMenuAndValidate(menu.selector, menu.name);
        await t.navigateTo('https://www.sightx.io/');
    }
    console.log('<<< Resources submenu items');

    // ---------------- FINAL ----------------
    if (hasErrors) {
        throw new Error('❌ Some menus or submenus were not found or failed to click.');
    }
});
