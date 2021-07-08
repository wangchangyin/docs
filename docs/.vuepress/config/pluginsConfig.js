module.exports={
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
    //back-to-top
    '@vuepress/back-to-top':true,
    '@vuepress/google-analytics':
    {
      'ga': 'G-PNZM9E937P' // UA-00000000-0
    }
  }