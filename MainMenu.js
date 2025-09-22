import XPathSelector from "./Funciones/xpath-selector.js";

export const MainMenu = {
    Home: XPathSelector('//img[@alt="Home"]'),

    // Menú principal
    WhySightXMenu: XPathSelector('//a[contains(text(),"Why SightX?")]'),
    MeetAdaMenu: XPathSelector('//a[contains(text(),"Meet Ada")]'),
    CapabilitiesMenu: XPathSelector('(//span[@class="menu-toggle"])[1]'),
    SolutionsMenu: XPathSelector('//a[contains(text(),"Solutions")]'),
    SolutionsMenuIcon: XPathSelector('(//span[@class="menu-toggle"])[2]'),
    CustomersMenu: XPathSelector('//a[contains(text(),"Customers")]'),
    PricingMenu: XPathSelector('//a[contains(text(),"Pricing")]'),
    ResourcesMenu: XPathSelector('//a[contains(text(),"Resources")]'),
    ResourcesMenuIcon: XPathSelector('(//span[@class="menu-toggle"])[3]'),

    // Submenú Capabilities
    AudienceSegmentationMenu: XPathSelector('//a[contains(text(),"Audience Segmentation")]'),
    BrandTrackingMenu: XPathSelector('//a[contains(text(),"Brand Tracking")]'),
    ConceptTestingMenu: XPathSelector('//a[contains(text(),"Concept Testing")]'),
    ConjointAnalysisMenu: XPathSelector('//a[contains(text(),"Conjoint Analysis")]'),
    HeatMappingMenu: XPathSelector('//a[contains(text(),"Heat Mapping")]'),
    KeyDriverAnalysisMenu: XPathSelector('//a[contains(text(),"Key Driver Analysis")]'),
    MaxDiffAnalysisMenu: XPathSelector('//a[contains(text(),"MaxDiff Analysis")]'),
    VideoInterviewsMenu: XPathSelector('//a[contains(text(),"Video Interviews")]'),
    GaborGrangerMenu: XPathSelector('//a[contains(text(),"Gabor-Granger")]'),
    VanWestendorpMenu: XPathSelector('//a[contains(text(),"Van Westendorp")]'),
    SignificanceTestingMenu: XPathSelector('//a[contains(text(),"Significance Testing")]'),
    SurveySoftwareMenu: XPathSelector('//a[contains(text(),"Survey Software")]'),
    TextAnalysisMenu: XPathSelector('//a[contains(text(),"Text Analysis")]'),
    TURFAnalysisMenu: XPathSelector('//a[contains(text(),"TURF Analysis")]'),
    OnlinePanelsMenu: XPathSelector('//a[contains(text(),"Online Panels")]'),
    ResearchServicesMenu: XPathSelector('//a[contains(text(),"Research Services")]'),

    // Submenú Solutions
    BrandTrackingSolutionsMenu: XPathSelector('(//a[@href="/market-research-solutions/brand-tracking"])[2]'),
    ContentCreationMenu: XPathSelector('//a[contains(normalize-space(.),"Content Creation")]'),
    CustomerExperienceMenu: XPathSelector('//a[contains(normalize-space(.),"Customer Experience")]'),
    MarketingAdvertisingMenu: XPathSelector('//a[contains(normalize-space(.),"Marketing & Advertising")]'),
    PricingStrategyMenu: XPathSelector('//a[contains(normalize-space(.),"Pricing Strategy")]'),
    ProductDevelopmentMenu: XPathSelector('//a[contains(normalize-space(.),"Product Development")]'),
    ResearchInsightsMenu: XPathSelector('//a[contains(normalize-space(.),"Research and Insights")]'),
    ProductManagersMenu: XPathSelector('//a[contains(normalize-space(.),"Product Managers")]'),
    MarketersMenu: XPathSelector('//a[contains(normalize-space(.),"Marketers")]'),
    BrandManagersMenu: XPathSelector('//a[contains(normalize-space(.),"Brand Managers")]'),
    InvestorsMenu: XPathSelector('//a[contains(normalize-space(.),"Investors")]'),

    // Submenú Resources
    BlogMenu: XPathSelector('//a[contains(normalize-space(.),"Blog")]'),
    ContentHubMenu: XPathSelector('//a[contains(normalize-space(.),"Content Hub")]'),
    GlossaryMenu: XPathSelector('//a[contains(normalize-space(.),"Glossary")]'),
};
