//引入配置文件
const headConfig=require("./config/headConfig");
const pluginsConfig=require("./config/pluginsConfig");
const navConfig=require("./config/navConfig");
const sidebarConfig=require("./config/sidebarConfig");

module.exports = {
    // base:'/docs/',  //网站base 填写了域名，不需要此配置
    title:'CY的博客',
    description:'CY的博客,王长印,个人博客',
    head: headConfig,
    themeConfig: {
      logo: '/assets/img/hero.png',
      lastUpdated: '更新时间', // string | boolean
      nav: navConfig,
      // sidebar: 'auto'
      sidebar:sidebarConfig 
    },
    plugins:pluginsConfig 
  }