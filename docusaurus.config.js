// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import 'dotenv/config';
const siteTitle = '國會濫權，立院集結！'
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteTitle,
  tagline: '下班下課立院集結，阻止國會濫權法案三讀',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://democracy.eduaction.tw/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  deploymentBranch:'gh-pages',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'edunion', // Usually your GitHub org/user name.
  projectName: '521action', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    // localeConfigs: {
    //   en: {
    //     label: 'English',
    //   },
    //   zh:{
    //     label:'中文'
    //   }
    // },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics:{
          trackingID:'G-KYM4J4FRT6',
          anonymizeIP: true,
        },
        docs: {
          //id:'tutorialSidebar',
          sidebarPath: './sidebars.js',
          routeBasePath:'docs',
          path:'docs'
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
            //showLastUpdateAuthor: false,
            //showLastUpdateTime: false
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins:[
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: './sidebarsCommunity.js',
        // ... other options
      },
    ],
  ],
  headTags: [
    // Declare some json-ld structured data
    {
      tagName: 'script',
      attributes: {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-KYM4J4FRT6',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KYM4J4FRT6');
      `,
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: `    {
        "@context" : "https://schema.org",
        "@type" : "WebSite",
        "name" : "國會濫權，立院集結！",
        "url" : "https://democracy.eduaction.tw"
      }`
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: `    {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "藍委選區，在地對話！",
        "image": [
          "https://democracy.eduaction.tw/assets/images/logo-main-v2-f576c6b05f0321976fb6af315f7f3203.webp"
         ],
        "datePublished": "2024-06-02T08:00:00+08:00",
        "dateModified": "2024-06-02T09:20:00+08:00",
        "author": [{
            "@type": "Person",
            "name": "台灣經濟民主連合",
            "url" : "https://www.facebook.com/eduniontaiwan"
          },{
            "@type": "Person",
            "name": "台灣公民陣線",
            "url" : "https://www.facebook.com/citizenfronttw"
          }]
      }`
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: `    {
        "@context" : "https://schema.org",
        "@type" : "Organization",
        "name" : "台灣經濟民主連合",
        "url" : "https://democracy.eduaction.tw",
        "sameAs": ["https://edunion.github.io/521action/"],
        "logo" : "https://democracy.eduaction.tw/img/nav-logo-n.svg",
        "description": "簡稱經民連）誕生於反服貿、太陽花運動，致力抵抗中國政商勢力，防衛台灣民主，守護台灣主權與經濟自主，追求自由、平等、團結、永續的新國家。",
        "email": "contact@edunion.org.tw",
        "telephone": "02-2395－2552 ",
        "address" : {
          "@type": "PostalAddress",
          "addressLocality": "Taipei",
          "addressCountry": "TW",
          "postalCode": "100"
        }
        
      }`
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML:`     {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "在地對話",
          "item": "https://democracy.eduaction.tw/community/course/post1"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "立院集結",
          "item": "https://democracy.eduaction.tw/docs/415"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "相關討論貼文",
          "item": "https://democracy.eduaction.tw/media"
        }]
      }`
    }
  ],
  themeConfig:
    
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      metadata: [
        {name: 'keywords', content: '521 , 行動 , 經濟民主連合 , 經民連'},
        {name: 'name', content: siteTitle },
        {name: 'google-site-verification' , content: '4nQ-VE63O8JpuCWn1Ofgwj4oxUjTiot2n3xJxGQxH88'},
        {name: 'description' , content: '近三次院會（17、21、24）立法院外集結超過十萬人的自主公民，抗議藍白二黨以違背程序正義的方式要通過國會濫權法案，這是台灣自主公民力量，挺身捍衛民主。立院以外，全台各地都有群眾集結，展現台灣人民對民主的堅持，以及願意守護這塊土地的行動力。 然而，國眾兩黨仍試圖力拼明日(28)完成三讀，台灣公民陣線，經濟民主連合與公投護台灣聯盟等超過五十個合辦團體持續邀請全台公民一同全程監督，用力喊出人民的怒吼，並集思廣益下一步行動方向。'}
      ],
      navbar: {
        title: siteTitle ,
        logo: {
          alt: 'edunion Logo',
          src: 'img/nav-logo-n.svg',
          srcDark:'img/nav-logo-d.svg'
        },
        items: [
          {
            to:'/community/course/post1',
            position: 'left',
            label: '在地對話',
          },          
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '立院集結',
          },
          {to:'/media' , label:'相關討論貼文' , position:'left'},
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.edunion.org.tw/',
            label: '台灣經濟民主連合',
            position: 'right',
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: '官方',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: '社群',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/eduniontaiwan',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/eduniontaiwan/',
              },
              {
                label: 'Threads',
                href: 'https://www.threads.net/@eduniontaiwan',
              },
            ],
          },
          {
            title: '贊助經民連',
            items: [
              {
                label: '單筆捐款',
                href: 'https://donate.newebpay.com/edutw/donate',
              },
              {
                label: '定期定額捐款',
                href: 'https://donate.newebpay.com/Period/edutw/edunion',
              },
            ],
          },
        ],
        copyright: ` ${new Date().getFullYear()} 台灣經濟民主連合`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
