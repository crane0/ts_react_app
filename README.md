## 项目介绍

配合32节内容，通过create-react-app 脚手架创建的。

可以直接通过 `npm start` 启动。

### 1，工程目录介绍

#### 1.1. /public 文件夹，其内容会被拷贝到，最终生成项目的根目录下。

可以放一些静态文件，比如图标，字体。

对静态文件的引用，需要加 public，比如 index.html 中 `<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />`

而图片，可以直接引用 `<link rel="apple-touch-icon" href="logo192.png" />`

#### 1.2. /src 文件夹，

`index.tsx` 是整个工程的入口文件。


#### 1.3. package.json 文件

已经预置安装了一些包，但注意到没有关于 webpack 的包。

这是因为，webpack相关的，都集成封装在了 `react-scripts` 包中。

所以，类似启动脚本等一些脚本，都是通过 `react-scripts` 实现的。

如果对配置项不满意，想自己配置，可以运行 `npm run eject` 将webpack的隐藏配置项弹出，自己配置。


> 之后的一部分课程的讲解，都会使用这个项目，所以这里对其进行一些改造。

### 2，改造后的项目

#### 2.1. 基础的，和 `ts_react_manual` 项目一样。

#### 2.2. 新添加的依赖

npm i xx --save
```
antd
axios
react-router-dom
```

开发依赖 npm i xx -D

下面3个，是[ant-design官网](https://ant.design/docs/react/use-with-create-react-app-cn)建议使用的方式。
```
// 可以实现 antd 的按需加载
babel-plugin-import，
// 可以实现create-react-app脚手架的自定义
customize-cra,
react-app-rewired，
```

和mock相关的。
```
// 可以帮助搭建mock server 
http-server,
http-proxy-middleware
```

#### 2.3. 脚本更改

脚本命令中，都要将`react-scripts` 替换为 `react-app-rewired`，

也是[ant-design官网](https://ant.design/docs/react/use-with-create-react-app-cn)提到需要配置的。


#### 2.4. antd的配置文件

在根目录下，创建 config-overrides.js ，为了配合实现 antd 的按需加载。

其中的配置，也是参考[ant-design官网](https://ant.design/docs/react/use-with-create-react-app-cn)


`npm start` 启动成功，配置无误。

---

## 第33讲，创建具有类型约束的，函数组件和类组件

### 1，函数组件 

`/src/components/demo/Hello.tsx`

与传统的区别：

需要对函数组件的属性，指定类型。

2种方式，

- 一般的方式
```
const Hello = (props: Greeting) => <Button>Hello {props.name}</Button>
```

- 使用React的声明文件中，对函数组件单独定义的一个类型：React.FC

但有诸多的不变，代码中有提现。

另外，React.SFC（无状态组件） React 之后可能会废弃，

所以无状态组件与函数组件，最好都使用一般的方式。


### 2，类组件

`/src/components/demo/HelloClass.tsx`

与传统的区别：

需要为组件的 属性和状态，都指定类型。

---

## 第34讲，创建具有类型约束的，高阶组件 和 Hooks

### 1，高阶组件HOC

`/src/components/demo/HelloHOC.tsx`

ts 用在高阶组件中，会有一些类型的问题，甚至会有一些隐藏的 bug，

这并不是高阶组件本身的问题，是因为React的声明文件，还没有很好的兼容高阶组件的类型检查。

更推荐的方式 --> **使用 Hooks 编写组件**

### 2，Hooks

`/src/components/demo/HelloHooks.tsx`

要点都写在了代码中。

另外，整体项目的结构这里只提了一下，对照源码自行编写。

---

## 第35讲，事件处理和数据请求

### 1，表单组件，`src/components/employee/QueryForm.tsx`，

1. 有3个表单组件，Input, Select, Button，

Input, Select 设置为受控组件：将他们的value和组件的状态绑定。需要用到 onClick 和 onChange 事件。

Button 绑定事件，用于向后端发送请求，渲染列表。

2. 该组件的状态，就是向后端发送数据的格式，其字段和字段类型，都是接口文档的一部分，应该将其抽离出来，单独定义为接口。


### 2，数据接口组件，`src/interface/employee.ts`，

用于存放和后端交互的数据请求。

好处：

- 利于项目的维护。接手人员容易上手，并且使用接口的变量，也会有提示的功能。
- 类型检查。未考虑的边界情况，会及时报错。


### 3，发送请求组件，`src/utils/request.ts`

自定义了发送实例，并且对post请求做了封装处理。


### 4，常量组件，`src/constants/urls.ts`

用于存放一些常量，比如请求url

### 5，Mock组件，`mock/employee/getEmployee.json`

在做前后端分离开发时，需要先将发送到后端的请求，代理到本地 mock server 上。

getEmployee.json 就是后端返回的数据结构。

> create-react-app，内部使用的 webpack-server，将 public 文件夹作为静态资源的根目录，
所以将 mock 相关的，放在 public，就可以直接访问了，
但我们不会这样做，而且webpack的配置被隐藏了，

**所以，需要再启动一个以 mock 为根目录的 API server，提供 mock 服务。**

在package.json中，使用了 `http-server` 依赖，

并指定了一个脚本 `"server": "cd mock && hs -p 4000 -a localhost"`

（脚本含义：先进入mock目录，在该目录下启动的server，服务名称 localhost）

**启动时，需要新开个终端** `npm run server`

在页面打开 `http://localhost:4000` 就可以在页面看到 mock 文件夹下的目录。

> 题外话，
在mac系统下，是可以正确访问到目录列表的，在windows10下，无法访问。
感觉区别是，一个访问的是目录列表，一个访问的是 index.html。
另外测试发现，
通过使用 php 的命令启动本地服务，php -S 0.0.0.0:8081，访问的是当前目录下的 index.html
而使用 python 的命令启动本地服务，python -m SimpleHTTPServer 8082，访问的就是当前目录列表。

当查看目录下的 json 文件时，会发现路径是：
```
http://localhost:4000/employee/getEmployee.json
```

而在项目中，发送的请求肯定是和定义的 url 一致的，如下：
```
http://localhost:3000/api/employee/getEmployee.action?name=
```

所以需要做自定义的配置，代理更改请求的路径，以拿到数据。

在该目录下：`src\setupProxy.js`下进行配置。 create-react-app，会在启动时，自动的调用该文件。

---

## 第36讲，列表渲染和路由

### 1，员工管理主页面组件，`src/components/employee/index.tsx`

1. 兄弟组件间，数据的传递，
2. 使用接口的好处，
3. 边界情况的解决办法 --> 类型保护。注意，typeof 返回的都是字符串！
4. 如何为 antd 改造过的组件传递 props

以上，员工管理主页面的功能已完成。

### 2，路由的设置，`src/routers/index.tsx`

将整个页面，都定义为了路由，

1. 改造 `src/index.tsx`，不再渲染 App，而是 Router。

2. 改造 `src/components/App.tsx`，

除了菜单选项之外，还有菜单的默认值，

在路由的切换过程中，菜单的初始状态，要根据当前路由的路径 hash 来决定的，

路径 hash 会通过参数传入，去掉 `/` 进行匹配。


## 第37讲，redux改造

就是 [redux-version 分支](https://github.com/crane0/ts_react_app/tree/redux-version)