# vite-react

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

### Commit规范
**使用commitlint严格限制提交message，仅支持以下类型**

:point_right: "bug", // 此项特别针对bug提交，用于向测试反馈bug列表的bug修改情况 <br />
:point_right: "feat", // 新功能（feature） <br />
:point_right: "fix", // 修补bug  <br />
:point_right: "docs", // 文档（documentation） <br />
:point_right: "style", // 格式（不影响代码运行的变动） <br />
:point_right: "refactor", // 重构（即不是新增功能，也不是修改bug的代码变动） <br />
:point_right: "test", // 增加测试  <br />
:point_right: "chore", // 构建过程或辅助工具的变动  <br />
:point_right: "revert", // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)  <br />
:point_right: "merge", // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址  <br />

### 目录结构
```md
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
├── README.md
├── index.html
├── package.json
├── vite.config.js
├── webpack.config.js
└── yarn.lock
```

### 项目截图
![image](https://user-images.githubusercontent.com/88693424/129435198-6283618b-c571-4d40-bfed-39e874a91819.png)
