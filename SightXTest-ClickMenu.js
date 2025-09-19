import { Selector } from "testcafe";
import { ClientFunction } from 'testcafe';
import XPathSelector from "./xpath-selector";
import { Funciones } from "./Funciones/page-model.js";
import { log } from "console";
import { softExpect } from "./Funciones/page-model.js";

let waitingTime = 3000;

fixture( 'E2E SightX - Validate all menu items' )
    .page('https://www.sightx.io/')

            /* Define all menu items */
        const Logo = XPathSelector('//img[@alt="Home"]');
        const WhySightXMenu = XPathSelector('//a[contains(text(),"Why SightX?")]');
        const MeetAdaMenu = XPathSelector('//a[contains(text(),"Meet Ada")]');
        const CapabilitiesMenu = XPathSelector('(//span[@class="menu-toggle"])[1]');
        const SolutionsMenu = XPathSelector('//a[contains(text(),"Solutions")]');

        const SolutionsMenuIcon = XPathSelector('(//span[@class="menu-toggle"])[2]');
        const CustomersMenu = XPathSelector('//a[contains(text(),"Customers")]');
        const PricingMenu = XPathSelector('//a[contains(text(),"Pricing")]');
        const ResourcesMenu = XPathSelector('//a[contains(text(),"Resources")]');
        const ResourcesMenuIcon = XPathSelector('(//span[@class="menu-toggle"])[3]');

        const ContentCreationMenu = XPathSelector('//a[contains(normalize-space(.),"Content Creation")]');
        const CustomerExperienceMenu = XPathSelector('//a[contains(normalize-space(.),"Customer Experience")]');
        const MarketingAdvertisingMenu = XPathSelector('//a[contains(normalize-space(.),"Marketing & Advertising")]');
        const PricingStrategyMenu = XPathSelector('//a[contains(normalize-space(.),"Pricing Strategy")]');
        const ProductDevelopmentMenu = XPathSelector('//a[contains(normalize-space(.),"Product Development")]');
        const ResearchInsightsMenu = XPathSelector('//a[contains(normalize-space(.),"Research and Insights")]');
        const ProductManagersMenu = XPathSelector('//a[contains(normalize-space(.),"Product Managers")]');
        const MarketersMenu = XPathSelector('//a[contains(normalize-space(.),"Marketers")]');
        const BrandManagersMenu = XPathSelector('//a[contains(normalize-space(.),"Brand Managers")]');
        const InvestorsMenu = XPathSelector('//a[contains(normalize-space(.),"Investors")]');

        const BlogMenu = XPathSelector('//a[contains(normalize-space(.),"Blog")]');
        const ContentHubMenu = XPathSelector('//a[contains(normalize-space(.),"Content Hub")]');
        const GlossaryMenu = XPathSelector('//a[contains(normalize-space(.),"Glossary")]');

        const AudienceSegmentationMenu = XPathSelector('//a[contains(text(),"Audience Segmentation")]');
        const BrandTrackingMenu = XPathSelector('//a[contains(text(),"Brand Tracking")]');
        const ConceptTestingMenu = XPathSelector('//a[contains(text(),"Concept Testing")]');
        const ConjointAnalysisMenu = XPathSelector('//a[contains(text(),"Conjoint Analysis")]');
        const HeatMappingMenu = XPathSelector('//a[contains(text(),"Heat Mapping")]');
        const KeyDriverAnalysisMenu = XPathSelector('//a[contains(text(),"Key Driver Analysis")]');
        const MaxDiffAnalysisMenu = XPathSelector('//a[contains(text(),"MaxDiff Analysis")]');
        const VideoInterviewsMenu = XPathSelector('//a[contains(text(),"Video Interviews")]');
        const GaborGrangerMenu = XPathSelector('//a[contains(text(),"Gabor-Granger")]');
        const VanWestendorpMenu = XPathSelector('//a[contains(text(),"Van Westendorp")]');
        const SignificanceTestingMenu = XPathSelector('//a[contains(text(),"Significance Testing")]');
        const SurveySoftwareMenu = XPathSelector('//a[contains(text(),"Survey Software")]');
        const TextAnalysisMenu = XPathSelector('//a[contains(text(),"Text Analysis")]');
        const TURFAnalysisMenu = XPathSelector('//a[contains(text(),"TURF Analysis")]');
        const OnlinePanelsMenu = XPathSelector('//a[contains(text(),"Online Panels")]');
        const ResearchServicesMenu = XPathSelector('//a[contains(text(),"Research Services")]');

    test.only('TEST : SightX Click all options in main menu', async t => {
            await t
                .maximizeWindow()
                .wait(waitingTime)  
                /* Validate all main menu items are visible */
                .expect(Logo.exists).ok('Logo is not visible')
                .expect(WhySightXMenu.exists).ok('Why SightX? menu is not visible')
                .expect(MeetAdaMenu.exists).ok('Meet Ada menu is not visible')
                .expect(CapabilitiesMenu.exists).ok('Capabilities menu is not visible')
                .expect(SolutionsMenu.exists).ok('Solutions menu is not visible')
                .expect(CustomersMenu.exists).ok('Customers menu is not visible')
                .expect(PricingMenu.exists).ok('Pricing menu is not visible')
                .expect(ResourcesMenu.exists).ok('Resources menu is not visible');

                log('All main menu items are visible');
                /**** Validate when Click main menu there is no error  */

                await t
                    .click(WhySightXMenu)
                    .wait(waitingTime);
                await softExpect(t, WhySightXMenu, 'Why SightX? menu clicked');
                await t.navigateTo('https://www.sightx.io/');

                await t
                    .click(MeetAdaMenu)
                    .wait(waitingTime);
                await softExpect(t, MeetAdaMenu, 'Meet Ada menu clicked');
                await t.navigateTo('https://www.sightx.io/');

                await t
                    .click(CapabilitiesMenu)
                    .wait(waitingTime);
                await softExpect(t, CapabilitiesMenu, 'Capabilities menu clicked');
                await t.navigateTo('https://www.sightx.io/');

                await t
                    .click(SolutionsMenu)
                    .wait(waitingTime);
                await softExpect(t, SolutionsMenu, 'Solutions menu clicked');
                await t.navigateTo('https://www.sightx.io/');

                await t
                    .click(CustomersMenu)
                    .wait(waitingTime);
                await softExpect(t, CustomersMenu, 'Customers menu clicked');
                await t.navigateTo('https://www.sightx.io/');

                await t
                    .click(PricingMenu)
                    .wait(waitingTime)
                await softExpect(t, PricingMenu, 'Pricing menu clicked');
                await t.navigateTo('https://www.sightx.io/');

                await t
                    .click(ResourcesMenu)
                    .wait(waitingTime);
                await softExpect(t, ResourcesMenu, 'Resources menu clicked');
                await t.navigateTo('https://www.sightx.io/');
                    
        });
