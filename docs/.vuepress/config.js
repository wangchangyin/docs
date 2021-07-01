module.exports = {
    // base:'/docs/',  //网站base 填写了域名，不需要此配置
    title:'CY的博客',
    description:'CY的博客,王长印,个人博客',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'Keywords', href: 'CY的博客,王长印,个人博客' }],
      ['meta', { name: 'author', href: '王长印' }]
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
                { text: '服务注册', link: '/about/' },
                { text: '服务调用', link: '/about/' }
              ] 
            },
            { text: 'Spring Cloud', items: 
              [
                { text: '服务注册', link: '/about/' },
                { text: '服务调用', link: '/about/' }
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
      }
    },
    plugins: [
      [
        '@vuepress/last-updated', // "上次更新"时间格式
        {
          transformer: (timestamp, lang) => {
            const moment = require('moment') // https://momentjs.com/
            return moment(timestamp).format('YYYY/MM/DD, hh:mm:ss');
          }
        }
      ]
    ]
  }