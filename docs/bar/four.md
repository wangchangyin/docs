什么是Spring Boot
Spring Boot 是由 Pivotal 团队提供的全新框架，其设计目的是用来简化新 Spring 应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。用我的话来理解，就是 Spring Boot 其实不是什么新的框架，它默认配置了很多框架的使用方式，就像 Maven 整合了所有的 Jar 包，Spring Boot 整合了所有的框架。

 

使用 Spring Boot有什么好处
其实就是简单、快速、方便！平时如果我们需要搭建一个 Spring Web 项目的时候需要怎么做呢？

1）配置 web.xml，加载 Spring 和 Spring mvc
2）配置数据库连接、配置 Spring 事务
3）配置加载配置文件的读取，开启注解
4）配置日志文件
...
配置完成之后部署 Tomcat 调试
...
现在非常流行微服务，如果我这个项目仅仅只是需要发送一个邮件，如果我的项目仅仅是生产一个积分；我都需要这样折腾一遍!

但是如果使用 Spring Boot 呢？
很简单，我仅仅只需要非常少的几个配置就可以迅速方便的搭建起来一套 Web 项目或者是构建一个微服务！

使用 Spring Boot 到底有多爽，用下面这幅图来表达



 
快速入门
说了那么多，手痒痒的很，马上来一发试试!

 

Maven 构建项目

1、访问 http://start.spring.io/
2、选择构建工具 Maven Project、Java、Spring Boot 版本 2.1.3 以及一些工程基本信息，可参考下图所示：


3、点击 Generate Project 下载项目压缩包
4、解压后，使用 Idea 导入项目，File -> New -> Model from Existing Source.. -> 选择解压后的文件夹 -> OK，选择 Maven 一路 Next，OK done!
5、如果使用的是 Eclipse，Import -> Existing Maven Projects -> Next -> 选择解压后的文件夹 -> Finsh，OK done!
Idea 构建项目

1、选择 File -> New —> Project... 弹出新建项目的框
2、选择 Spring Initializr，Next 也会出现上述类似的配置界面，Idea 帮我们做了集成
3、填写相关内容后，点击 Next 选择依赖的包再点击 Next，最后确定信息无误点击 Finish。
 

项目结构介绍

springboot2

 

如上图所示，Spring Boot的基础结构共三个文件:

l src/main/java  程序开发以及主程序入口

l src/main/resources 配置文件

l src/test/java  测试程序

 

另外，spingboot建议的目录结果如下：

root package结构：com.example.myproject

复制代码
com
  +- example
    +- myproject
      +- Application.java
      |
      +- domain
      |  +- Customer.java
      |  +- CustomerRepository.java
      |
      +- service
      |  +- CustomerService.java
      |
      +- controller
      |  +- CustomerController.java
      |
复制代码
1、Application.java 建议放到跟目录下面,主要用于做一些框架配置

2、domain目录主要用于实体（Entity）与数据访问层（Repository）

3、service 层主要是业务类代码

4、controller 负责页面访问控制

 

采用默认配置可以省去很多配置，当然也可以根据自己的喜欢来进行更改

最后，启动Application main方法，至此一个java项目搭建好了！

 

引入 Web 模块

1、pom.xml中添加支持web的模块：

<dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
 </dependency>
pom.xml文件中默认有两个模块：

spring-boot-starter：核心模块，包括自动配置支持、日志和YAML；

spring-boot-starter-test：测试模块，包括JUnit、Hamcrest、Mockito。

 

2、编写controller内容

复制代码
@RestController
public class HelloWorldController {
    @RequestMapping("/hello")
    public String index() {
        return "Hello World";
    }
}
复制代码
@RestController的意思就是controller里面的方法都以json格式输出，不用再写什么jackjson配置的了！

 

3、启动主程序，打开浏览器访问http://localhost:8080/hello，就可以看到效果了，有木有很简单！

 

如何做单元测试

打开的src/test/下的测试入口，编写简单的http请求来测试；使用mockmvc进行，利用MockMvcResultHandlers.print()打印出执行结果。

复制代码
  @RunWith(SpringRunner.class)
  @SpringBootTest

public class HelloWorldControlerTests {
    private MockMvc mvc;
    @Before
    public void setUp() throws Exception {
        mvc = MockMvcBuilders.standaloneSetup(new HelloWorldController()).build();
    }
    @Test
    public void getHello() throws Exception {
    mvc.perform(MockMvcRequestBuilders.get("/hello").accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print())
                .andReturn();
    }
}
复制代码
开发环境的调试

热启动在正常开发项目中已经很常见了吧，虽然平时开发 web 项目过程中，改动项目启重启总是报错；但 Spring Boot 对调试支持很好，修改之后可以实时生效，需要添加以下的配置：



复制代码
该模块在完整的打包环境下运行的时候会被禁用。如果你使用java -jar启动应用或者用一个特定的classloader启动，它会认为这是一个“生产环境”。

 

总结
使用 Spring Boot 可以非常方便、快速搭建项目，使我们不用关心框架之间的兼容性，适用版本等各种问题，我们想使用任何东西，仅仅添加一个配置就可以，所以使用 Spring Boot 非常适合构建微服务。

 

示例代码-github

示例代码-码云

Spring Boot 中文索引 

 

Spring Boot 2.0
Favorites-web：云收藏（Spring Boot 2.0 实战开源项目）

示例代码

spring-boot-hello：Spring Boot 2.0 Hello World 示例
spring-boot-banner：Spring Boot 定制 Banner 示例
spring-boot-docker：使用 Docker 部署 Spring Boot 示例
dockercompose-springboot-mysql-nginx ：Docker Compose + Spring Boot + Nginx + Mysql 示例
spring-boot-commandLineRunner ：Spring Boot 使用 commandLineRunner 实现项目启动时资源初始化示例
spring-boot-web-thymeleaf ：Spring Boot 使用 thymeleaf 实现布局、验参、增删改查示例
spring-boot-memcache-spymemcached ：Spring Boot 使用 spymemcached 集成 memcache 示例
spring-boot-webflux ：Spring Boot webflux 示例
参考文章

Spring Boot 2(一)：【重磅】Spring Boot 2.0权威发布
Spring Boot 2(二)：Spring Boot 2.0尝鲜-动态 Banner
Spring Boot 2(三)：Spring Boot 开源软件都有哪些？
Spring Boot 2(四)：使用 Docker 部署 Spring Boot
Spring Boot 2(五)：Docker Compose + Spring Boot + Nginx + Mysql 实践
Spring Boot 2(六)：使用 Docker 部署 Spring Boot 开源软件云收藏
Spring Boot 2(七)：Spring Boot 如何解决项目启动时初始化资源
Spring Boot 2(八)：Spring Boot 集成 Memcached
Spring Boot 2 (九)：【重磅】Spring Boot 2.1.0 权威发布
Spring Boot/Cloud 研发团队介绍
Spring Boot 2 (十)：Spring Boot 中的响应式编程和 WebFlux 入门


示例代码

spring-boot-helloWorld：Spring Boot 的 hello World 版本
spring-boot-web：Spring Boot Web 开发综合示例
spring-boot-redis：Spring Boot 集成 Redis 示例
spring-boot-jpa：Spring Boot 使用 Jpa 各种示例
spring-boot-mybaits-annotation：注解版本
spring-boot-mybaits-xml：Xml 配置版本
spring-boot-mybatis-xml-mulidatasource：Spring Boot + Mybatis (Xml 版） 多数据源最简解决方案
spring-boot-mybatis-annotation-mulidatasource：Spring Boot + Mybatis（注解版）多数据源最简解决方案
spring-boot-thymeleaf：Spring Boot 使用 Thymeleaf 详细示例
spring-boot-jpa-thymeleaf-curd：Spring Boot + Jpa + Thymeleaf 增删改查示例
spring-boot-rabbitmq：Spring Boot 和 Rabbitmq 各种消息应用案例
spring-boot-scheduler：Spring Boot 和定时任务案例
spring-boot-mail：Spring Boot 和邮件服务
spring-boot-mongodb：Spring Boot 和 Mongodb 的使用
spring-boot-multi-mongodb：Spring Boot 和 Mongodb 多数据源的使用
spring-boot-package-war： Spring Boot 打包成 War 包示例
spring-boot-shiro：Spring Boot 整合 Shiro Rbac 示例
spring-boot-file-upload：使用 Spring Boot 上传文件示例
spring-boot-fastDFS：Spring Boot 整合 FastDFS 示例
spring-boot-actuator：Spring Boot Actuator 使用示例
spring-boot-admin-simple：Spring Boot Admin 的使用示例
参考文章

Spring Boot(一)：入门篇
Spring Boot(二)：Web 综合开发
Spring Boot(三)：Spring Boot 中 Redis 的使用
Spring Boot(四)：Thymeleaf 使用详解
Spring Boot(五)：Spring Data Jpa 的使用
Spring Boot(六)：如何优雅的使用 Mybatis
Spring Boot(七)：Spring Boot + Mybatis 多数据源最简解决方案
Spring Boot(八)：RabbitMQ 详解
Spring Boot(九)：定时任务
Spring Boot(十)：邮件服务
Spring Boot(十一)：Spring Boot 中 Mongodb 的使用
Spring Boot(十二)：Spring Boot 如何测试打包部署
Spring Boot(十三)：Spring Boot 小技巧
Spring Boot(十四)：Spring Boot 整合 Shiro-登录认证和权限管理
Spring Boot(十五)：Spring Boot + Jpa + Thymeleaf 增删改查示例
Spring Boot(十六)：使用 Jenkins 部署 Spring Boot
Spring Boot(十七)：使用 Spring Boot 上传文件
Spring Boot(十八)：使用 Spring Boot 集成 FastDFS
Spring Boot(十九)：使用 Spring Boot Actuator 监控应用
Spring Boot(二十)：使用 spring-boot-admin 对 Spring Boot 服务进行监控
Spring Boot 实战：我们的第一款开源项目

如果大家想了解关于 Spring Boot 的其它方面应用，也可以以issues的形式反馈给我，我后续来完善