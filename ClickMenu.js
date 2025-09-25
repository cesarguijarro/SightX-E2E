import { MainMenu } from "./MainMenu.js";
import Funciones, { softExpect, checkSoftExpectResults } from "./Funciones/page-model.js";

const waitingTime = 3000;
const f = new Funciones();

fixture('E2E SightX - Validate all menu items')
    .page('https://www.sightx.io/');

test('TEST: Click all main menu options and validate page content', async t => {
    await t.maximizeWindow();
    console.log('>>> Main menu items validation');

    const menusToClick = [
        //MainMenu.Logo,
        MainMenu.WhySightXMenu,
        MainMenu.MeetAdaMenu,
        MainMenu.CapabilitiesMenu,
        MainMenu.SolutionsMenu,
        MainMenu.CustomersMenu,
        MainMenu.PricingMenu,
        MainMenu.ResourcesMenuIcon
    ];

    for (const menu of menusToClick) {
        const menuExists = await softExpect(t, menu, `✅ Menu visible`);
        if (menuExists) {
            await f._clickAndLog(t, menu, `Clicked menu`, waitingTime);

            const bodyText = await t.eval(() => document.body.innerText);
            if (bodyText && bodyText.trim().length > 0) {
                console.log("✅ Page has content");
            } else {
                console.log("❌ Page has no content");
                await t.takeScreenshot({ path: `screenshots/${Date.now()}-fail.png`, fullPage: true });
            }
        }

        await t.navigateTo('https://www.sightx.io/');
    }

    console.log('<<< Main menu items validation');

    // ---------------- CAPABILITIES ----------------
    const capabilitiesMenus = [
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
    ];

    console.log('>>> Capabilities submenu items');
    for (const menu of capabilitiesMenus) {
        await t.click(MainMenu.CapabilitiesMenu).wait(waitingTime);

        const menuExists = await softExpect(t, menu, `✅ Submenu visible`);
        if (menuExists) {
            await f._clickAndLog(t, menu, `Clicked submenu`, waitingTime);

            const bodyText = await t.eval(() => document.body.innerText);
            if (bodyText && bodyText.trim().length > 0) {
                console.log("✅ Page has content");
                await t.takeScreenshot({ path: `screenshots/${Date.now()}-pass.png`, fullPage: true });
            } else {
                console.log("❌ Page has no content");
                await t.takeScreenshot({ path: `screenshots/${Date.now()}-fail.png`, fullPage: true });
            }
        }

        await t.navigateTo('https://www.sightx.io/');
    }
    console.log('<<< Capabilities submenu items');

    // ---------------- SOLUTIONS ----------------
    const solutionsMenus = [
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
    ];

    console.log('>>> Solutions submenu items');
    for (const menu of solutionsMenus) {
        await t.click(MainMenu.SolutionsMenuIcon).wait(waitingTime);

        const menuExists = await softExpect(t, menu, `✅ Submenu visible`);
        if (menuExists) {
            await f._clickAndLog(t, menu, `Clicked submenu`, waitingTime);

            const bodyText = await t.eval(() => document.body.innerText);
            if (bodyText && bodyText.trim().length > 0) {
                console.log("✅ Page has content");
                await t.takeScreenshot({ path: `screenshots/${Date.now()}-pass.png`, fullPage: true });                
            } else {
                console.log("❌ Page has no content");
                await t.takeScreenshot({ path: `screenshots/${Date.now()}-fail.png`, fullPage: true });
            }
        }

        await t.navigateTo('https://www.sightx.io/');
    }
    console.log('<<< Solutions submenu items');

    // ---------------- RESOURCES ----------------
    const resourcesMenus = [
        MainMenu.BlogMenu,
        MainMenu.ContentHubMenu,
        MainMenu.GlossaryMenu
    ];

    console.log('>>> Resources submenu items');
    for (const menu of resourcesMenus) {
        await t.click(MainMenu.ResourcesMenuIcon).wait(waitingTime);

        const menuExists = await softExpect(t, menu, `✅ Submenu visible`);
        if (menuExists) {
            await f._clickAndLog(t, menu, `Clicked submenu`, waitingTime);

            const bodyText = await t.eval(() => document.body.innerText);
            if (bodyText && bodyText.trim().length > 0) {
                console.log("✅ Page has content");
                await t.takeScreenshot({ path: `screenshots/${Date.now()}-pass.png`, fullPage: true });                
            } else {
                console.log("❌ Page has no content");
                await t.takeScreenshot({ path: `screenshots/${Date.now()}-fail.png`, fullPage: true });
            }
        }

        await t.navigateTo('https://www.sightx.io/');
    }
    console.log('<<< Resources submenu items');

    // ---------------- FINAL CHECK ----------------
    checkSoftExpectResults();
});
