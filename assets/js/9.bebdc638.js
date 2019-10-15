(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{175:function(a,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"安装和搭建php环境和php框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装和搭建php环境和php框架","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装和搭建PHP环境和PHP框架")]),a._v(" "),s("p",[a._v("PHP框架选用 Laravel 框架，并且使用 Composer 安装。")]),a._v(" "),s("h3",{attrs:{id:"composer-安装在-开发环境-："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composer-安装在-开发环境-：","aria-hidden":"true"}},[a._v("#")]),a._v(" Composer 安装在 开发环境 ：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("MACOS\n\nphp -r \"copy('https://getcomposer.org/installer', 'composer-setup.php');\"\nphp -r \"if (hash_file('sha384', 'composer-setup.php') === '48e3236262b34d30969dca3c37281b3b4bbe3221bda826ac6a9a62d6444cdb0dcd0615698a5cbe587c3f0fe57a54d8f5') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;\"\nphp composer-setup.php\nphp -r \"unlink('composer-setup.php');\"\n\nsudo mv composer.phar /usr/local/bin/composer \n\n")])])]),s("h3",{attrs:{id:"使用-composer-安装-laravel-框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-composer-安装-laravel-框架","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 Composer 安装 Laravel 框架")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("composer global require laravel/installer\n\n//把laravel 命令添加到 bash下\nexport PATH=~/.composer/vendor/bin:$PATH\n\n")])])]),s("p",[a._v("本地开发环境测试")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("php artisan serve\n\nhttp://localhost:8000\n\n")])])]),s("h3",{attrs:{id:"nginx-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置","aria-hidden":"true"}},[a._v("#")]),a._v(" Nginx 配置")]),a._v(" "),s("p",[a._v("在站点配置中加入以下配置，所有的请求将会引导至 index.php 前端控制器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("location / {\n     try_files $uri $uri/ /index.php?$query_string;\n}\n\n")])])]),s("h2",{attrs:{id:"更改数据名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改数据名称","aria-hidden":"true"}},[a._v("#")]),a._v(" 更改数据名称")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysqldump -u dbuser -p dbname > dbname.sql\n\nmysqldump -u root -p WinePlus_bottling > WinePlus_bottling.sql\n")])])]),s("p",[a._v("创建一个新的数据库 WinePlus")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CREATE DATABASE WinePlus;\n")])])]),s("p",[a._v("赋权限给 orchid 用户")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("GRANT ALL ON WinePlus.* TO 'orchid'@'%';\n")])])]),s("p",[a._v("导入数据到新的数据库")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql -uroot   -p < WinePlus_bottling.sql\n")])])]),s("p",[a._v("删除原始数据库")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql> drop database WinePlus_bottling;\n")])])])])}],!1,null,null,null);e.default=r.exports}}]);