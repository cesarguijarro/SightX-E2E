import { MainMenu } from "./MainMenu.js";
import Funciones, { softExpect } from "./Funciones/page-model.js";

const waitingTime = 3000;
const f = new Funciones();
let hasErrors = false; // flag global para errores

fixture('E2E SightX - Validate all menu items')
    .page('https://www.sightx.io/');

test('TEST: Click all main menu options and validate page text', async t => {
    await t.maximizeWindow();

    // Función auxiliar para validar menú y hacer click si existe
    async function clickMenuAndValidate(menuSelector, menuName) {
        if (!menuSelector) {
            console.log(`❌ Selector undefined para ${menuName}`);
            hasErrors = true;
            return;
        }

        const exists = await menuSelector.exists;

        if (!exists) {
            console.log(`❌ Menu no encontrado: ${menuName}`);
            hasErrors = true;
            return;
        }

        await softExpect(t, menuSelector, `✅ Menu visible: ${menuName}`);

        try {
            await f._clickAndLog(t, menuSelector, `Clicked menu: ${menuName}`, waitingTime);
        } catch (err) {
            console.log(`❌ Error al hacer click en ${menuName}:`, err.message);
            hasErrors = true;
        }
    }

    // ---------------- MAIN MENU ----------------
    console.log('>>> Main menu items validation');

    const mainMenus = [
//        { selector: MainMenu.Logo, name: 'Logo' },
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
            console.log('❌ Capabilities toggle no encontrado');
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
            console.log('❌ Solutions toggle no encontrado');
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
            console.log('❌ Resources toggle no encontrado');
            hasErrors = true;
            continue;
        }
        await clickMenuAndValidate(menu.selector, menu.name);
        await t.navigateTo('https://www.sightx.io/');
    }

    console.log('<<< Resources submenu items');

    // ---------------- FINAL ----------------
    if (hasErrors) {
        throw new Error('❌ Algunos menús o submenús no se encontraron o fallaron al hacer click.');
    }
});
