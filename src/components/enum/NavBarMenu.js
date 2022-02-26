export const menus = [
  {
    name: "About Us",
    url: "/aboutUs",
    dropDown: false,
  },
  // {
  //     name: 'Our Products',
  //     url: '/our-products',
  //     dropDown: true,
  //     dropDownItems: [
  //         {
  //             name: 'F&B',
  //             url: '/our-products/f&b',
  //             dropDown: true,
  //             dropDropItems: [
  //                 {
  //                     name: 'Pau Sedap',
  //                     url: '/our-products/f&b/pau-sedap'
  //                 },
  //                 {
  //                     name: 'Pau Habibi',
  //                     url: '/our-products/f&b/pau-habibi'
  //                 },
  //                 {
  //                     name: 'Ramly',
  //                     url: '/our-products/f&b/ramly'
  //                 },
  //                 {
  //                     name: 'Tisha\'s Food',
  //                     url: '/our-products/f&b/tishas-food'
  //                 },
  //                 {
  //                     name: 'Kluang Coffee',
  //                     url: '/our-products/f&b/kluang-coffee'
  //                 },
  //                 {
  //                     name: 'F&N',
  //                     url: '/our-products/f&b/f&n'
  //                 },
  //             ]
  //         },
  //         {
  //             name: 'Packaging Products',
  //             url: '/packaging-products',
  //             dropDown: true,
  //             dropDropItems: [
  //                 {
  //                     name: 'Air Bubble Wrap',
  //                     url: '/packaging-products/air-bubble-wrap'
  //                 },
  //                 {
  //                     name: 'Inflatable Bubble Wrap',
  //                     url: '/packaging-products/inflatable-bubble-wrap'
  //                 },
  //                 {
  //                     name: 'Stretch Film',
  //                     url: '/packaging-products/stretch-film'
  //                 },
  //                 {
  //                     name: 'Tapes',
  //                     url: '/packaging-products/tapes'
  //                 },
  //                 {
  //                     name: 'Others',
  //                     url: '/packaging-products/others'
  //                 },
  //             ]
  //         }
  //     ]
  // },
  {
    name: "Our Businesses",
    url: "/our-businesses",
    dropDown: true,
    dropDownItems: [
      {
        name: "Our Services",
        url: "/our-services",
        dropDown: true,
        dropDownItems: [
          {
            name: "Air Freight",
            url: "/air-freight",
            dropDown: false,
          },
          {
            name: "Sea Freight",
            url: "/sea-freight",
            dropDown: false,
          },
          {
            name: "Customs",
            url: "/customs",
            dropDown: false,
          },
          {
            name: "Inland Transportation",
            url: "/inland-transportation",
            dropDown: false,
          },
        ],
      },
      {
        name: "Our Products",
        url: "/our-products",
        dropDown: true,
        dropDownItems: [
          {
            name: "Pau Sedap",
            url: "/pau-sedap",
            dropDown: false,
          },
          {
            name: "Ramly",
            url: "/ramly",
            dropDown: false,
          },
          {
            name: "My Lacta",
            url: "/my-lacta",
            dropDown: false,
          },
          {
            name: "Cleaning Products",
            url: "/cleaning-products",
            dropDown: false,
          },
          {
            name: "Packaging Products",
            url: "/packaging-products",
            dropDown: false,
          },
        ],
      },
    ],
  },
  {
    name: "Business Opportunities",
    url: "/business-opporturnities",
    dropDown: false,
  },
  {
    name: "Contact Us",
    url: "/contact-us",
    dropDown: false,
  },
];
