export interface WineHistoryType {
    percentage : number,
    history : string,
}
export interface Logo {
    label : string,
    path : string,
} ;
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