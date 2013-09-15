<?php
if (!defined('THINK_PATH')) exit();
return array(
    //'SHOW_PAGE_TRACE' => true, //开启页面TRACE
    'APP_FILE_CASE' => true,  //是否检查文件的大小写，仅对Window平台有效

    'LANG_SWITCH_ON' => true,  //开启语言包
    'DEFAULT_LANG' => 'zh-cn', // 默认语言

    'TMPL_L_DELIM' => '<!--{',  //模板左分隔符
    'TMPL_R_DELIM' => '}--!>',  //模板右分隔符

    'DB_TYPE' => 'mysql',  //数据库类型
    'DB_HOST' => 'localhost',  //服务器地址
    'DB_NAME' => 'open',  //数据库名
    'DB_USER' => 'root',  //用户名
    'DB_PWD' => '',  //密码
    'DB_PORT' => '3306',  //端口
    'DB_PREFIX' => 'datangmedia_',  //数据库表前缀

    'URL_CASE_INSENSITIVE' => true,  // 默认false 表示URL区分大小写 true则表示不区分大小写
    'TMPL_PARSE_STRING' => array(
      '__UPLOAD__' => __ROOT__ . '/Upload',
    ),
);
