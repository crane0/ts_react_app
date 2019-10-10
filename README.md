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

另外，整体项目的结构这里只提了一下，对照源码自己完成。