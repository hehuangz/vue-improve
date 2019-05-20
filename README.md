# operation-demo
> 后台管理系统模板 [预览](https://fifteen718.github.io/operation-preview/#/login)

## 功能简述
1. 主界面包含: 登录页面；首页；用户管理(用户资产查询、用户日志查询、用户管理)；系统管理（分组权限管理、APP版本管理、后台账号管理、权限分配、修改密码）。
2. 主功能包含: 本地mock数据；登录跳转；导航栏菜单伸缩；表单校验中文提示；列表查询的常用布局；弹窗的父子组件传值；树组件、嵌套列表的使用。

## 安装预览

```bash
# 安装依赖
npm i || yarn || cnpm

# 启动本地调试
npm run dev || npm start

# 打包压缩
npm run build

# eslint格式校验
npm run lint
```


## 项目结构

```
.
├── README.md  ------------------------ 说明文件
├── package.json  --------------------- 项目配置
├── vue.config.js  -------------------- webpack配置入口
├── public  --------------------------- 入口文件
├──   ├── favicon.ico  ---------------- 网页图标
├──   └── index.html  -----÷------------ 入口页面
└── src  ------------------------------ 源码目录
    ├── apis  ------------------------- 请求的所有接口
    ├── assets  ----------------------- 项目资源文件目录（图片、字体等）
    ├── components  ------------------- 业务模块集合目录（组件）
    ├── js ---------------------------- 全局变量
    ├──  ├── fetch  ------------------- 请求配置 (axios mock配置管理文件)
    ├──  ├── formatters  -------------- 数据格式化配置
    ├──  ├── mocks  ------------------- 本地mock数据
    ├──  └── veeValidate -------------- 表单校验配置
    ├── views  ------------------------ 页面集合目录
    ├── App.less  --------------------- 主样式
    ├── App.vue  ---------------------- 主组件
    ├── main.js  ---------------------- 项目级入口配置文件
    └── router.js  -------------------- 路由配置
```

## 常见问题说明
1. 如果`vee-validate`在项目运行时报错，请重新安装旧版本，操作如下：
* `npm uninstall vee-validate` 或 `yarn remove vee-validate`
* `npm install vee-validate@2.0.0-rc.25` 或 `yarn add vee-validate@2.0.0-rc.25`

2. 路由模式变更，操作如下：
* router.js -> 路由切换history模式去URL中的#号，`mode: 'history'`
* vue.config.js -> 注释掉`baseUrl: process.env.NODE_ENV === 'production' ? './' : '/'`即可
