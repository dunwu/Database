(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{364:function(t,r,e){"use strict";e.r(r);var _=e(4),n=Object(_.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"mysql-常见问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql-常见问题"}},[t._v("#")]),t._v(" Mysql 常见问题")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("📦 本文以及示例源码已归档在 "),r("a",{attrs:{href:"https://github.com/dunwu/db-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("db-tutorial"),r("OutboundLink")],1)])])]),t._v(" "),r("h2",{attrs:{id:"为什么表数据删掉一半-表文件大小不变"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么表数据删掉一半-表文件大小不变"}},[t._v("#")]),t._v(" 为什么表数据删掉一半，表文件大小不变")]),t._v(" "),r("p",[t._v("【问题】数据库占用空间太大，我把一个最大的表删掉了一半的数据，怎么表文件的大小还是没变？")]),t._v(" "),r("p",[t._v("表数据既可以存在共享表空间里，也可以是单独的文件。这个行为是由参数 "),r("code",[t._v("innodb_file_per_table")]),t._v(" 控制的：")]),t._v(" "),r("ol",[r("li",[t._v("这个参数设置为 OFF 表示的是，表的数据放在系统共享表空间，也就是跟数据字典放在一起；")]),t._v(" "),r("li",[t._v("这个参数设置为 ON 表示的是，每个 InnoDB 表数据存储在一个以 .ibd 为后缀的文件中。")])]),t._v(" "),r("p",[t._v("从 MySQL 5.6.6 版本开始，它的默认值就是 ON 了。")]),t._v(" "),r("p",[t._v("我建议你不论使用 MySQL 的哪个版本，都将这个值设置为 ON。因为，一个表单独存储为一个文件更容易管理，而且在你不需要这个表的时候，通过 drop table 命令，系统就会直接删除这个文件。而如果是放在共享表空间中，即使表删掉了，空间也是不会回收的。")]),t._v(" "),r("p",[t._v("所以，"),r("strong",[t._v("将 innodb_file_per_table 设置为 ON，是推荐做法，我们接下来的讨论都是基于这个设置展开的。")])]),t._v(" "),r("p",[t._v("我们在删除整个表的时候，可以使用 drop table 命令回收表空间。但是，我们遇到的更多的删除数据的场景是删除某些行，这时就遇到了我们文章开头的问题：表中的数据被删除了，但是表空间却没有被回收。")]),t._v(" "),r("p",[r("strong",[t._v("插入和删除操作可能会造成空洞")]),t._v("。")]),t._v(" "),r("ul",[r("li",[t._v("插入时，如果插入位置所在页已满，需要申请新页面。")]),t._v(" "),r("li",[t._v("删除时，不会删除所在页，而是将记录在页面的位置标记为可重用。")])]),t._v(" "),r("p",[t._v("所以，如果能够把这些空洞去掉，就能达到收缩表空间的目的。")]),t._v(" "),r("p",[t._v("要达到收缩空洞的目的，可以使用重建表的方式。")]),t._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《高性能 MySQL》"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://time.geekbang.org/column/intro/139",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL 实战 45 讲"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=n.exports}}]);