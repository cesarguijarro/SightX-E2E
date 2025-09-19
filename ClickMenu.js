import { MainMenu } from "./MainMenu.js";
import Funciones, { softExpect } from "./Funciones/page-model.js";

const waitingTime = 3000;
//const customReporter = require('./Funciones/testcafe-reporter-custom')();

const f = new Funciones();



fixture('E2E SightX - Validate all menu items')
    .page('https://www.sightx.io/');

test('TEST: Click all main menu options', async t => {
    await t.maximizeWindow();
    // Validar menú principal
    console.log('>>>  Main menu items Validation');
    const menusToClick = [
        MainMenu.Logo,
        MainMenu.WhySightXMenu,
        MainMenu.MeetAdaMenu,
        MainMenu.CapabilitiesMenu,
        MainMenu.SolutionsMenu,
        MainMenu.CustomersMenu,
        MainMenu.PricingMenu,
        MainMenu.ResourcesMenu
    ];
    
    await t.navigateTo('https://www.sightx.io/').wait(waitingTime);
    
    for (const menu of menusToClick) {
    // click on the caret to open the submenu
        const menuText = await menu.innerText;
        const isVisible = await softExpect(t, menu, `${menuText}`);

        if (isVisible) {
            await f._clickAndLog(t, menu, `${menuText} clicked`, waitingTime);
        }
        
        await t.navigateTo('https://www.sightx.io/');

    }
    console.log('<<< Main menu  items Validation');
    
    await softExpect(t, MainMenu.Logo, '.');

    //Validar submenús Capabilities
    const MenusToClick = [
        MainMenu.AudienceSegmentationMenu,
        MainMenu.BrandTrackingMenu,
        MainMenu.ConceptTestingMenu,
        MainMenu.ConjointAnalysisMenu,
        MainMenu.HeatMappingMenu,
        MainMenu.KeyDriverAnalysisMenu,
        MainMenu.MaxDiffAnalysisMenu,
        MainMenu.VideoInterviewsMenu,
        MainMenu.GaborGrangerMenu,
        MainMenu.VanWestendorpMenu,
        MainMenu.SignificanceTestingMenu,
        MainMenu.SurveySoftwareMenu,
        MainMenu.TextAnalysisMenu,
        MainMenu.TURFAnalysisMenu,  
        MainMenu.OnlinePanelsMenu,
        MainMenu.ResearchServicesMenu
        // ... agrega el resto de submenús
    ];

    console.log('>>>  Capabilities submenu items');
    for (const menu of MenusToClick) {
    // click on the caret to open the submenu
        await t.click(MainMenu.CapabilitiesMenu).wait(waitingTime);

        const menuText = await menu.innerText;
        const isVisible = await softExpect(t, menu, `${menuText}`);

        if (isVisible) {
            await f._clickAndLog(t, menu, `${menuText} clicked`, waitingTime);
        }
        
        await t.navigateTo('https://www.sightx.io/');

    }
    console.log('<<< Capabilities submenu items');
    
    await softExpect(t, MainMenu.Logo, '..');
    // Validar submenús Solutions
    const SolutionsToClick = [
        MainMenu.BrandTrackingSolutionsMenu,
        MainMenu.ContentCreationMenu,
        MainMenu.CustomerExperienceMenu,
        MainMenu.MarketingAdvertisingMenu,
        MainMenu.PricingStrategyMenu,
        MainMenu.ProductDevelopmentMenu,
        MainMenu.ResearchInsightsMenu,
        MainMenu.ProductManagersMenu,
        MainMenu.MarketersMenu,
        MainMenu.BrandManagersMenu,
        MainMenu.InvestorsMenu
        // ... agrega el resto de submenús
    ];

    console.log('>>>  Solutions submenu items');
    for (const menu of SolutionsToClick) {
    await t.click(MainMenu.SolutionsMenuIcon).wait(waitingTime);
    const menuText = await menu.innerText;
    const isVisible = await softExpect(t, menu, `${menuText}`);

    if (isVisible) {
        await f._clickAndLog(t, menu, `${menu} clicked`, waitingTime);
    }
    await t.navigateTo('https://www.sightx.io/');
    }
    console.log('<<< Solutions submenu items');

    // Validar submenús Resources
    const ResourcesToClick = [
        MainMenu.BlogMenu,
        MainMenu.ContentHubMenu,
        MainMenu.GlossaryMenu
    ];
    console.log('>>>  Resources submenu items');
    for (const menu of ResourcesToClick) {
        // click on the caret to open the submenu
        await t.click(MainMenu.ResourcesMenuIcon).wait(waitingTime);
        const menuText = await menu.innerText;
        const isVisible = await softExpect(t, menu, `${menuText}`);

        if (isVisible) {
            await f._clickAndLog(t, menu, `${menuText} clicked`, waitingTime);
        }
        await t.navigateTo('https://www.sightx.io/');

    }
    console.log('<<< Resources submenu items');
});