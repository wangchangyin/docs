module.exports=[
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
  ]