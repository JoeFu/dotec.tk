---
sidebar: auto
title: Blogging Like a Hacker
lang: cn-Zh
---


## AWS创建数据库服务器

1. 创建LightSail 实例
2. 用密钥创建SSH连接
3. 创建用户，不要使用root直接操作服务器 
### Adduser example:

```
groupadd orchid
useradd -g orchid orchid
id orchid
passwd orchid
```
4. 搭建环境，MySQL

### 更新数据源
```
yum update
```
### 安装 MySql

```
添加Mysql 源
sudo rpm -Uvh http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm
```
添加完成后安装
```
yum install mysql-server
```
修改原始密码，并且创建用户

```
ROOT AS example;

# mysql -uroot -p /*输入密码进入*/
/*第一个方式：直接编辑数据库字段*/
mysql> use mysql;
mysql> UPDATE user SET password=password('OrchidWineGroup') WHERE user='root';
mysql> flush privileges;
mysql> exit
/*第二个方式：修改密码，不用进入mysql*/
mysql> SET password for 'root'@'localhost'=password('OrchidWineGroup');
mysql> exit;
```
### Mysql创建新用户，并开通全局访问权限
```
CREATE USER 'orchid'@'%' IDENTIFIED BY 'orchidwinegroup';
```
用ROOT账户创建在线报价表 WinePlus_bottling
```
CREATE TABLE `WinePlus_bottling` (column column_type) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
给 'orchid' 账户赋予 WinePlus_bottling 的权限，此权限可以添加删除更新数据库
```
GRANT ALL ON WinePlus_bottling.* TO 'orchid'@'%';
```
## AWS创建应用服务器
### 更新数据源
```
yum update
```

### 安装Nginx

```  
sudo yum install epel-release
sudo rpm -Uvh http://nginx.org/packages/centos/7/x86_64/RPMS/nginx-1.14.2-1.el7_4.ngx.x86_64.rpm 
```

``` 
yum update 
```

``` 
yum install nginx 
```
### PHP 环境配置
```
yum install epel-release yum-utils
yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum-config-manager --enable remi-php72
yum install php php-common php-opcache php-mcrypt php-cli php-gd php-curl php-mysqlnd php-xmlrpc php-mbstring
php -v

yum install php-fpm

vi /etc/php-fpm.d/www.conf
update:
user = orchid
group = orchid

systemctl status php-fpm
systemctl start php-fpm
```


### 配置站点记得添加
```
setenforce 0
打开Linux 防火墙
```

