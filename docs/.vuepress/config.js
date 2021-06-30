const moment = require('moment');
moment.locale('zh-CN');

module.exports = {
    title:'CY的博客',
    description:'CY的博客,王长印,个人博客',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'Keywords', href: 'CY的博客,王长印,个人博客' }],
      ['meta', { name: 'author', href: '王长印' }]
    ],

    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp) => {
            return moment(timestamp).format('llll'); // 2021年6月30日星期三 23:06
          }
        }
      ]
    ],

    themeConfig: {
      logo: '/assets/img/hero.png',
      lastUpdated: '更新时间', // string | boolean
      nav: [
        { text: 'Home', link: '/' },
        { text: '关于我', link: '/about/' },
        { text: 'External', link: 'https://google.com' },
        {
          text: '后端',
          items: [
            { text: 'Spring Boot', items: 
              [
                { text: '服务注册', link: '/regist/' },
                { text: '服务调用', link: '/fegin/' }
              ] 
            },
            { text: 'Spring Cloud', items: 
              [
                { text: '服务注册', link: '/fegin/' },
                { text: '服务调用', link: '/fegin/' }
              ] 
            }
          ]
        }
      ],
      // sidebar: 'auto'
      sidebar: {
        '/foo/': [
          '',     /* /foo/ */
          'one',  /* /foo/one.html */
          'two'   /* /foo/two.html */
        ],
  
        '/bar/': [
          '',      /* /bar/ */
          'three', /* /bar/three.html */
          'four'   /* /bar/four.html */
        ],
  
        // fallback
        '/': [
          '',        /* / */
          'contact', /* /contact.html */
          'about'    /* /about.html */
        ]
      }
    }
  }