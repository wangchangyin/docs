module.exports = {
    // base:'/docs/',  //网站base 填写了域名，不需要此配置
    title:'CY的博客',
    description:'CY的博客,王长印,个人博客',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],//网页图片
      ['meta', { name: 'Keywords', href: 'CY的博客,王长印,个人博客' }],
      ['meta', { name: 'author', href: '王长印' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
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
    plugins: {
      //时间格式化
      '@vuepress/last-updated': // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment') // https://momentjs.com/
          return moment(timestamp).format('YYYY/MM/DD, hh:mm:ss');
        }
      },
      //pwa离线访问
      '@vuepress/pwa': {
          serviceWorker: true,
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
      },
      //设置vssue评论
      '@vssue/vuepress-plugin-vssue': {
          // 设置 `platform` 而不是 `api`
          platform: 'github-v4', //v3的platform是github，v4的是github-v4
    
          // 其他的 Vssue 配置
          owner: 'wangchangyin',//github账户名
          repo: 'docs',//github一个项目的名称
          clientId: '55b623aafc4fbda41ebf',//注册的Client ID
          clientSecret: '6af6c813a72b94fe3254dfd6b21b35ad4c07f24e',//注册的Client Secret
          autoCreateIssue:true,// 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
          locale:'zh-CN' //语言
      },
    }
  }