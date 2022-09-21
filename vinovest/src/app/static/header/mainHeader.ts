export interface MenuItem {
    label : string,
    path : string,
}

export const MainMenuItems : MenuItem[] = [
    {
        label : 'why wine',
        path : '/about-us'
    },
    {
        label : 'how it works',
        path : '/howitworks',
    },
    {
        label : 'marketplace',
        path : '/marketplace',
    },
    {
        label : 'whiskeyvest',
        path : '/whiskeyvest',
    },  
]