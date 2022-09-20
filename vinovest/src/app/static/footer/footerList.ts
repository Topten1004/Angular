export interface ListItems {
    label : string ,
    path : string ,
}
export interface FooterMenuOneItem {
    title : string,
    list : ListItems[],
}
export const FooterMenuItem : FooterMenuOneItem[] = [
    {
        title : 'Company',
        list : [
            {
                label : 'Home',
                path : '/',
            },
            {
                label : 'About',
                path : '/about',                
            },
            {
                label : 'Vinovest council',
                path : '/vinovestcouncil',
            },
            {
                label : 'Careers',
                path : '/careers',
            },
            {
                label : 'Press',
                path : '/press',
            },
        ],
    },
    {
        title : 'Learn',
        list : [
            {
                label : 'Why wine',
                path : '/whywine',
            },
            {
                label : 'How it works',
                path : '/howitworks',
            },
            {
                label : 'Vinovest 100',
                path : '/vinovest100',
            },
            {
                label : 'Pricing',
                path : '/pricing',
            }
        ],
    },
    {
        title : 'Services',
        list : [
            {
                label : 'Guarantee',
                path : '/guarantee',
            },
            {
                label : 'Sustainability',
                path : '/sustainability',
            },
            {
                label : 'Wine futures',
                path : '/winefutures',
            },
            {
                label : 'For Advisors',
                path : '/foradvisors',
            },
            {
                label : 'Whiskeyvest',
                path : '/whiskeyvest',
            },            
        ],
    },
    {
        title : 'Resources',
        list : [
            {
                label : 'Blog',
                path : '/blog',
            },
            {
                label : 'Help',
                path : '/help',
            },
            {
                label : 'Contact me',
                path : '/contactme',
            },
            {
                label : 'Privacy policy',
                path : '/privacypolicy',
            },
            {
                label : 'T&C',
                path : '/t&c',
            },
            {
                label : 'Accessibility',
                path : '/accessibility'
            }
        ]
    }
]