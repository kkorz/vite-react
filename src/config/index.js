import loadable from "@loadable/component";

export default [
  {
    path: "/404",
    text: "404",
    component: loadable(() => import("../pages/404")),
    routeOnly: true,
  },
  {
    path: "/welcome",
    text: "首页",
    icon: "HomeOutlined",
    component: loadable(() => import("../pages")),
  },
  {
    path: "/hoc",
    text: "HOC",
    icon: "RocketOutlined",
    children: [
      {
        path: "/hoc/errorBoundary",
        text: "ErrorBoundary",
        icon: "AlertOutlined",
        component: loadable(() => import("../pages/HOC/ErrorBoundary")),
      },
      {
        path: "/hoc/withLoading",
        text: "WithLoading",
        icon: "AlertOutlined",
        component: loadable(() => import("../pages/HOC/WithLoading")),
      },
    ],
  },
  {
    path: "/hooks",
    text: "Hooks",
    icon: "MehOutlined",
    children: [
      {
        path: "/hooks/useDebounceFn",
        text: "useDebounceFn",
        component: loadable(() => import("../pages/Hooks/UseDebounceFn")),
      },
      {
        path: "/hooks/useThrottleFn",
        text: "useThrottleFn",
        component: loadable(() => import("../pages/Hooks/UseThrottleFn")),
      },
      {
        path: "/hooks/useSet",
        text: "useSet",
        component: loadable(() => import("../pages/Hooks/UseSet")),
      },
      {
        path: "/hooks/useTitle",
        text: "useTitle",
        component: loadable(() => import("../pages/Hooks/UseTitle")),
      },
      {
        path: "/hooks/useToggle",
        text: "useToggle",
        component: loadable(() => import("../pages/Hooks/UseToggle")),
      },
      {
        path: "/hooks/useUrlLoader",
        text: "useUrlLoader",
        icon: "AppstoreAddOutlined",
        component: loadable(() => import("../pages/Hooks/UseUrlLoader")),
      },
    ],
  },
  {
    path: "/childRef",
    text: "ChildRef",
    component: loadable(() => import("../pages/ChildRef")),
  },
  {
    path: "/todoList",
    text: "TodoList",
    icon: "OrderedListOutlined",
    component: loadable(() => import("../pages/TodoList")),
  },
  {
    path: "/timeLine",
    text: "TimeLine",
    icon: "UnderlineOutlined",
    component: loadable(() => import("../pages/Timeline")),
  },
  {
    path: "/waterfallFlow",
    text: "waterfallFlow",
    component: loadable(() => import("../pages/WaterfallFlow")),
  },
];
