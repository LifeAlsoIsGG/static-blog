(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{477:function(s,a,t){s.exports=t.p+"assets/img/image&container.561084df.png"},478:function(s,a,t){s.exports=t.p+"assets/img/Mirror.f9bd09b6.jpg"},479:function(s,a,t){s.exports=t.p+"assets/img/container.a96dbb72.jpg"},480:function(s,a,t){s.exports=t.p+"assets/img/start_mysql_container.c463a082.jpg"},481:function(s,a,t){s.exports=t.p+"assets/img/enter_container.116a0f0e.jpg"},482:function(s,a,t){s.exports=t.p+"assets/img/enter_mysql.eb865d84.jpg"},483:function(s,a,t){s.exports=t.p+"assets/img/navicat_connect_to_mysql_1.08022d31.jpg"},484:function(s,a,t){s.exports=t.p+"assets/img/navicat_connect_to_mysql_2.024b44e3.jpg"},485:function(s,a,t){s.exports=t.p+"assets/img/nginx_start.0f2c1a2d.jpg"},832:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[s._v("#")]),s._v(" 1. 概念")]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("镜像：相当于java中的类,镜像由一层层只读层堆在一起")]),s._v(" "),e("li",[s._v("容器：镜像只读层+读写层，运行态容器为由一个可读写的文件系统「静态容器」+ 隔离的进程空间和其中的进程构成(可以理解为"),e("strong",[s._v("虚拟机中的虚拟机")]),s._v(")")])])]),s._v(" "),e("p",[e("img",{attrs:{src:t(477),alt:""}})]),s._v(" "),e("h3",{attrs:{id:"_1-1-查看镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-查看镜像"}},[s._v("#")]),s._v(" 1.1 查看镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(478),alt:"镜像"}})]),s._v(" "),e("h3",{attrs:{id:"_1-2-查看容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-查看容器"}},[s._v("#")]),s._v(" 1.2 查看容器")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(479),alt:"容器"}})]),s._v(" "),e("h2",{attrs:{id:"_2-安装mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装mysql"}},[s._v("#")]),s._v(" 2. 安装Mysql")]),s._v(" "),e("h3",{attrs:{id:"_2-1-下载mysql5-7的docker镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-下载mysql5-7的docker镜像"}},[s._v("#")]),s._v(" 2.1 下载mysql5.7的docker镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker pull mysql:5.7\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2-2-使用docker命令启动容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用docker命令启动容器"}},[s._v("#")]),s._v(" 2.2 使⽤docker命令启动容器")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /mydata/mysql/mysql5.7 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#先在根目录创建容器来存放mysql相关")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将容器的3306端口映射到主机的3307接口，适合主机的3306接口被主机Mysql占用情况下")]),s._v("\ndocker run -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3307")]),s._v(":3306 --name mysql5.7 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /usr/local/docker/mysql5.7/data:/var/lib/mysql "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /usr/local/docker/mysql5.7/log:/var/log "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /usr/local/docker/mysql5.7/conf:/etc/mysql "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d mysql:5.7\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("参数说明")]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("--restart=always：容器自启动")]),s._v(" "),e("li",[s._v("-p 3307:3306：将容器的3306端⼝映射到主机的3307端⼝")]),s._v(" "),e("li",[s._v("-v /usr/local/docker/mysql5.7/conf:/etc/mysql：将配置⽂件夹挂在到主机")]),s._v(" "),e("li",[s._v("-v /usr/local/docker/mysql5.7/log:/var/log：将⽇志⽂件夹挂载到主机")]),s._v(" "),e("li",[s._v("-v /usr/local/docker/mysql5.7/data:/var/lib/mysql：将数据⽂件夹挂载到主机")]),s._v(" "),e("li",[s._v("-e MYSQL_ROOT_PASSWORD=root：初始化root⽤户的密码")])])]),s._v(" "),e("p",[e("img",{attrs:{src:t(480),alt:"启动mysql容器"}})]),s._v(" "),e("h3",{attrs:{id:"_2-3-进入运行mysql的docker容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-进入运行mysql的docker容器"}},[s._v("#")]),s._v(" 2.3 进⼊运⾏mysql的docker容器")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mysql5.7 /bin/bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(481),alt:"进入容器"}})]),s._v(" "),e("h3",{attrs:{id:"_2-4-使用mysql命令打开客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-使用mysql命令打开客户端"}},[s._v("#")]),s._v(" 2.4 使⽤Mysql命令打开客户端")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("mysql -uroot -proot\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(482),alt:"进入mysql"}})]),s._v(" "),e("h3",{attrs:{id:"_2-5-测试连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-测试连接"}},[s._v("#")]),s._v(" 2.5 测试连接")]),s._v(" "),e("p",[s._v("使用Navicat连接工具")]),s._v(" "),e("p",[e("img",{attrs:{src:t(483),alt:"navicat连接mysql1"}})]),s._v(" "),e("p",[s._v("连接成功")]),s._v(" "),e("p",[e("img",{attrs:{src:t(484),alt:"navicat连接mysql2"}})]),s._v(" "),e("h2",{attrs:{id:"_3-安装nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装nginx"}},[s._v("#")]),s._v(" 3. 安装Nginx")]),s._v(" "),e("h3",{attrs:{id:"_3-1-下载nginx1-10的docker镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-下载nginx1-10的docker镜像"}},[s._v("#")]),s._v(" 3.1 下载Nginx1.10的docker镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker pull nginx:1.18\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_3-2-先运行一次容器-为了拷⻉配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-先运行一次容器-为了拷⻉配置文件"}},[s._v("#")]),s._v(" 3.2 先运⾏⼀次容器（为了拷⻉配置⽂件）")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("81")]),s._v(":80 --name nginx1.18 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /mydata/nginx1.18/html:/usr/share/nginx1.18/html "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /mydata/nginx1.18/logs:/var/log/nginx1.18 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d nginx:1.18\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("blockquote",[e("p",[s._v("注：加了 -d 参数默认不会进⼊容器，想要进⼊容器需要使⽤指令 "),e("code",[s._v("docker exec")]),s._v("。")])]),s._v(" "),e("h3",{attrs:{id:"_3-3-将容器内的配置文件拷⻉到指定目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-将容器内的配置文件拷⻉到指定目录"}},[s._v("#")]),s._v(" 3.3 将容器内的配置⽂件拷⻉到指定⽬录")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker container "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" nginx1.18:/etc/nginx /mydata/nginx1.18/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_3-4-修改文件名称"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-修改文件名称"}},[s._v("#")]),s._v(" 3.4 修改⽂件名称")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /mydata/nginx1.18 \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" nginx conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"_3-5-终止并删除容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-终止并删除容器"}},[s._v("#")]),s._v(" 3.5 终⽌并删除容器")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker stop nginx1.18\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" nginx1.18\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"_3-6-再次使用docker命令启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-再次使用docker命令启动"}},[s._v("#")]),s._v(" 3.6 再次使⽤docker命令启动")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("81")]),s._v(":80 --name nginx1.18 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /mydata/nginx1.18/html:/usr/share/nginx1.18/html "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /mydata/nginx1.18/logs:/var/log/nginx1.18 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /mydata/nginx1.18/conf:/etc/nginx1.18 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d nginx:1.18\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"_3-7-启动成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-启动成功"}},[s._v("#")]),s._v(" 3.7 启动成功")]),s._v(" "),e("p",[e("img",{attrs:{src:t(485),alt:"nginx启动成功"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);