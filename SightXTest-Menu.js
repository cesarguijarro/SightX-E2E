import { Selector } from "testcafe";
import { ClientFunction } from 'testcafe';
import XPathSelector from "./xpath-selector";
import { log } from "console";

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

    test.only('TEST : SightX site is UP', async t => {


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
                
            /* Validate that when click over Capabilities menu, all items are visible */
            await t
                .click(CapabilitiesMenu)
                .wait(waitingTime)

                .expect(XPathSelector('//a[contains(text(),"Audience Segmentation")]').exists).ok('Audience Segmentation is not visible')
                .expect(XPathSelector('//a[contains(text(),"Brand Tracking")]').exists).ok('Brand Tracking is not visible')
                .expect(XPathSelector('//a[contains(text(),"Concept Testing")]').exists).ok('Concept Testing is not visible')
                .expect(XPathSelector('//a[contains(text(),"Conjoint Analysis")]').exists).ok('Conjoint Analysis is not visible')
                .expect(XPathSelector('//a[contains(text(),"Heat Mapping")]').exists).ok('Heat Mapping is not visible')
                .expect(XPathSelector('//a[contains(text(),"Key Driver Analysis")]').exists).ok('Key Driver Analysis is not visible')
                .expect(XPathSelector('//a[contains(text(),"MaxDiff Analysis")]').exists).ok('MaxDiff Analysis is not visible')
                .expect(XPathSelector('//a[contains(text(),"Video Interviews")]').exists).ok('Video Interviews is not visible')
                .expect(XPathSelector('//a[contains(text(),"Gabor-Granger")]').exists).ok('Gabor-Granger is not visible')
                .expect(XPathSelector('//a[contains(text(),"Van Westendorp")]').exists).ok('Van Westendorp is not visible')
                .expect(XPathSelector('//a[contains(text(),"Significance Testing")]').exists).ok('Significance Testing is not visible')
                .expect(XPathSelector('//a[contains(text(),"Survey Software")]').exists).ok('Survey Software is not visible')
                .expect(XPathSelector('//a[contains(text(),"Text Analysis")]').exists).ok('Text Analysis is not visible')
                .expect(XPathSelector('//a[contains(text(),"TURF Analysis")]').exists).ok('TURF Analysis is not visible')
                .expect(XPathSelector('//a[contains(text(),"Online Panels")]').exists).ok('Online Panels is not visible')
                .expect(XPathSelector('//a[contains(text(),"Research Services")]').exists).ok('Research Services is not visible');
            log('All Capabilities menu items are visible');

            await t.navigateTo('https://www.sightx.io/');

            await t
                .expect(Logo.exists).ok({ timeout: 10000 })     // esperar a que esté en el DOM
                .expect(Logo.visible).ok({ timeout: 10000 })    // esperar a que sea visible
                .click(Logo)

                .wait(waitingTime)

                .click(SolutionsMenuIcon)
                .expect(ContentCreationMenu.exists).ok({ timeout: 10000 })  // espera a que exista
                .expect(ContentCreationMenu.visible).ok({ timeout: 10000 }) // espera a que sea visible
                .expect(CustomerExperienceMenu.exists).ok({ timeout: 1000 })
                .expect(CustomerExperienceMenu.visible).ok({ timeout: 1000 })
                .expect(MarketingAdvertisingMenu.exists).ok({ timeout: 1000 })
                .expect(MarketingAdvertisingMenu.visible).ok({ timeout: 1000 })
                .expect(PricingStrategyMenu.exists).ok({ timeout: 1000 })
                .expect(PricingStrategyMenu.visible).ok({ timeout: 1000 })
                .expect(ProductDevelopmentMenu.exists).ok({ timeout: 1000 })
                .expect(ProductDevelopmentMenu.visible).ok({ timeout: 1000 })
                .expect(ResearchInsightsMenu.exists).ok({ timeout: 1000 })
                .expect(ResearchInsightsMenu.visible).ok({ timeout: 1000 })
                .expect(ProductManagersMenu.exists).ok({ timeout: 1000 })
                .expect(ProductManagersMenu.visible).ok({ timeout: 1000 })
                .expect(MarketersMenu.exists).ok({ timeout: 1000 })
                .expect(MarketersMenu.visible).ok({ timeout: 1000 })
                .expect(BrandManagersMenu.exists).ok({ timeout: 1000 })
                .expect(BrandManagersMenu.visible).ok({ timeout: 1000 })
                .expect(InvestorsMenu.exists).ok({ timeout: 1000 })
                .expect(InvestorsMenu.visible).ok({ timeout: 1000 });

            log('All Solutions menu items are visible');


            await t.navigateTo('https://www.sightx.io/');

            await t
                .expect(Logo.exists).ok({ timeout: 10000 })     // esperar a que esté en el DOM
                .expect(Logo.visible).ok({ timeout: 10000 })    // esperar a que sea visible
                .click(Logo)

                .wait(waitingTime)

                .click(ResourcesMenuIcon)
                .expect(BlogMenu.exists).ok({ timeout: 10000 })  // espera a que exista
                .expect(ContentHubMenu.exists).ok({ timeout: 10000 })  // espera a que exista
                .expect(GlossaryMenu.exists).ok({ timeout: 10000 }),  // espera a que exista
            
                log('All Resources menu items are visible');
        
        });
