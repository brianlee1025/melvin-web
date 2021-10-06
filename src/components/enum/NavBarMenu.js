export const menus = [
    {
        name: 'Home',
        url: '/',
        dropDown: false
    },
    {
        name: 'About Us',
        url: '/aboutUs',
        dropDown: false
    },
    {
        name: 'Products',
        url: '/products',
        dropDown: true,
        dropDownItems: [
            {
                name: 'Product 1',
                url: '/product/1'
            },
            {
                name: 'Product 2',
                url: '/product/2'
            },
            {
                name: 'Product 3',
                url: '/product/3'
            },
            {
                name: 'Product 4',
                url: '/product/4'
            }
        ]
    },
    {
        name: 'Stockist',
        url: '/stockist',
        dropDown: false
    },
    {
        name: 'FAQ',
        url: '/faq',
        dropDown: false
    },
    {
        name: 'Achievement',
        url: '/achievement',
        dropDown: false
    },
    {
        name: 'News & Event',
        url: '/news&event',
        dropDown: false
    },
    {
        name: 'Contact',
        url: '/contact',
        dropDown: false
    },
]