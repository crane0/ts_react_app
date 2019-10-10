import React, { Component } from 'react';
import HelloClass from './HelloClass'

/* 
React.ComponentType 表示组件的类型，
type React.ComponentType<P = {}> = React.ComponentClass<P, any> | React.FunctionComponent<P>
既可以是类组件，也可以是函数组件。
并且还是一个泛型接口，需要传入一个泛型变量（表示被包装组件的属性类型）。

因为 HelloHOC 这个函数，在参数中，引用了泛型变量，
所以这个 HelloHOC，也要改造成泛型函数。

用泛型变量，约束Component的类型，

最后，还要用这个 P（表示被包装组件的属性类型）约束 props

---

关于loading，因为被包装的组件上，没有这个属性，
可以先定义一个接口约束 loading，
再使用交叉类型，使被包装的组件，也具有loading属性。
P & Loading
*/

/* 
最后，在index.tsx中引用时，还是会报错（隐藏的bug）
因为 HelloClass 作为被包装组件，它的属性也有接口进行了约束，
并且它的属性无法传递给高阶组件 HelloHOC，

解决：
将 HelloClass 的未使用属性改为可选的。
*/
interface Loading {
  loading: boolean
}

function HelloHOC<P>(WrappedComponent: React.ComponentType<P>) {
  return class extends Component<P & Loading> {
    render() {
      const { loading, ...props } = this.props
      return loading ? <div>Loading...</div> : <WrappedComponent {...props as P} />
    }
  }
}

export default HelloHOC(HelloClass)
