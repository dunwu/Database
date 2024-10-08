(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{394:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"hbase-快速入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hbase-快速入门"}},[s._v("#")]),s._v(" HBase 快速入门")]),s._v(" "),t("h2",{attrs:{id:"hbase-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hbase-简介"}},[s._v("#")]),s._v(" HBase 简介")]),s._v(" "),t("h3",{attrs:{id:"为什么需要-hbase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要-hbase"}},[s._v("#")]),s._v(" 为什么需要 HBase")]),s._v(" "),t("p",[s._v("在介绍 HBase 之前，我们不妨先了解一下为什么需要 HBase，或者说 HBase 是为了达到什么目的而产生。")]),s._v(" "),t("p",[s._v("在 HBase 诞生之前，Hadoop 可以通过 HDFS 来存储结构化、半结构甚至非结构化的数据，它是传统数据库的补充，是海量数据存储的最佳方法，它针对大文件的存储，批量访问和流式访问都做了优化，同时也通过多副本解决了容灾问题。")]),s._v(" "),t("p",[s._v("Hadoop 的缺陷在于：它只能执行批处理，并且只能以顺序方式访问数据。这意味着即使是最简单的工作，也必须搜索整个数据集，即："),t("strong",[s._v("Hadoop 无法实现对数据的随机访问")]),s._v("。实现数据的随机访问是传统的关系型数据库所擅长的，但它们却不能用于海量数据的存储。在这种情况下，必须有一种新的方案来"),t("strong",[s._v("同时解决海量数据存储和随机访问的问题")]),s._v("，HBase 就是其中之一 (HBase，Cassandra，couchDB，Dynamo 和 MongoDB 都能存储海量数据并支持随机访问)。")]),s._v(" "),t("blockquote",[t("p",[s._v("注：数据结构分类：")]),s._v(" "),t("ul",[t("li",[s._v("结构化数据：即以关系型数据库表形式管理的数据；")]),s._v(" "),t("li",[s._v("半结构化数据：非关系模型的，有基本固定结构模式的数据，例如日志文件、XML 文档、JSON 文档、Email 等；")]),s._v(" "),t("li",[s._v("非结构化数据：没有固定模式的数据，如 WORD、PDF、PPT、EXL，各种格式的图片、视频等。")])])]),s._v(" "),t("h3",{attrs:{id:"什么是-hbase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-hbase"}},[s._v("#")]),s._v(" 什么是 HBase")]),s._v(" "),t("p",[t("strong",[s._v("HBase 是一个构建在 HDFS（Hadoop 文件系统）之上的列式数据库")]),s._v("。")]),s._v(" "),t("p",[s._v("HBase 是一种类似于 "),t("code",[s._v("Google’s Big Table")]),s._v(" 的数据模型，它是 Hadoop 生态系统的一部分，它将数据存储在 HDFS 上，客户端可以通过 HBase 实现对 HDFS 上数据的随机访问。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/snap/20200601170449.png",alt:"img"}})]),s._v(" "),t("p",[s._v("HBase 的"),t("strong",[s._v("核心特性")]),s._v("如下：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("分布式")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("伸缩性")]),s._v("：支持通过增减机器进行水平扩展，以提升整体容量和性能")]),s._v(" "),t("li",[t("strong",[s._v("高可用")]),s._v("：支持 RegionServers 之间的自动故障转移")]),s._v(" "),t("li",[t("strong",[s._v("自动分区")]),s._v("：Region 分散在集群中，当行数增长的时候，Region 也会自动的分区再均衡")])])]),s._v(" "),t("li",[t("strong",[s._v("超大数据集")]),s._v("：HBase 被设计用来读写超大规模的数据集（数十亿行至数百亿行的表）")]),s._v(" "),t("li",[t("strong",[s._v("支持结构化、半结构化和非结构化的数据")]),s._v("：由于 HBase 基于 HDFS 构建，所以和 HDFS 一样，支持结构化、半结构化和非结构化的数据")]),s._v(" "),t("li",[t("strong",[s._v("非关系型数据库")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("不支持标准 SQL 语法")])]),s._v(" "),t("li",[t("strong",[s._v("没有真正的索引")])]),s._v(" "),t("li",[t("strong",[s._v("不支持复杂的事务")]),s._v("：只支持行级事务，即单行数据的读写都是原子性的")])])])]),s._v(" "),t("p",[s._v("HBase 的其他特性")]),s._v(" "),t("ul",[t("li",[s._v("读写操作遵循强一致性")]),s._v(" "),t("li",[s._v("过滤器支持谓词下推")]),s._v(" "),t("li",[s._v("易于使用的 Java 客户端 API")]),s._v(" "),t("li",[s._v("它支持线性和模块化可扩展性。")]),s._v(" "),t("li",[s._v("HBase 表支持 Hadoop MapReduce 作业的便捷基类")]),s._v(" "),t("li",[s._v("很容易使用 Java API 进行客户端访问")]),s._v(" "),t("li",[s._v("为实时查询提供块缓存 BlockCache 和布隆过滤器")]),s._v(" "),t("li",[s._v("它通过服务器端过滤器提供查询谓词下推")])]),s._v(" "),t("h3",{attrs:{id:"什么时候使用-hbase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么时候使用-hbase"}},[s._v("#")]),s._v(" 什么时候使用 HBase")]),s._v(" "),t("p",[s._v("根据上一节对于 HBase 特性的介绍，我们可以梳理出 HBase 适用、不适用的场景：")]),s._v(" "),t("p",[s._v("HBase 不适用场景：")]),s._v(" "),t("ul",[t("li",[s._v("需要索引")]),s._v(" "),t("li",[s._v("需要复杂的事务")]),s._v(" "),t("li",[s._v("数据量较小（比如：数据量不足几百万行）")])]),s._v(" "),t("p",[s._v("HBase 适用场景：")]),s._v(" "),t("ul",[t("li",[s._v("能存储海量数据并支持随机访问（比如：数据量级达到十亿级至百亿级）")]),s._v(" "),t("li",[s._v("存储结构化、半结构化数据")]),s._v(" "),t("li",[s._v("硬件资源充足")])]),s._v(" "),t("blockquote",[t("p",[s._v("一言以蔽之——HBase 适用的场景是："),t("strong",[s._v("实时地随机访问超大数据集")]),s._v("。")])]),s._v(" "),t("p",[s._v("HBase 的典型应用场景")]),s._v(" "),t("ul",[t("li",[s._v("存储监控数据")]),s._v(" "),t("li",[s._v("存储用户/车辆 GPS 信息")]),s._v(" "),t("li",[s._v("存储用户行为数据")]),s._v(" "),t("li",[s._v("存储各种日志数据，如：访问日志、操作日志、推送日志等。")]),s._v(" "),t("li",[s._v("存储短信、邮件等消息类数据")]),s._v(" "),t("li",[s._v("存储网页数据")])]),s._v(" "),t("h3",{attrs:{id:"hbase-数据模型简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hbase-数据模型简介"}},[s._v("#")]),s._v(" HBase 数据模型简介")]),s._v(" "),t("p",[s._v("前面已经提及，HBase 是一个列式数据库，其数据模型和关系型数据库有所不同。其数据模型的关键术语如下：")]),s._v(" "),t("ul",[t("li",[s._v("Table：HBase 表由多行组成。")]),s._v(" "),t("li",[s._v("Row：HBase 中的一行由一个行键和一个或多个列以及与之关联的值组成。 行在存储时按行键的字母顺序排序。 为此，行键的设计非常重要。 目标是以相关行彼此靠近的方式存储数据。 常见的行键模式是网站域。 如果您的行键是域，您应该将它们反向存储（org.apache.www、org.apache.mail、org.apache.jira）。 这样，所有 Apache 域在表中彼此靠近，而不是根据子域的第一个字母展开。")]),s._v(" "),t("li",[s._v("Column：HBase 中的列由列族和列限定符组成，它们由 :（冒号）字符分隔。")]),s._v(" "),t("li",[s._v("Column Family：通常出于性能原因，列族在物理上将一组列及其值放在一起。 每个列族都有一组存储属性，例如它的值是否应该缓存在内存中，它的数据是如何压缩的，它的行键是如何编码的，等等。 表中的每一行都有相同的列族，尽管给定的行可能不在给定的列族中存储任何内容。")]),s._v(" "),t("li",[s._v("列限定符：将列限定符添加到列族以提供给定数据片段的索引。 给定列族内容，列限定符可能是 content:html，另一个可能是 content:pdf。 尽管列族在表创建时是固定的，但列限定符是可变的，并且行之间可能有很大差异。")]),s._v(" "),t("li",[s._v("Cell：单元格是行、列族和列限定符的组合，包含一个值和一个时间戳，代表值的版本。")]),s._v(" "),t("li",[s._v("Timestamp：时间戳写在每个值旁边，是给定版本值的标识符。 默认情况下，时间戳表示写入数据时 RegionServer 上的时间，但您可以在将数据放入单元格时指定不同的时间戳值。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/bigdata/hbase/1551164224778.png",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"特性比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特性比较"}},[s._v("#")]),s._v(" 特性比较")]),s._v(" "),t("h4",{attrs:{id:"hbase-vs-rdbms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hbase-vs-rdbms"}},[s._v("#")]),s._v(" HBase vs. RDBMS")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("RDBMS")]),s._v(" "),t("th",[s._v("HBase")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("RDBMS 有它的模式，描述表的整体结构的约束")]),s._v(" "),t("td",[s._v("HBase 无模式，它不具有固定列模式的概念；仅定义列族")])]),s._v(" "),t("tr",[t("td",[s._v("支持的文件系统有 FAT、NTFS 和 EXT")]),s._v(" "),t("td",[s._v("支持的文件系统只有 HDFS")])]),s._v(" "),t("tr",[t("td",[s._v("使用提交日志来存储日志")]),s._v(" "),t("td",[s._v("使用预写日志 (WAL) 来存储日志")])]),s._v(" "),t("tr",[t("td",[s._v("使用特定的协调系统来协调集群")]),s._v(" "),t("td",[s._v("使用 ZooKeeper 来协调集群")])]),s._v(" "),t("tr",[t("td",[s._v("存储的都是中小规模的数据表")]),s._v(" "),t("td",[s._v("存储的是超大规模的数据表，并且适合存储宽表")])]),s._v(" "),t("tr",[t("td",[s._v("通常支持复杂的事务")]),s._v(" "),t("td",[s._v("仅支持行级事务")])]),s._v(" "),t("tr",[t("td",[s._v("适用于结构化数据")]),s._v(" "),t("td",[s._v("适用于半结构化、结构化数据")])]),s._v(" "),t("tr",[t("td",[s._v("使用主键")]),s._v(" "),t("td",[s._v("使用 row key")])])])]),s._v(" "),t("h4",{attrs:{id:"hbase-vs-hdfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hbase-vs-hdfs"}},[s._v("#")]),s._v(" HBase vs. HDFS")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("HDFS")]),s._v(" "),t("th",[s._v("HBase")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("HDFS 提供了一个用于分布式存储的文件系统。")]),s._v(" "),t("td",[s._v("HBase 提供面向表格列的数据存储。")])]),s._v(" "),t("tr",[t("td",[s._v("HDFS 为大文件提供优化存储。")]),s._v(" "),t("td",[s._v("HBase 为表格数据提供了优化。")])]),s._v(" "),t("tr",[t("td",[s._v("HDFS 使用块文件。")]),s._v(" "),t("td",[s._v("HBase 使用键值对数据。")])]),s._v(" "),t("tr",[t("td",[s._v("HDFS 数据模型不灵活。")]),s._v(" "),t("td",[s._v("HBase 提供了一个灵活的数据模型。")])]),s._v(" "),t("tr",[t("td",[s._v("HDFS 使用文件系统和处理框架。")]),s._v(" "),t("td",[s._v("HBase 使用带有内置 Hadoop MapReduce 支持的表格存储。")])]),s._v(" "),t("tr",[t("td",[s._v("HDFS 主要针对一次写入多次读取进行了优化。")]),s._v(" "),t("td",[s._v("HBase 针对读/写许多进行了优化。")])])])]),s._v(" "),t("h4",{attrs:{id:"行式数据库-vs-列式数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行式数据库-vs-列式数据库"}},[s._v("#")]),s._v(" 行式数据库 vs. 列式数据库")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("行式数据库")]),s._v(" "),t("th",[s._v("列式数据库")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("对于添加/修改操作更高效")]),s._v(" "),t("td",[s._v("对于读取操作更高效")])]),s._v(" "),t("tr",[t("td",[s._v("读取整行数据")]),s._v(" "),t("td",[s._v("仅读取必要的列数据")])]),s._v(" "),t("tr",[t("td",[s._v("最适合在线事务处理系统（OLTP）")]),s._v(" "),t("td",[s._v("不适合在线事务处理系统（OLTP）")])]),s._v(" "),t("tr",[t("td",[s._v("将行数据存储在连续的页内存中")]),s._v(" "),t("td",[s._v("将列数据存储在非连续的页内存中")])])])]),s._v(" "),t("p",[s._v("列式数据库的优点：")]),s._v(" "),t("ul",[t("li",[s._v("支持数据压缩")]),s._v(" "),t("li",[s._v("支持快速数据检索")]),s._v(" "),t("li",[s._v("简化了管理和配置")]),s._v(" "),t("li",[s._v("有利于聚合查询（例如 COUNT、SUM、AVG、MIN 和 MAX）的高性能")]),s._v(" "),t("li",[s._v("分区效率很高，因为它提供了自动分片机制的功能，可以将较大的区域分配给较小的区域")])]),s._v(" "),t("p",[s._v("列式数据库的缺点：")]),s._v(" "),t("ul",[t("li",[s._v("JOIN 查询和来自多个表的数据未优化")]),s._v(" "),t("li",[s._v("必须为频繁的删除和更新创建拆分，因此降低了存储效率")]),s._v(" "),t("li",[s._v("由于非关系数据库的特性，分区和索引的设计非常困难")])]),s._v(" "),t("h2",{attrs:{id:"hbase-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hbase-安装"}},[s._v("#")]),s._v(" HBase 安装")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://hbase.apache.org/book.html#quickstart",target:"_blank",rel:"noopener noreferrer"}},[s._v("独立模式"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://hbase.apache.org/book.html#quickstart_pseudo",target:"_blank",rel:"noopener noreferrer"}},[s._v("伪分布式模式"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://hbase.apache.org/book.html#quickstart_fully_distributed",target:"_blank",rel:"noopener noreferrer"}},[s._v("全分布式模式"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/big-data-europe/docker-hbase",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 部署"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"hbase-hello-world-示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hbase-hello-world-示例"}},[s._v("#")]),s._v(" HBase Hello World 示例")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("连接 HBase")]),s._v(" "),t("p",[s._v("在 HBase 安装目录的 "),t("code",[s._v("/bin")]),s._v(" 目录下执行 "),t("code",[s._v("hbase shell")]),s._v(" 命令进入 HBase 控制台。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ ./bin/hbase shell\nhbase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":001:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("输入 "),t("code",[s._v("help")]),s._v(" 可以查看 HBase Shell 命令。")])]),s._v(" "),t("li",[t("p",[s._v("创建表")]),s._v(" "),t("p",[s._v("可以使用 "),t("code",[s._v("create")]),s._v(" 命令创建一张新表。必须要指定表名和 Column Family。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hbase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":001:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" create "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cf'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.4170")]),s._v(" seconds\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Hbase::Table - "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("列出表信息")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("list")]),s._v(" 命令来确认新建的表已存在。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hbase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":002:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" list "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v("\nTABLE\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0180")]),s._v(" seconds\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("可以使用 "),t("code",[s._v("describe")]),s._v(" 命令可以查看表的细节信息，包括配置信息")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hbase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":003:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" describe "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v("\nTable "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" is ENABLED\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nCOLUMN FAMILIES DESCRIPTION\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("NAME "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cf'")]),s._v(", VERSIONS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(", EVICT_BLOCKS_ON_CLOSE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'false'")]),s._v(", NEW_VERSION_BEHAVIOR "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'false'")]),s._v(", KEEP_DELETED_CELLS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'FALSE'")]),s._v(", CACHE_DATA_ON_WRITE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'false'")]),s._v(", DATA_BLOCK_ENCODING "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NONE'")]),s._v(", TTL "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'FOREVER'")]),s._v(", MIN_VERSIONS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),s._v(", REPLICATION_SCOPE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),s._v(", BLOOMFILTER "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ROW'")]),s._v(", CACHE_INDEX_ON_WRITE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'f\nalse'")]),s._v(", IN_MEMORY "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'false'")]),s._v(", CACHE_BLOOMS_ON_WRITE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'false'")]),s._v(", PREFETCH_BLOCKS_ON_OPEN "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'false'")]),s._v(", COMPRESSION "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NONE'")]),s._v(", BLOCKCACHE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v(", BLOCKSIZE\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'65536'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTook "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9998")]),s._v(" seconds\n")])])])]),s._v(" "),t("li",[t("p",[s._v("向表中写数据")]),s._v(" "),t("p",[s._v("可以使用 "),t("code",[s._v("put")]),s._v(" 命令向 HBase 表中写数据。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hbase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":003:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" put "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'row1'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cf:a'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'value1'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0850")]),s._v(" seconds\n\nhbase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":004:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" put "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'row2'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cf:b'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'value2'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0110")]),s._v(" seconds\n\nhbase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":005:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" put "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'row3'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cf:c'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'value3'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0100")]),s._v(" seconds\n")])])])]),s._v(" "),t("li",[t("p",[s._v("一次性扫描表的所有数据")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("scan")]),s._v(" 命令来扫描表数据。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hbase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":006:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" scan "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v("\nROW                                      COLUMN+CELL\n row1                                    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("column")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cf:a, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1421762485768")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value1\n row2                                    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("column")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cf:b, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1421762491785")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value2\n row3                                    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("column")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cf:c, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1421762496210")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value3\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0230")]),s._v(" seconds\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看一行数据")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("get")]),s._v(" 命令可以查看一行表数据。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hbase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":007:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" get "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'row1'")]),s._v("\nCOLUMN                                   CELL\n cf:a                                    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1421762485768")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value1\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0350")]),s._v(" seconds\n")])])])]),s._v(" "),t("li",[t("p",[s._v("禁用表")]),s._v(" "),t("p",[s._v("如果想要删除表或修改表设置，必须先使用 "),t("code",[s._v("disable")]),s._v(" 命令禁用表。如果想再次启用表，可以使用 "),t("code",[s._v("enable")]),s._v(" 命令。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hbase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":008:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" disable "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1820")]),s._v(" seconds\n\nhbase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":009:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1770")]),s._v(" seconds\n")])])])]),s._v(" "),t("li",[t("p",[s._v("删除表")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("drop")]),s._v(" 命令可以删除表。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hbase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":011:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" drop "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1370")]),s._v(" seconds\n")])])])]),s._v(" "),t("li",[t("p",[s._v("退出 HBase Shell")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("quit")]),s._v(" 命令，就能退出 HBase Shell 控制台。")])])]),s._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("官方")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://hbase.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("HBase 官网"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://hbase.apache.org/book.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("HBase 官方文档"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://abloz.com/hbase/book.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("HBase 官方文档中文版"),t("OutboundLink")],1)])])]),s._v(" "),t("li",[t("strong",[s._v("书籍")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://book.douban.com/subject/27600204/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hadoop 权威指南"),t("OutboundLink")],1)])])]),s._v(" "),t("li",[t("strong",[s._v("文章")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://static.googleusercontent.com/media/research.google.com/zh-CN//archive/bigtable-osdi06.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("Bigtable: A Distributed Storage System for Structured Data"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://mapr.com/blog/in-depth-look-hbase-architecture",target:"_blank",rel:"noopener noreferrer"}},[s._v("An In-Depth Look at the HBase Architecture"),t("OutboundLink")],1)])])]),s._v(" "),t("li",[t("strong",[s._v("教程")]),s._v(" "),t("ul",[t("li",[s._v("https://github.com/heibaiying/BigData-Notes")]),s._v(" "),t("li",[s._v("https://www.cloudduggu.com/hbase/introduction/")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);