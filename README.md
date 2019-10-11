# 项目介绍

配合37节内容，改造项目为 redux 。

## 37，redux 改造

### 1，redux 的传统开发模式

1. 添加依赖
```
"dependencies": {
  "react-redux": "^7.1.1",  // 连接 redux
  "redux": "^4.0.4",
  "redux-thunk": "^2.3.0",  // 做异步请求的
},
``` 

2. 入口文件改造

3. 新建redux文件， `src\redux`

这里有 store和 rootReducer ，

还有一个 employee 文件夹，这是员工管理页面，所有与 redux 相关的逻辑，包括 state，action，reducer ，便于集中管理。

其中的 `index.ts` 会默认导出 reducer。

之后，如果有新的页面或逻辑，可以在 redux 文件下增加目录即可，便于集中管理。

以上，就是 redux 的传统开发模式。


### 2，页面改造

1. 员工管理页面的容器组件改造，`src\components\employee\index.tsx`

  - 将 redux 的 store 状态，映射到组件的状态上： employeeList，
  - 将更新状态的 action，映射到组件的属性上：onGetEmployee 

2. QueryForm改造，`src\components\employee\QueryForm.tsx`

只有1处修改，请求放在 action 中发送

3. employee组件的 reducer 核心逻辑 `src\redux\employee\index.ts`



> 从项目创建，组件开发，事件处理，数据请求，路由划分，状态管理，ts 都发挥了作用。



## [38，搭建服务端环境](https://github.com/crane0/ts-express)
