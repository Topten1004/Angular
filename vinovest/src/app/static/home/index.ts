export interface WineHistoryType {
    percentage : number,
    history : string,
}
export interface Logo {
    label : string,
    path : string,
} ;
export interface EachPortfolio {
    img : string,
    title : string,
    desc : string,
}
export interface EachPortfolioItem {
    title : string,
    content : string,
}
export const CompanyLogos : Logo[] = [
    {
        label : 'Forbes',
        path : '../../../assets/forbes.svg',
    },
    {
        label : 'yahoo!',
        path : '../../../assets/yahoo.svg',
    },
    {
        label : 'BUSINESS INSIDER',
        path : '../../../assets/businessInsider.svg',
    },
    {
        label : 'TechCrunch',
        path : '../../../assets/techCrunch.svg',
    },
    {
        label : 'Recommended By',
        path : '../../../assets/arrow_2.svg',
    },
] ;
export const HeroContentList : string[] = [
    'Attractive historical returns',
    'Direct ownership of world-class wines',
    'Portfolio diversity',
    'Robust recession-resistance',
] ;
export const HeroTitle = 'Fine Wine Investing for Everyone' ;
export const HeroContent = 'Fine wine is the best-kept secret in investing. Vinovest is changing that.' ;

export const RightWines_Img = '../../../assets/hero.webp' ;
export const WineHistory : WineHistoryType[] = [
    {
        percentage : 67,
        history : 'RELEASE-2015',
    },
    {
        percentage : 156,
        history : 'RELEASE-2010',
    },
    {
        percentage : 143,
        history : 'RELEASE-2009',
    },
    {
        percentage : 89,
        history : 'RELEASE 2010',
    },
    {
        percentage : 533,
        history : 'RELEASE 2000',
    },
]
export const ArrowUpImg : string = '../../../assets/arrowUp.svg' ;

export const Portfolio : EachPortfolio[] = [
    {
        img : '../../../assets/home/curatedPortfolio.svg',
        title : 'Curated Portfolio',
        desc : 'Say goodbye to rigorous research. Say hello to your personal portfolio advisor. At Vinovest, we do the hard work for you, creating globally diversified wine portfolios based on your investing preferences.',
    },
    {
        img : '../../../assets/home/diversityPortfolio.svg',
        title : 'Portfolio Diversity',
        desc : 'Traditional portfolios are a mess. Stocks, bonds, and mutual funds are all vulnerable to similar risks. Not fine wine, though. Its low correlation with traditional markets makes it recession-resistant.',
    },
    {
        img : '../../../assets/home/returns.svg',
        title : 'Excellent Returns',
        desc : 'Fine wine has returned 10.6% per year over the last 30 years, outperforming the global equities market during that same span.',
    },
    {
        img : '../../../assets/home/pricing.svg',
        title : 'Insider pricing',
        desc : 'Stop overpaying. Vinovest purchases proven vintages and emerging contenders below retail price, maximizing your potential returns on investment.',
    },
    {
        img : '../../../assets/home/advancedInsights.svg',
        title : 'Advanced Insights',
        desc : 'Harness the power of big data with our proprietary financial models. They analyze millions of historical data points to ensure a balanced portfolio of stable, high-performing wines.',
    },
    {
        img : '../../../assets/home/hassleFree.svg',
        title : 'Hassle-free',
        desc : 'Hit pause on building that wine cellar. Vinovest takes care of authenticating, storing, and securing your wine. If you want to enjoy your wine, we’ll even ship it to your doorstep.',
    },
] ;

export const HowitworksImgs : string[] = [
    '../../../assets/home/balancedInvesting.webp',
    '../../../assets/home/climens2016.webp',
    '../../../assets/home/totalAccValue.webp',
    '../../../assets/home/bonus.jpg',
] ;

export const PortfolioList : EachPortfolioItem[] = [
    {
        title : 'Tell us your goals',
        content : 'Stable returns or more aggressive? Our 1-minute assessment shapes your wine portfolio based on your investing preferences.',
    },
    {
        title : 'We build your portfolio',
        content : 'After you fund your account, we utilize master sommeliers and AI-driven algorithms to select proven, high-appreciating wines for your portfolio.',
    },
    {
        title : 'Watch your portfolio grow',
        content : 'You own your wines 100%. We’ll take care of your bottles in the meantime. Buy more, sell, or enjoy them as you wish.',
    },
    {
        title : 'Bonus Step-Talk with an advisor',
        content : 'Have questions? Book a 1:1 video chat with a Vinovest advisor to learn more about different wines, brands, and investing strategies.',
    }
] ;