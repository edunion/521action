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
          path:'docs',

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateAuthor: false,
          showLastUpdateTime: true
        },
        blog: {
          //showReadingTime: true,
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
        showLastUpdateTime: true

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
        type: 'application/ld+json',
      },
      innerHTML: `    {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "藍委選區，在地對話",
        "image": [
          "https://democracy.eduaction.tw/assets/images/logo-main-v2-f576c6b05f0321976fb6af315f7f3203.webp"
         ],
        "datePublished": "2024-06-19T08:09:00+08:00",
        "dateModified": "2024-06-19T09:20:00+08:00",
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
      innerHTML: ` {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "公民反國會濫權，重返立法院集結",
        "startDate": "2024-06-19",
        "endDate": "2024-06-21",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
          "@type": "Place",
          "name": "Snickerpark Stadium",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "青島東路",
            "addressLocality": "台北市中正區",
            "postalCode": "100",
            "addressCountry": "TW"
          }
        },
        "image": [
          "https://democracy.eduaction.tw/assets/images/statement-7722e677d255000d2601ff722371cef3.jpeg"
         ],
        "description": "本次集結由台灣公民陣線、經濟民主連合、公投護台灣聯盟及其他合辦團體共同發起，保守估計將會有破萬人參與，這是公民力量的再次集結。立法院將在本週三、四、五對國會濫權法案的覆議案，進行審查與表決。這是關鍵時刻，全體公民必須團結一致，站出來表達對這些濫權法案的強烈反對，攜手捍衛民主制度。",
        "organizer": {
          "@type": "Organization",
          "name": "台灣經濟民主連合",
          "url": "https://democracy.eduaction.tw"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://democracy.eduaction.tw",
          "price": "0"
        }
      }  `
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: `    {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "公民反國會濫權，重返立院集結行動",
        "image": [
          "https://democracy.eduaction.tw/assets/images/logo-main-v2-f576c6b05f0321976fb6af315f7f3203.webp"
         ],
        "datePublished": "2024-06-19T09:19:00+08:00",
        "dateModified": "2024-06-19T09:20:00+08:00",
        "author": [{
            "@type": "Person",
            "name": "台灣經濟民主連合",
            "url" : "https://www.facebook.com/eduniontaiwan"
          },{
            "@type": "Person",
            "name": "台灣公民陣線",
            "url" : "https://www.facebook.com/citizenfronttw"
          },{
            "@type": "Person",
            "name": "經民連",
            "url" : "https://www.facebook.com/eduniontaiwan"
          }]
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
        "headline": "國會濫權，立院集結！",
        "image": [
          "https://democracy.eduaction.tw/assets/images/logo-main-v2-f576c6b05f0321976fb6af315f7f3203.webp"
         ],
        "datePublished": "2024-06-19T08:09:00+08:00",
        "dateModified": "2024-06-19T09:20:00+08:00",

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
        "description": "經濟民主連合（簡稱經民連）誕生於反服貿及太陽花運動期間，經濟民主連合是一個思想的、政策的、運動的集合體。他是知識社群，是智庫，也是運動團體，出書、提法案，投入運動，致力抵抗中國政商勢力，防衛台灣民主，守護台灣主權與經濟自主，追求自由、平等、團結、永續的新國家。",

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
        {name: 'keywords', content: '521 , 行動 , 經濟民主連合 , 經民連 , 我藐視國會 , 輪流請假 , 公民排班 , 捍衛民主 , 經民連 , 經濟民主連合 , 國會濫權 , 立院集結 , 在地對話 , 前進新北 , 三讀通過 , 立法院職權行使法 , 民主倒退公民搶救 , 國會濫權立院集結, 青鳥行動 '},
        {name: 'name', content: siteTitle + '在地對話，前進新北' },
        {name: 'google-site-verification' , content: '4nQ-VE63O8JpuCWn1Ofgwj4oxUjTiot2n3xJxGQxH88'},
        {name: 'description' , content:'立法院外集結超過十萬人的自主公民反國會濫權，青鳥行動展現台灣人民對民主的堅持，抗議藍白違背程序正義通過國會濫權法案挺身捍衛民主。全台各地都有群眾集結。台灣公民陣線，經濟民主連合與公投護台灣聯盟等超過五十個合辦團體持續邀請全台公民一同全程監督，用力喊出人民的怒吼，並集思廣益下一步行動方向。台灣公民陣線串聯全國各地自主公民、在地公民團體舉辦相關活動，把握覆議後立法院重新議決前的有限時間，與藍營選區選民對話，向藍營立委施壓，希望改變藍營區域立委覆議時的投票傾向。我們對於「反國會濫權行動」，揭開了為期三天的「公民反國會濫權，拒絕民主倒退，警告中國國民黨」行動序幕。此次行動由台灣公民陣線、經濟民主連合、公投護台灣聯盟等多個團體共同發起，保守估計將有破萬人參與，展現公民力量的再次集結。青島東路白天：夏季學校課程啟動。濟南路白天：拒絕民主倒退、警告中國國民黨 公民論壇。​'}

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
            to:'/community/archive2/post1',

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
          {
            title: '合作聯繫',
            items:[{html:`contact@edunion.org.tw `}]
          }
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
