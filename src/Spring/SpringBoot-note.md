---
title: SpringBoot基础笔记
author: Draco
time: 2021-04-29 14:48:00
categories: 
  - Spring
tags: 
  - Spring
  - SpringBoot
---





## SpringBoot启动流程







## Maven



### 参考

::: tip 

- [maven学习笔记(超详细总结)](https://www.cnblogs.com/baizihua/p/11519509.html)
- https://blog.csdn.net/qq_44839652/article/details/107709822

:::



### 两大核心

1. 依赖管理：也就是对jar包的统一管理
2. 项目构建：在项目编码完成后，原先通过IDE对项目进行编译、测试、打包、部署等一些列操作，都可以通过Maven的命令去完成





### 标准目录结构

- **src**：用于存放项目源码
  - **main**：用于存放运行主要代码
    - **java**：用于存放主体程序源码
    - **resources**：用于存放xml等配置文件的
    - **webapps**：相当于webContent，用于存放WEB-INF、网页页面的素材（html、css、js等）
- **test**：用于存放单元测试代码
  - **java**：用于存放测试代码，单元测试类
  - **resources**：用于存放测试用的配置文件(一般少用)
- **target**：用于存放编译好的字节码文件
  - **classes**：用于存放编译好的字节码文件
- **pom.xml**：Project Object Module，Maven核心配置文件



### pom.xml文件详解

::: tip

[pom.xml文件详解](https://blog.csdn.net/weixin_38569499/article/details/91456988?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control)

:::



### 常用命令

格式：`mvn [plugin]:[command]`



| 命令        | 解释                                                         |
| ----------- | ------------------------------------------------------------ |
| mvn -v      | 查看maven版本                                                |
| mvn compile | 用来将src/main/java下的文件编译为class文件，并输出到target中。 |
| mvn package | 打包,将项目进行打包，如果是jar打包为jar，war打包为war。      |
| mvn install | 将打包jar/war包到本地仓库中，供其他模块使用                  |
| mvn deploy  | 将打包jar/war发布到远程仓库                                  |
| mvn test    | 用来将src/main/test下的测试用例进行编译，同时执行一次        |
| mvn clean   | 删除编译产生的target文件夹                                   |
| mvn site    | 生成项目相关的网站                                           |
| mvn verify  |                                                              |



### Maven多环境打包

::: tip

- [maven多环境打包](https://www.cnblogs.com/grasp/p/12118684.html)

:::



### Maven依赖范围

- **compile，**默认值，适用于所有阶段（开发、测试、部署、运行），本jar会一直存在所有阶段。
- **provided，**只在开发、测试阶段使用，目的是不让Servlet容器和你本地仓库的jar包冲突 。如servlet.jar。
- **runtime，**只在运行时使用，如JDBC驱动，适用运行和测试阶段。
- **test，**只在测试时使用，用于编译和运行测试代码。不会随项目发布。
- **system，**类似provided，需要显式提供包含依赖的jar，Maven不会在Repository中查找它。

| 范围     |      |      |      |
| -------- | ---- | ---- | ---- |
| scope    | 编译 | 测试 | 运行 |
| compile  | Y    | Y    | Y    |
| test     |      | Y    |      |
| provided | Y    | Y    |      |
| runtime  |      | Y    | Y    |
| system   | Y    | Y    |      |