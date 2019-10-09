## 项目介绍

配合32节内容，通过create-react-app 脚手架创建的。

可以直接通过 `npm start` 启动。

### 1，工程目录介绍

1. /public 文件夹，其内容会被拷贝到，最终生成项目的根目录下。

可以放一些静态文件，比如图标，字体。

对静态文件的引用，需要加 public，比如 index.html 中 `<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />`

而图片，可以直接引用 `<link rel="apple-touch-icon" href="logo192.png" />`

2. /src 文件夹，

`index.tsx` 是整个工程的入口文件。


3. package.json 文件

已经预置安装了一些包，但注意到没有关于 webpack 的包。

这是因为，webpack相关的，都集成封装在了 `react-scripts` 包中。

所以，类似启动脚本等一些脚本，都是通过 `react-scripts` 实现的。

如果对配置项不满意，想自己配置，可以运行 `npm run eject` 将webpack的隐藏配置项弹出，自己配置。

---

> 之后的一部分课程的讲解，都会使用这个项目，所以这里对其进行一些改造。

### 2，改造后的项目

1. 基础的，和 `ts_react_manual` 项目一样。

2. 新添加的依赖

npm i xx --save
```
antd
axios
react-router-dom
```

开发依赖 npm i xx -D
```
// 可以实现 antd 的按需加载
babel-plugin-import，
// 可以实现create-react-app脚手架的自定义
customize-cra,
react-app-rewired，
```
上面3个，在[ant-design官网](https://ant.design/docs/react/use-with-create-react-app-cn)中，有提到。

```
// 可以帮助搭建mock server 
http-server,
http-proxy-middleware
```


另外，所有的脚本命名都要将，`react-scripts`  替换为 `react-app-rewired`，

也是在[ant-design官网](https://ant.design/docs/react/use-with-create-react-app-cn)中，有提到需要配置的。


3. antd的配置文件

在根目录下，创建 config-overrides.js ，为了配合实现 antd 的按需加载。

其中的配置，也是参考[ant-design官网](https://ant.design/docs/react/use-with-create-react-app-cn)


4. tsconfig.json

是create-react-app 创建的，不需要更改。


---

`npm start` 启动成功，配置无误。