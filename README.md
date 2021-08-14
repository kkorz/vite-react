### 简介
基于Vite和Webpack搭建的React后台管理系统<br />
将路由和菜单配置合并，只需配置一处，即可自动生成目录和路由映射😝

### 安装使用
- yarn 安装依赖
- yarn start 启动本地开发环境
- yarn build 生产环境打包
### 技术栈
- React
- Mobx
- Vite
- Webpack
- axios
- antd 
- less

### 代码规范
:ballot_box_with_check: eslint
<br />
:ballot_box_with_check: prettier
<br />
:ballot_box_with_check: husky

### 目录结构
```md
├── index.html
├── package.json
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── img
│   ├── config
│   │   └── index.js
│   ├── favicon.svg
│   ├── layout
│   │   ├── Content.jsx
│   │   ├── Header.jsx
│   │   ├── index.jsx
│   │   ├── index.less
│   │   └── Menu.jsx
│   ├── main.jsx
│   ├── pages
│   │   ├── 404.jsx
│   │   ├── ChildRef
│   │   ├── HOC
│   │   ├── Hooks
│   │   ├── index.jsx
│   │   ├── Timeline
│   │   ├── TodoList
│   │   └── WaterfallFlow
│   └── store
│       ├── index.js
│       ├── layout.js
│       └── todolist.js
├── vite.config.js
├── webpack.config.js
└── yarn.lock
```

### 项目截图
![image](https://user-images.githubusercontent.com/88693424/129435198-6283618b-c571-4d40-bfed-39e874a91819.png)
