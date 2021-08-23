# vite-react

### 简介
基于Vite和Webpack搭建的React后台管理系统<br />
将路由和菜单配置合并，只需配置一处，即可自动生成目录和路由映射😝

### 在线预览
https://kkorz.github.io/vite-react-page/

### 安装使用
- `yarn` 安装依赖
- `yarn start` 启动本地开发环境
- `yarn build` 生产环境打包
### 技术栈
- React
- MobX
- Vite
- Webpack
- Axios
- Ant Design 
- Less

### 代码规范
:ballot_box_with_check: eslint
<br />
:ballot_box_with_check: stylelint
<br />
:ballot_box_with_check: prettier
<br />
:ballot_box_with_check: husky

### Commit规范
**使用commitlint严格限制提交message，仅支持以下类型**

|  类型     | 说明  |
|  ----     | ----  |
| bug       | 此项特别针对bug提交 |
| feat      | 新功能（feature） |
| fix       |  修复代码问题 |
| docs      |  完善文档（documentation）|
| style     |  样式相关改动 |
| refactor  |  重构代码 |
| test      |  测试代码 |
| chore     |  构建过程或辅助工具的变动 |
| revert    |  代码回退 |
| merge     |  合并分支 |


### 目录结构
```md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── img
│   ├── config
│   │   └── index.js
│   ├── core
│   │   ├── hoc
│   │   └── hooks
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
├── index.html
├── commitlint.config.js
├── jsconfig.json
├── README.md
├── vite.config.js
├── webpack.config.js
├── package.json
└── yarn.lock
```

### 项目截图
![image](https://user-images.githubusercontent.com/88693424/129536952-b5e23659-2efd-4143-83b9-6494b2fd7c26.png)

