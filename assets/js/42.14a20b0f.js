(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{381:function(a,t,s){"use strict";s.r(t);var e=s(4),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mongodb-运维"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-运维"}},[a._v("#")]),a._v(" MongoDB 运维")]),a._v(" "),t("h2",{attrs:{id:"mongodb-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-安装"}},[a._v("#")]),a._v(" MongoDB 安装")]),a._v(" "),t("h3",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),t("p",[a._v("（1）下载并解压到本地")]),a._v(" "),t("p",[a._v("进入官网下载地址："),t("a",{attrs:{href:"https://www.mongodb.com/try/download/community",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[a._v("官方下载地址")]),t("OutboundLink")],1),a._v(" ，选择合适的版本下载。")]),a._v(" "),t("p",[a._v("（2）创建数据目录")]),a._v(" "),t("p",[a._v("MongoDB 将数据目录存储在 db 目录下。但是这个数据目录不会主动创建，我们在安装完成后需要创建它。")]),a._v(" "),t("p",[a._v("例如："),t("code",[a._v("D:\\Tools\\Server\\mongodb\\mongodb-4.4.0\\data\\db")])]),a._v(" "),t("p",[a._v("（3）运行 MongoDB 服务")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mongod "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dbpath")]),a._v(" D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Tools"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("mongodb-4.4.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("db\n")])])]),t("p",[a._v("（4）客户端连接 MongoDB")]),a._v(" "),t("p",[a._v("可以在命令窗口中运行 mongo.exe 命令即可连接上 MongoDB")]),a._v(" "),t("p",[a._v("（5）配置 MongoDB 服务")]),a._v(" "),t("h3",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),t("p",[a._v("（1）使用安装包安装")]),a._v(" "),t("p",[a._v("安装前我们需要安装各个 Linux 平台依赖包。")]),a._v(" "),t("p",[t("strong",[a._v("Red Hat/CentOS：")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo yum install libcurl openssl\n")])])]),t("p",[t("strong",[a._v('Ubuntu 18.04 LTS ("Bionic")/Debian 10 "Buster"：')])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt-get install libcurl4 openssl\n")])])]),t("p",[t("strong",[a._v('Ubuntu 16.04 LTS ("Xenial")/Debian 9 "Stretch"：')])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt-get install libcurl3 openssl\n")])])]),t("p",[a._v("（2）创建数据目录")]),a._v(" "),t("p",[a._v("默认情况下 MongoDB 启动后会初始化以下两个目录：")]),a._v(" "),t("ul",[t("li",[a._v("数据存储目录：/var/lib/mongodb")]),a._v(" "),t("li",[a._v("日志文件目录：/var/log/mongodb")])]),a._v(" "),t("p",[a._v("我们在启动前可以先创建这两个目录并设置当前用户有读写权限：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /var/lib/mongo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /var/log/mongodb\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("whoami")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" /var/lib/mongo     "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置权限")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("whoami")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" /var/log/mongodb   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置权限")]),a._v("\n")])])]),t("p",[a._v("（3）运行 MongoDB 服务")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mongod "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dbpath")]),a._v(" /var/lib/mongo "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--logpath")]),a._v(" /var/log/mongodb/mongod.log "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--fork")]),a._v("\n")])])]),t("p",[a._v("打开 /var/log/mongodb/mongod.log 文件看到以下信息，说明启动成功。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tail -10f /var/log/mongodb/mongod.log")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-07-09T12:20:17.391+0800 I  NETWORK  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("listener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Listening on /tmp/mongodb-27017.sock\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-07-09T12:20:17.392+0800 I  NETWORK  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("listener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Listening on "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-07-09T12:20:17.392+0800 I  NETWORK  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("listener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" waiting "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" connections on port "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v("\n")])])]),t("p",[a._v("（4）客户端连接 MongoDB")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/local/mongodb4/bin\n./mongo\n")])])]),t("blockquote",[t("p",[t("a",{attrs:{href:"https://github.com/dunwu/linux-tutorial/tree/master/codes/linux/soft",target:"_blank",rel:"noopener noreferrer"}},[a._v("Linux 安装脚本"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"设置用户名、密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置用户名、密码"}},[a._v("#")]),a._v(" 设置用户名、密码")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" use admin\nswitched to db admin\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" db.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"root"')]),a._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pwd"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"root"')]),a._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"roles"')]),a._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"role"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"userAdminAnyDatabase"')]),a._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"db"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"admin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nSuccessfully added user: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"root"')]),a._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"roles"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"role"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"userAdminAnyDatabase"')]),a._v(",\n                        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"db"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"admin"')]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h2",{attrs:{id:"备份和恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备份和恢复"}},[a._v("#")]),a._v(" 备份和恢复")]),a._v(" "),t("h3",{attrs:{id:"数据备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据备份"}},[a._v("#")]),a._v(" 数据备份")]),a._v(" "),t("p",[a._v("在 Mongodb 中，使用 "),t("code",[a._v("mongodump")]),a._v(" 命令来备份 MongoDB 数据。该命令可以导出所有数据到指定目录中。")]),a._v(" "),t("p",[t("code",[a._v("mongodump")]),a._v(" 命令可以通过参数指定导出的数据量级转存的服务器。")]),a._v(" "),t("p",[a._v("mongodump 命令语法如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mongodump -h dbhost -d dbname -o dbdirectory\n")])])]),t("ul",[t("li",[t("p",[a._v("-h：MongDB 所在服务器地址，例如：127.0.0.1，当然也可以指定端口号：127.0.0.1:27017")])]),a._v(" "),t("li",[t("p",[a._v("-d：需要备份的数据库实例，例如：test")])]),a._v(" "),t("li",[t("p",[a._v("-o：备份的数据存放位置，例如：c:\\data\\dump，当然该目录需要提前建立，在备份完成后，系统自动在 dump 目录下建立一个 test 目录，这个目录里面存放该数据库实例的备份数据。")])])]),a._v(" "),t("p",[t("code",[a._v("mongodump")]),a._v(" 命令可选参数列表如下所示：")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[a._v("语法")]),a._v(" "),t("th",{staticStyle:{"text-align":"left"}},[a._v("描述")]),a._v(" "),t("th",{staticStyle:{"text-align":"left"}},[a._v("实例")])])]),a._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[a._v("mongodump --host HOST_NAME --port PORT_NUMBER")]),a._v(" "),t("td",{staticStyle:{"text-align":"left"}},[a._v("该命令将备份所有 MongoDB 数据")]),a._v(" "),t("td",{staticStyle:{"text-align":"left"}},[a._v("mongodump --host runoob.com --port 27017")])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[a._v("mongodump --dbpath DB_PATH --out BACKUP_DIRECTORY")]),a._v(" "),t("td",{staticStyle:{"text-align":"left"}}),a._v(" "),t("td",{staticStyle:{"text-align":"left"}},[a._v("mongodump --dbpath /data/db/ --out /data/backup/")])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[a._v("mongodump --collection COLLECTION --db DB_NAME")]),a._v(" "),t("td",{staticStyle:{"text-align":"left"}},[a._v("该命令将备份指定数据库的集合。")]),a._v(" "),t("td",{staticStyle:{"text-align":"left"}},[a._v("mongodump --collection mycol --db test")])])])]),a._v(" "),t("p",[a._v("【示例】备份全量数据")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ mongodump "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" test2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:55:58.086+0800    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" dumping test.company "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("18801")]),a._v(" documents"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:56:00.725+0800    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#############...........]  test.people  559101/1000000  (55.9%)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:56:03.725+0800    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("###################.....]  test.people  829496/1000000  (82.9%)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:56:06.725+0800    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#####################...]  test.people  884614/1000000  (88.5%)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:56:08.088+0800    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("########################]  test.people  1000000/1000000  (100.0%)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:56:08.350+0800    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" dumping test.people "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),a._v(" documents"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("【示例】备份指定数据库")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mongodump "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" admin "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" test3\n")])])]),t("h3",{attrs:{id:"数据恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据恢复"}},[a._v("#")]),a._v(" 数据恢复")]),a._v(" "),t("p",[a._v("mongodb 使用 "),t("code",[a._v("mongorestore")]),a._v(" 命令来恢复备份的数据。")]),a._v(" "),t("p",[t("code",[a._v("mongorestore")]),a._v(" 命令语法如下：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" mongorestore "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(":port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" dbname "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("ul",[t("li",[t("p",[t("code",[a._v("--host <:port>")]),a._v(", "),t("code",[a._v("-h <:port>")]),a._v("：MongoDB 所在服务器地址，默认为： localhost:27017")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("--db")]),a._v(" , "),t("code",[a._v("-d")]),a._v(" ：需要恢复的数据库实例，例如：test，当然这个名称也可以和备份时候的不一样，比如 test2")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("--drop")]),a._v("：恢复的时候，先删除当前数据，然后恢复备份的数据。就是说，恢复后，备份后添加修改的数据都会被删除，慎用哦！")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("<path>")]),a._v("：mongorestore 最后的一个参数，设置备份数据所在位置，例如：c:\\data\\dump\\test。你不能同时指定 "),t("code",[a._v("<path>")]),a._v(" 和 "),t("code",[a._v("--dir")]),a._v(" 选项，"),t("code",[a._v("--dir")]),a._v(" 也可以设置备份目录。")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("--dir")]),a._v("：指定备份的目录。你不能同时指定 "),t("code",[a._v("<path>")]),a._v(" 和 "),t("code",[a._v("--dir")]),a._v(" 选项。")])])]),a._v(" "),t("p",[a._v("【示例】")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ mongorestore "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--drop")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:46:16.053+0800    finished restoring test.tweets "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("966")]),a._v(" documents, "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" failures"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:46:18.256+0800    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("###.....................]  test.people  164MB/1.03GB  (15.6%)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:46:21.255+0800    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("########................]  test.people  364MB/1.03GB  (34.6%)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:46:24.256+0800    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("############............]  test.people  558MB/1.03GB  (53.0%)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:46:27.255+0800    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("###############.........]  test.people  700MB/1.03GB  (66.5%)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:46:30.257+0800    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("###################.....]  test.people  846MB/1.03GB  (80.3%)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:46:33.255+0800    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("######################..]  test.people  990MB/1.03GB  (94.0%)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:46:34.542+0800    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("########################]  test.people  1.03GB/1.03GB  (100.0%)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:46:34.543+0800    no indexes to restore\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:46:34.543+0800    finished restoring test.people "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),a._v(" documents, "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" failures"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:46:34.544+0800    "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000966")]),a._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" restored successfully. "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" failed to restore.\n")])])]),t("h2",{attrs:{id:"导入导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入导出"}},[a._v("#")]),a._v(" 导入导出")]),a._v(" "),t("p",[t("code",[a._v("mongoimport")]),a._v(" 和 "),t("code",[a._v("mongoexport")]),a._v(" 并不能可靠地保存所有的富文本 BSON 数据类型，因为 JSON 仅能代表一种 BSON 支持的子集类型。因此，数据用这些工具导出导入或许会丢失一些精确程度。")]),a._v(" "),t("h3",{attrs:{id:"导入操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入操作"}},[a._v("#")]),a._v(" 导入操作")]),a._v(" "),t("p",[a._v("在 MongoDB 中，使用 "),t("code",[a._v("mongoimport")]),a._v(" 来导入数据。 默认情况下，"),t("code",[a._v("mongoimport")]),a._v(" 会将数据导入到本地主机端口 27017 上的 MongoDB 实例中。要将数据导入在其他主机或端口上运行的 MongoDB 实例中，请通过包含 "),t("code",[a._v("--host")]),a._v(" 和 "),t("code",[a._v("--port")]),a._v(" 选项来指定主机名或端口。 使用 "),t("code",[a._v("--drop")]),a._v(" 选项删除集合（如果已经存在）。 这样可以确保该集合仅包含您要导入的数据。")]),a._v(" "),t("p",[a._v("语法格式：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("mongoimport "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" IP "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" 端口 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" 用户名 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" 密码 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" 数据库 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),a._v(" 类型 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--headerline")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--upsert")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--drop")]),a._v(" 文件名\n")])])]),t("p",[a._v("【示例】导入表数据")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ mongoimport "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" book "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--drop")]),a._v(" test/book.dat\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T10:53:56.359+0800    connected to: mongodb://127.0.0.1:27017/\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T10:53:56.372+0800    dropping: test.book\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T10:53:56.628+0800    "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("431")]),a._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" imported successfully. "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" failed to import.\n")])])]),t("p",[a._v("【示例】从 json 文件中导入表数据")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ mongoimport "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" student "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--upsert")]),a._v(" test/student.json\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:02:55.907+0800    connected to: mongodb://127.0.0.1:27017/\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:02:56.068+0800    "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" imported successfully. "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" failed to import.\n")])])]),t("p",[a._v("【示例】从 csv 文件中导入表数据")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ mongoimport "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" product "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),a._v(" csv "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--headerline")]),a._v(" test/product.csv\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:07:49.788+0800    connected to: mongodb://127.0.0.1:27017/\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:07:51.051+0800    "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" imported successfully. "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" failed to import.\n")])])]),t("p",[a._v("【示例】导入部分表字段数据")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ mongoimport "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" product "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),a._v(" json "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--upsertFields")]),a._v(" name,price test/product.json\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:14:05.410+0800    connected to: mongodb://127.0.0.1:27017/\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T11:14:05.612+0800    "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" imported successfully. "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" failed to import.\n")])])]),t("h3",{attrs:{id:"导出操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出操作"}},[a._v("#")]),a._v(" 导出操作")]),a._v(" "),t("p",[a._v("语法格式：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mongoexport "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("IP"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("端口"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("用户名"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("密码"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("数据库"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("表名"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("字段"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("条件导出"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--csv")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("文件名"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("ul",[t("li",[t("code",[a._v("-f")]),a._v("：导出指字段，以逗号分割，"),t("code",[a._v("-f name,email,age")]),a._v(" 导出 name,email,age 这三个字段")]),a._v(" "),t("li",[t("code",[a._v("-q")]),a._v("：可以根查询条件导出，"),t("code",[a._v('-q \'{ "uid" : "100" }\'')]),a._v(" 导出 uid 为 100 的数据")]),a._v(" "),t("li",[t("code",[a._v("--csv")]),a._v("：表示导出的文件格式为 csv 的，这个比较有用，因为大部分的关系型数据库都是支持 csv，在这里有共同点")])]),a._v(" "),t("p",[a._v("【示例】导出整张表")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ mongoexport "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" product "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" test/product.dat\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T10:44:23.161+0800    connected to: mongodb://127.0.0.1:27017/\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T10:44:23.177+0800    exported "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" records\n")])])]),t("p",[a._v("【示例】导出表到 json 文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ mongoexport "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" product "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),a._v(" json "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" test/product.json\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T10:49:52.735+0800    connected to: mongodb://127.0.0.1:27017/\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T10:49:52.750+0800    exported "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" records\n")])])]),t("p",[a._v("【示例】导出表中部分字段到 csv 文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ mongoexport "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" product "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),a._v(" csv "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" name,price "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" test/product.csv\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T10:47:33.160+0800    connected to: mongodb://127.0.0.1:27017/\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-09-11T10:47:33.176+0800    exported "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" records\n")])])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("MongoDB 官网"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/mongodb/mongo",target:"_blank",rel:"noopener noreferrer"}},[a._v("MongoDB Github"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://university.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("MongoDB 官方免费教程"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.runoob.com/mongodb/mongodb-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("MongoDB 教程"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);