(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{360:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mysql-事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-事务"}},[t._v("#")]),t._v(" Mysql 事务")]),t._v(" "),s("blockquote",[s("p",[t._v("不是所有的 Mysql 存储引擎都实现了事务处理。支持事务的存储引擎有："),s("code",[t._v("InnoDB")]),t._v(" 和 "),s("code",[t._v("NDB Cluster")]),t._v("。不支持事务的存储引擎，代表有："),s("code",[t._v("MyISAM")]),t._v("。")]),t._v(" "),s("p",[t._v("用户可以根据业务是否需要事务处理（事务处理可以保证数据安全，但会增加系统开销），选择合适的存储引擎。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/snap/20220721072721.png",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"事务简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务简介"}},[t._v("#")]),t._v(" 事务简介")]),t._v(" "),s("blockquote",[s("p",[t._v("事务简单来说："),s("strong",[t._v("一个 Session 中所进行所有的操作，要么同时成功，要么同时失败")]),t._v("。进一步说，事务指的是满足 ACID 特性的一组操作，可以通过 "),s("code",[t._v("Commit")]),t._v(" 提交一个事务，也可以使用 "),s("code",[t._v("Rollback")]),t._v(" 进行回滚。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/%E6%95%B0%E6%8D%AE%E5%BA%93%E4%BA%8B%E5%8A%A1.png",alt:"img"}})]),t._v(" "),s("p",[s("strong",[t._v("事务就是一组原子性的 SQL 语句")]),t._v("。具体来说，事务指的是满足 ACID 特性的一组操作。")]),t._v(" "),s("p",[s("strong",[t._v("事务内的 SQL 语句，要么全执行成功，要么全执行失败")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("通过加锁的方式，可以实现不同的事务隔离机制")]),t._v("。")]),t._v(" "),s("p",[t._v("想象一下，如果没有事务，在并发环境下，就可能出现丢失修改的问题。")]),t._v(" "),s("p",[t._v("T"),s("sub",[t._v("1")]),t._v(" 和 T"),s("sub",[t._v("2")]),t._v(" 两个线程都对一个数据进行修改，T"),s("sub",[t._v("1")]),t._v(" 先修改，T"),s("sub",[t._v("2")]),t._v(" 随后修改，T"),s("sub",[t._v("2")]),t._v(" 的修改覆盖了 T"),s("sub",[t._v("1")]),t._v(" 的修改。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/%E6%95%B0%E6%8D%AE%E5%BA%93%E5%B9%B6%E5%8F%91%E4%B8%80%E8%87%B4%E6%80%A7-%E4%B8%A2%E5%A4%B1%E4%BF%AE%E6%94%B9.png",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"事务用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务用法"}},[t._v("#")]),t._v(" 事务用法")]),t._v(" "),s("h3",{attrs:{id:"事务处理指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务处理指令"}},[t._v("#")]),t._v(" 事务处理指令")]),t._v(" "),s("p",[t._v("Mysql 中，使用 "),s("code",[t._v("START TRANSACTION")]),t._v(" 语句开始一个事务；使用 "),s("code",[t._v("COMMIT")]),t._v(" 语句提交所有的修改；使用 "),s("code",[t._v("ROLLBACK")]),t._v(" 语句撤销所有的修改。不能回退 "),s("code",[t._v("SELECT")]),t._v(" 语句，回退 "),s("code",[t._v("SELECT")]),t._v(" 语句也没意义；也不能回退 "),s("code",[t._v("CREATE")]),t._v(" 和 "),s("code",[t._v("DROP")]),t._v(" 语句。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("START TRANSACTION")]),t._v(" - 指令用于标记事务的起始点。")]),t._v(" "),s("li",[s("code",[t._v("SAVEPOINT")]),t._v(" - 指令用于创建保留点。")]),t._v(" "),s("li",[s("code",[t._v("ROLLBACK TO")]),t._v(" - 指令用于回滚到指定的保留点；如果没有设置保留点，则回退到 "),s("code",[t._v("START TRANSACTION")]),t._v(" 语句处。")]),t._v(" "),s("li",[s("code",[t._v("COMMIT")]),t._v(" - 提交事务。")])]),t._v(" "),s("p",[t._v("事务处理示例：")]),t._v(" "),s("p",[t._v("（1）创建一张示例表")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 撤销表 user")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 创建表 user")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  username "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户名'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  password "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'密码'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  email "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'邮箱'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户表'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("（2）执行事务操作")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 开始事务")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("START")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 插入操作 A")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxx@163.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 创建保留点 updateA")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SAVEPOINT")]),t._v(" updateA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 插入操作 B")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxx@163.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 回滚到保留点 updateA")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROLLBACK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" updateA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 提交事务，只有操作 A 生效")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMIT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("（3）执行结果")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("结果：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1\troot1\troot1\txxxx@163.com\n")])])]),s("h3",{attrs:{id:"autocommit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autocommit"}},[t._v("#")]),t._v(" AUTOCOMMIT")]),t._v(" "),s("p",[s("strong",[t._v("MySQL 默认采用隐式提交策略（"),s("code",[t._v("autocommit")]),t._v("）")]),t._v("。每执行一条语句就把这条语句当成一个事务然后进行提交。当出现 "),s("code",[t._v("START TRANSACTION")]),t._v(" 语句时，会关闭隐式提交；当 "),s("code",[t._v("COMMIT")]),t._v(" 或 "),s("code",[t._v("ROLLBACK")]),t._v(" 语句执行后，事务会自动关闭，重新恢复隐式提交。")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("set autocommit=0")]),t._v(" 可以取消自动提交，直到 "),s("code",[t._v("set autocommit=1")]),t._v(" 才会提交；"),s("code",[t._v("autocommit")]),t._v(" 标记是针对每个连接而不是针对服务器的。")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 查看 AUTOCOMMIT")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" VARIABLES "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AUTOCOMMIT'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 关闭 AUTOCOMMIT")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" autocommit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 开启 AUTOCOMMIT")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" autocommit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"acid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acid"}},[t._v("#")]),t._v(" ACID")]),t._v(" "),s("p",[t._v("ACID 是数据库事务正确执行的四个基本要素。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("原子性（Atomicity）")]),t._v(" "),s("ul",[s("li",[t._v("事务被视为不可分割的最小单元，事务中的所有操作要么全部提交成功，要么全部失败回滚。")]),t._v(" "),s("li",[t._v("回滚可以用日志来实现，日志记录着事务所执行的修改操作，在回滚时反向执行这些修改操作即可。")])])]),t._v(" "),s("li",[s("strong",[t._v("一致性（Consistency）")]),t._v(" "),s("ul",[s("li",[t._v("数据库在事务执行前后都保持一致性状态。")]),t._v(" "),s("li",[t._v("在一致性状态下，所有事务对一个数据的读取结果都是相同的。")])])]),t._v(" "),s("li",[s("strong",[t._v("隔离性（Isolation）")]),t._v(" "),s("ul",[s("li",[t._v("一个事务所做的修改在最终提交以前，对其它事务是不可见的。")])])]),t._v(" "),s("li",[s("strong",[t._v("持久性（Durability）")]),t._v(" "),s("ul",[s("li",[t._v("一旦事务提交，则其所做的修改将会永远保存到数据库中。即使系统发生崩溃，事务执行的结果也不能丢失。")]),t._v(" "),s("li",[t._v("可以通过数据库备份和恢复来实现，在系统发生奔溃时，使用备份的数据库进行数据恢复。")])])])]),t._v(" "),s("p",[s("strong",[t._v("一个支持事务（Transaction）中的数据库系统，必需要具有这四种特性，否则在事务过程（Transaction processing）当中无法保证数据的正确性，交易过程极可能达不到交易。")])]),t._v(" "),s("ul",[s("li",[t._v("只有满足一致性，事务的执行结果才是正确的。")]),t._v(" "),s("li",[t._v("在无并发的情况下，事务串行执行，隔离性一定能够满足。此时只要能满足原子性，就一定能满足一致性。")]),t._v(" "),s("li",[t._v("在并发的情况下，多个事务并行执行，事务不仅要满足原子性，还需要满足隔离性，才能满足一致性。")]),t._v(" "),s("li",[t._v("事务满足持久化是为了能应对系统崩溃的情况。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/%E6%95%B0%E6%8D%AE%E5%BA%93ACID.png",alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("MySQL 默认采用自动提交模式（"),s("code",[t._v("AUTO COMMIT")]),t._v("）。也就是说，如果不显式使用 "),s("code",[t._v("START TRANSACTION")]),t._v(" 语句来开始一个事务，那么每个查询操作都会被当做一个事务并自动提交。")])]),t._v(" "),s("h2",{attrs:{id:"事务隔离级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务隔离级别"}},[t._v("#")]),t._v(" 事务隔离级别")]),t._v(" "),s("h3",{attrs:{id:"事务隔离简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务隔离简介"}},[t._v("#")]),t._v(" 事务隔离简介")]),t._v(" "),s("p",[t._v("在并发环境下，事务的隔离性很难保证，因此会出现很多并发一致性问题：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("丢失修改")])]),t._v(" "),s("li",[s("strong",[t._v("脏读")])]),t._v(" "),s("li",[s("strong",[t._v("不可重复读")])]),t._v(" "),s("li",[s("strong",[t._v("幻读")])])]),t._v(" "),s("p",[t._v("在 SQL 标准中，定义了四种事务隔离级别（级别由低到高）：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("读未提交")])]),t._v(" "),s("li",[s("strong",[t._v("读提交")])]),t._v(" "),s("li",[s("strong",[t._v("可重复读")])]),t._v(" "),s("li",[s("strong",[t._v("串行化")])])]),t._v(" "),s("p",[t._v("Mysql 中查看和设置事务隔离级别：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 查看事务隔离级别")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" VARIABLES "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transaction_isolation'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 设置事务隔离级别为 READ UNCOMMITTED")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SESSION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ISOLATION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LEVEL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("READ")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNCOMMITTED")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 设置事务隔离级别为 READ COMMITTED")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SESSION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ISOLATION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LEVEL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("READ")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMITTED")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 设置事务隔离级别为 REPEATABLE READ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SESSION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ISOLATION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LEVEL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPEATABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("READ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 设置事务隔离级别为 SERIALIZABLE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SESSION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ISOLATION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LEVEL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SERIALIZABLE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"读未提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读未提交"}},[t._v("#")]),t._v(" 读未提交")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("读未提交（read uncommitted）")]),t._v(" 是指：事务中的修改，即使没有提交，对其它事务也是可见的")]),t._v("。")]),t._v(" "),s("p",[t._v("读未提交的问题：事务可以读取未提交的数据，也被称为 "),s("strong",[t._v("脏读（Dirty Read）")]),t._v("。")]),t._v(" "),s("p",[t._v("T"),s("sub",[t._v("1")]),t._v(" 修改一个数据，T"),s("sub",[t._v("2")]),t._v(" 随后读取这个数据。如果 T"),s("sub",[t._v("1")]),t._v(" 撤销了这次修改，那么 T"),s("sub",[t._v("2")]),t._v(" 读取的数据是脏数据。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/%E6%95%B0%E6%8D%AE%E5%BA%93%E5%B9%B6%E5%8F%91%E4%B8%80%E8%87%B4%E6%80%A7-%E8%84%8F%E6%95%B0%E6%8D%AE.png",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"读提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读提交"}},[t._v("#")]),t._v(" 读提交")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("读提交（read committed）")]),t._v(" 是指：事务提交后，其他事务才能看到它的修改")]),t._v("。换句话说，一个事务所做的修改在提交之前对其它事务是不可见的。读提交解决了脏读的问题。")]),t._v(" "),s("p",[t._v("读提交是大多数数据库的默认事务隔离级别。")]),t._v(" "),s("p",[t._v("读提交有时也叫不可重复读，它的问题是：执行两次相同的查询，得到的结果可能不一致。")]),t._v(" "),s("p",[t._v("T"),s("sub",[t._v("2")]),t._v(" 读取一个数据，T"),s("sub",[t._v("1")]),t._v(" 对该数据做了修改。如果 T"),s("sub",[t._v("2")]),t._v(" 再次读取这个数据，此时读取的结果和第一次读取的结果不同。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/%E6%95%B0%E6%8D%AE%E5%BA%93%E5%B9%B6%E5%8F%91%E4%B8%80%E8%87%B4%E6%80%A7-%E4%B8%8D%E5%8F%AF%E9%87%8D%E5%A4%8D%E8%AF%BB.png",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"可重复读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可重复读"}},[t._v("#")]),t._v(" 可重复读")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("可重复读（REPEATABLE READ）")]),t._v(" 是指：保证在同一个事务中多次读取同样数据的结果是一样的")]),t._v("。可重复读解决了不可重复读问题。")]),t._v(" "),s("p",[t._v("可重复读是 Mysql 的默认事务隔离级别。")]),t._v(" "),s("p",[t._v("可重复读的问题：事务 T1 读取某个范围内的记录时，事务 T2 在该范围内插入了新的记录，T1 再次读取这个范围的数据，此时读取的结果和和第一次读取的结果不同，即为 "),s("strong",[t._v("幻读（Phantom Read）")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/%E6%95%B0%E6%8D%AE%E5%BA%93%E5%B9%B6%E5%8F%91%E4%B8%80%E8%87%B4%E6%80%A7-%E5%B9%BB%E8%AF%BB.png",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"串行化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#串行化"}},[t._v("#")]),t._v(" 串行化")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("串行化（SERIALIXABLE）")]),t._v(" 是指：强制事务串行执行，对于同一行记录，加读写锁，一旦出现锁冲突，必须等前面的事务释放锁")]),t._v("。")]),t._v(" "),s("p",[t._v("强制事务串行执行，则避免了所有的并发问题。串行化策略会在读取的每一行数据上都加锁，这可能导致大量的超时和锁竞争。这对于高并发应用基本上是不可接受的，所以一般不会采用这个级别。")]),t._v(" "),s("h3",{attrs:{id:"隔离级别小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别小结"}},[t._v("#")]),t._v(" 隔离级别小结")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("读未提交（READ UNCOMMITTED）")])]),t._v(" - 事务中的修改，即使没有提交，对其它事务也是可见的。")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("读提交（READ COMMITTED）")])]),t._v(" - 一个事务只能读取已经提交的事务所做的修改。换句话说，一个事务所做的修改在提交之前对其它事务是不可见的。")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("重复读（REPEATABLE READ）")])]),t._v(" - 保证在同一个事务中多次读取同样数据的结果是一样的。")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("串行化（SERIALIXABLE）")])]),t._v(" - 对于同一行记录，加读写锁，一旦出现锁冲突，必须等前面的事务释放锁。")])]),t._v(" "),s("p",[t._v("数据库隔离级别解决的问题：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("隔离级别")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("丢失修改")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("脏读")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("不可重复读")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("幻读")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("读未提交")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("❌")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("读提交")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("❌")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("可重复读")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("❌")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("可串行化")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])])])]),t._v(" "),s("h2",{attrs:{id:"死锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#死锁"}},[t._v("#")]),t._v(" 死锁")]),t._v(" "),s("p",[s("strong",[t._v("死锁是指两个或多个事务竞争同一资源，并请求锁定对方占用的资源，从而导致恶性循环的现象")]),t._v("。")]),t._v(" "),s("p",[t._v("产生死锁的场景：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("当多个事务试图以不同的顺序锁定资源时，就可能会产生死锁。")])]),t._v(" "),s("li",[s("p",[t._v("多个事务同时锁定同一个资源时，也会产生死锁。")])])]),t._v(" "),s("h3",{attrs:{id:"死锁的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#死锁的原因"}},[t._v("#")]),t._v(" 死锁的原因")]),t._v(" "),s("p",[t._v("行锁的具体实现算法有三种：record lock、gap lock 以及 next-key lock。record lock 是专门对索引项加锁；gap lock 是对索引项之间的间隙加锁；next-key lock 则是前面两种的组合，对索引项以其之间的间隙加锁。")]),t._v(" "),s("p",[t._v("只在可重复读或以上隔离级别下的特定操作才会取得 gap lock 或 next-key lock，在 Select、Update 和 Delete 时，除了基于唯一索引的查询之外，其它索引查询时都会获取 gap lock 或 next-key lock，即锁住其扫描的范围。主键索引也属于唯一索引，所以主键索引是不会使用 gap lock 或 next-key lock。")]),t._v(" "),s("p",[t._v("在 MySQL 中，gap lock 默认是开启的，即 innodb_locks_unsafe_for_binlog 参数值是 disable 的，且 MySQL 中默认的是 RR 事务隔离级别。")]),t._v(" "),s("p",[t._v("当我们执行以下查询 SQL 时，由于 order_no 列为非唯一索引，此时又是 RR 事务隔离级别，所以 SELECT 的加锁类型为 gap lock，这里的 gap 范围是 (4,+∞）。")]),t._v(" "),s("blockquote",[s("p",[t._v("SELECT id FROM "),s("code",[t._v("demo")]),t._v("."),s("code",[t._v("order_record")]),t._v(" where "),s("code",[t._v("order_no")]),t._v(" = 4 for update;")])]),t._v(" "),s("p",[t._v("执行查询 SQL 语句获取的 gap lock 并不会导致阻塞，而当我们执行以下插入 SQL 时，会在插入间隙上再次获取插入意向锁。插入意向锁其实也是一种 gap 锁，它与 gap lock 是冲突的，所以当其它事务持有该间隙的 gap lock 时，需要等待其它事务释放 gap lock 之后，才能获取到插入意向锁。")]),t._v(" "),s("p",[t._v("以上事务 A 和事务 B 都持有间隙 (4,+∞）的 gap 锁，而接下来的插入操作为了获取到插入意向锁，都在等待对方事务的 gap 锁释放，于是就造成了循环等待，导致死锁。")]),t._v(" "),s("blockquote",[s("p",[t._v("INSERT INTO "),s("code",[t._v("demo")]),t._v("."),s("code",[t._v("order_record")]),t._v("("),s("code",[t._v("order_no")]),t._v(", "),s("code",[t._v("status")]),t._v(", "),s("code",[t._v("create_date")]),t._v(") VALUES (5, 1, ‘2019-07-13 10:57:03’);")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/snap/20200630153139.png",alt:"img"}})]),t._v(" "),s("p",[s("strong",[t._v("另一个死锁场景")])]),t._v(" "),s("p",[t._v("InnoDB 存储引擎的主键索引为聚簇索引，其它索引为辅助索引。如果使用辅助索引来更新数据库，就需要使用聚簇索引来更新数据库字段。如果两个更新事务使用了不同的辅助索引，或一个使用了辅助索引，一个使用了聚簇索引，就都有可能导致锁资源的循环等待。由于本身两个事务是互斥，也就构成了以上死锁的四个必要条件了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/snap/20200630154606.png",alt:"img"}})]),t._v(" "),s("p",[t._v("出现死锁的步骤：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/snap/20200630154619.png",alt:"img"}})]),t._v(" "),s("p",[t._v("综上可知，在更新操作时，我们应该尽量使用主键来更新表字段，这样可以有效避免一些不必要的死锁发生。")]),t._v(" "),s("h3",{attrs:{id:"避免死锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免死锁"}},[t._v("#")]),t._v(" 避免死锁")]),t._v(" "),s("p",[t._v("预防死锁的注意事项：")]),t._v(" "),s("ul",[s("li",[t._v("在编程中尽量按照固定的顺序来处理数据库记录，假设有两个更新操作，分别更新两条相同的记录，但更新顺序不一样，有可能导致死锁；")]),t._v(" "),s("li",[t._v("在允许幻读和不可重复读的情况下，尽量使用 RC 事务隔离级别，可以避免 gap lock 导致的死锁问题；")]),t._v(" "),s("li",[t._v("更新表时，"),s("strong",[t._v("尽量使用主键更新")]),t._v("；")]),t._v(" "),s("li",[t._v("避免长事务，"),s("strong",[t._v("尽量将长事务拆解")]),t._v("，可以降低与其它事务发生冲突的概率；")]),t._v(" "),s("li",[s("strong",[t._v("设置合理的锁等待超时参数")]),t._v("，我们可以通过 "),s("code",[t._v("innodb_lock_wait_timeout")]),t._v(" 设置合理的等待超时阈值，特别是在一些高并发的业务中，我们可以尽量将该值设置得小一些，避免大量事务等待，占用系统资源，造成严重的性能开销。")])]),t._v(" "),s("p",[t._v("另外，我们还可以将 order_no 列设置为唯一索引列。虽然不能防止幻读，但我们可以利用它的唯一性来保证订单记录不重复创建，这种方式唯一的缺点就是当遇到重复创建订单时会抛出异常。")]),t._v(" "),s("p",[t._v("我们还可以使用其它的方式来代替数据库实现幂等性校验。例如，使用 Redis 以及 ZooKeeper 来实现，运行效率比数据库更佳。")]),t._v(" "),s("h3",{attrs:{id:"解决死锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决死锁"}},[t._v("#")]),t._v(" 解决死锁")]),t._v(" "),s("p",[t._v("当出现死锁以后，有两种策略：")]),t._v(" "),s("ul",[s("li",[t._v("一种策略是，直接进入等待，直到超时。这个超时时间可以通过参数 "),s("code",[t._v("innodb_lock_wait_timeout")]),t._v(" 来设置。")]),t._v(" "),s("li",[t._v("另一种策略是，发起死锁检测，发现死锁后，主动回滚死锁链条中的某一个事务，让其他事务得以继续执行。将参数 "),s("code",[t._v("innodb_deadlock_detect")]),t._v(" 设置为 on，表示开启这个逻辑。")])]),t._v(" "),s("p",[t._v("在 InnoDB 中，innodb_lock_wait_timeout 的默认值是 50s，意味着如果采用第一个策略，当出现死锁以后，第一个被锁住的线程要过 50s 才会超时退出，然后其他线程才有可能继续执行。对于在线服务来说，这个等待时间往往是无法接受的。")]),t._v(" "),s("p",[t._v("但是，我们又不可能直接把这个时间设置成一个很小的值，比如 1s。这样当出现死锁的时候，确实很快就可以解开，但如果不是死锁，而是简单的锁等待呢？所以，超时时间设置太短的话，会出现很多误伤。")]),t._v(" "),s("p",[t._v("所以，正常情况下我们还是要采用第二种策略，即：主动死锁检测，而且 "),s("code",[t._v("innodb_deadlock_detect")]),t._v(" 的默认值本身就是 on。为了解决死锁问题，不同数据库实现了各自的死锁检测和超时机制。InnoDB 的处理策略是："),s("strong",[t._v("将持有最少行级排它锁的事务进行回滚")]),t._v("。")]),t._v(" "),s("p",[t._v("主动死锁检测在发生死锁的时候，是能够快速发现并进行处理的，但是它也是有额外负担的。你可以想象一下这个过程：每当一个事务被锁的时候，就要看看它所依赖的线程有没有被别人锁住，如此循环，最后判断是否出现了循环等待，也就是死锁。")]),t._v(" "),s("h2",{attrs:{id:"分布式事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务"}},[t._v("#")]),t._v(" 分布式事务")]),t._v(" "),s("p",[t._v("在单一数据节点中，事务仅限于对单一数据库资源的访问控制，称之为 "),s("strong",[t._v("本地事务")]),t._v("。几乎所有的成熟的关系型数据库都提供了对本地事务的原生支持。")]),t._v(" "),s("p",[s("strong",[t._v("分布式事务指的是事务操作跨越多个节点，并且要求满足事务的 ACID 特性。")])]),t._v(" "),s("p",[t._v("分布式事务的常见方案如下：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("两阶段提交（2PC）")]),t._v(" - 将事务的提交过程分为两个阶段来进行处理：准备阶段和提交阶段。参与者将操作成败通知协调者，再由协调者根据所有参与者的反馈情报决定各参与者是否要提交操作还是中止操作。")]),t._v(" "),s("li",[s("strong",[t._v("三阶段提交（3PC）")]),t._v(" - 与二阶段提交不同的是，引入超时机制。同时在协调者和参与者中都引入超时机制。将二阶段的准备阶段拆分为 2 个阶段，插入了一个 preCommit 阶段，使得原先在二阶段提交中，参与者在准备之后，由于协调者发生崩溃或错误，而导致参与者处于无法知晓是否提交或者中止的“不确定状态”所产生的可能相当长的延时的问题得以解决。")]),t._v(" "),s("li",[s("strong",[t._v("补偿事务（TCC）")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Try")]),t._v(" - 操作作为一阶段，负责资源的检查和预留。")]),t._v(" "),s("li",[s("strong",[t._v("Confirm")]),t._v(" - 操作作为二阶段提交操作，执行真正的业务。")]),t._v(" "),s("li",[s("strong",[t._v("Cancel")]),t._v(" - 是预留资源的取消。")])])]),t._v(" "),s("li",[s("strong",[t._v("本地消息表")]),t._v(" - 在事务主动发起方额外新建事务消息表，事务发起方处理业务和记录事务消息在本地事务中完成，轮询事务消息表的数据发送事务消息，事务被动方基于消息中间件消费事务消息表中的事务。")]),t._v(" "),s("li",[s("strong",[t._v("MQ 事务")]),t._v(" - 基于 MQ 的分布式事务方案其实是对本地消息表的封装。")]),t._v(" "),s("li",[s("strong",[t._v("SAGA")]),t._v(" - Saga 事务核心思想是将长事务拆分为多个本地短事务，由 Saga 事务协调器协调，如果正常结束那就正常完成，如果某个步骤失败，则根据相反顺序一次调用补偿操作。")])]),t._v(" "),s("p",[t._v("分布式事务方案分析：")]),t._v(" "),s("ul",[s("li",[t._v("2PC/3PC 依赖于数据库，能够很好的提供强一致性和强事务性，但相对来说延迟比较高，比较适合传统的单体应用，在同一个方法中存在跨库操作的情况，不适合高并发和高性能要求的场景。")]),t._v(" "),s("li",[t._v("TCC 适用于执行时间确定且较短，实时性要求高，对数据一致性要求高，比如互联网金融企业最核心的三个服务：交易、支付、账务。")]),t._v(" "),s("li",[t._v("本地消息表/MQ 事务 都适用于事务中参与方支持操作幂等，对一致性要求不高，业务上能容忍数据不一致到一个人工检查周期，事务涉及的参与方、参与环节较少，业务上有对账/校验系统兜底。")]),t._v(" "),s("li",[t._v("Saga 事务 由于 Saga 事务不能保证隔离性，需要在业务层控制并发，适合于业务场景事务并发操作同一资源较少的情况。 Saga 相比缺少预提交动作，导致补偿动作的实现比较麻烦，例如业务是发送短信，补偿动作则得再发送一次短信说明撤销，用户体验比较差。Saga 事务较适用于补偿动作容易处理的场景。")])]),t._v(" "),s("blockquote",[s("p",[t._v("分布式事务详细说明、分析请参考："),s("a",{attrs:{href:"https://dunwu.github.io/blog/pages/e1881c/",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式事务基本原理"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"事务最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务最佳实践"}},[t._v("#")]),t._v(" 事务最佳实践")]),t._v(" "),s("p",[t._v("高并发场景下的事务到底该如何调优？")]),t._v(" "),s("h3",{attrs:{id:"尽量使用低级别事务隔离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尽量使用低级别事务隔离"}},[t._v("#")]),t._v(" 尽量使用低级别事务隔离")]),t._v(" "),s("p",[t._v("结合业务场景，尽量使用低级别事务隔离")]),t._v(" "),s("h3",{attrs:{id:"避免行锁升级表锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免行锁升级表锁"}},[t._v("#")]),t._v(" 避免行锁升级表锁")]),t._v(" "),s("p",[t._v("在 InnoDB 中，行锁是通过索引实现的，如果不通过索引条件检索数据，行锁将会升级到表锁。我们知道，表锁是会严重影响到整张表的操作性能的，所以应该尽力避免。")]),t._v(" "),s("h3",{attrs:{id:"缩小事务范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缩小事务范围"}},[t._v("#")]),t._v(" 缩小事务范围")]),t._v(" "),s("p",[t._v("有时候，数据库并发访问量太大，会出现以下异常：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("MySQLQueryInterruptedException: Query execution was interrupted\n")])])]),s("p",[t._v("高并发时对一条记录进行更新的情况下，由于更新记录所在的事务还可能存在其他操作，导致一个事务比较长，当有大量请求进入时，就可能导致一些请求同时进入到事务中。")]),t._v(" "),s("p",[t._v("又因为锁的竞争是不公平的，当多个事务同时对一条记录进行更新时，极端情况下，一个更新操作进去排队系统后，可能会一直拿不到锁，最后因超时被系统打断踢出。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/snap/20200630112600.png",alt:"img"}})]),t._v(" "),s("p",[t._v("如上图中的操作，虽然都是在一个事务中，但锁的申请在不同时间，只有当其他操作都执行完，才会释放所有锁。因为扣除库存是更新操作，属于行锁，这将会影响到其他操作该数据的事务，所以我们应该尽量避免长时间地持有该锁，尽快释放该锁。又因为先新建订单和先扣除库存都不会影响业务，所以我们可以将扣除库存操作放到最后，也就是使用执行顺序 1，以此尽量减小锁的持有时间。")]),t._v(" "),s("p",[s("strong",[t._v("在 InnoDB 事务中，行锁是在需要的时候才加上的，但并不是不需要了就立刻释放，而是要等到事务结束时才释放。这个就是两阶段锁协议。")])]),t._v(" "),s("p",[t._v("知道了这个设定，对我们使用事务有什么帮助呢？那就是，如果你的事务中需要锁多个行，要把最可能造成锁冲突、最可能影响并发度的锁尽量往后放。")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《高性能 MySQL》"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://time.geekbang.org/column/intro/100028001",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Java 性能调优实战》"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://shardingsphere.apache.org/document/current/cn/features/transaction/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ShardingSphere 分布式事务"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);