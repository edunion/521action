/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
  '415'
  ,{
    type: 'category',
      label: '【5/17】相關修法內容',
      "collapsed": true,
      "link": {
        "type": "generated-index",
        "description": "【5/17】相關修法內容"
      },
      items: [
        {
          type: 'autogenerated',
          dirName: '517file', // Generate sidebar from the docs folder (relative to docs directory) 
        },{
          type: 'link',
          label: '國會擴權爭議專區 （沈伯洋委員網站）', 
          href: 'https://www.pumashen.org/0517', 
        }
      ]
  },
  {
    type: 'category',
      label: '【5/21】相關修法內容(網路資料彙整)',
      "collapsed": true,
      "link": {
        "type": "generated-index",
        "description": "【5/21】相關修法內容"
      },
      items: [
        {
          type: 'autogenerated',
          dirName: '521file', // Generate sidebar from the docs folder (relative to docs directory) 
        },{
          type:"link",
          label:"立法院職權行使法修法內容（轉載g0v）",
          href:"https://g0v.hackmd.io/S-FJ3CDERg2dXgqf_bjj8g"
        }
      ]
  },
  {
    type: 'category',
      label: '【5/24】行動相關',
      "collapsed": true,
      "link": {
        "type": "generated-index",
        "description": "【5/24】行動相關內容"
      },
      items: [
        {
          type: 'autogenerated',
          dirName: '524file', // Generate sidebar from the docs folder (relative to docs directory) 
        }
      ]
  },
  {
    type: 'category',
      label: '【5/28】行動相關',
      "collapsed": false,
      "link": {
        "type": "generated-index",
        "description": "【5/28】行動相關內容"
      },
      items: [
        {
          type: 'autogenerated',
          dirName: '528file', // Generate sidebar from the docs folder (relative to docs directory) 
        },
      ]
  },
  {
    type: 'link',
    label: '相關討論貼文', // The link label
    href: '/media', // The external URL
  }
]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;