interface List {
    label : string ,
    path : string ,
}
export interface FooterMenuOneItem {
    title : string,
    list : List[],
}
export const RecentArticles : FooterMenuOneItem[] = [
    {
        title : 'Recent articles',
        list : [
            {
                label : 'Champagne (Taste, Best Bottles, Prices 2021)',
                path : '/blog/champagne',
            },
            {
                label : 'How to Make a Mimosa (Recipe, Wine Ideas, Serving)',
                path : '/blog/mimosa',                
            },
            {
                label : 'Easy Sangria Recipes (Tips, Best Wines)',
                path : '/blog/sangria',
            },
            {
                label : 'Malbec Wine - Winemaking, Best Wines, Prices (2021)',
                path : '/blog/malbec-wine',
            },
            {
                label : 'Sauvignon Blanc (Best Wines, Taste, Prices 2021)',
                path : '/blog/sauvignon-blanc',
            },
        ],
    },
]