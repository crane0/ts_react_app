import React from 'react';
import { Button } from 'antd';

interface Greeting {
  name: string,
  firstName?: string,
  lastName?: string,
}

// const Hello = (props: Greeting) => <Button>Hello {props.name}</Button>

/* 
在React的声明文件中，对函数组件单独定义了一个类型：React.FC
React.FC 是泛型类型，有1个泛型参数，表示函数属性类型
*/
const Hello: React.FC<Greeting> = ({
  name,
  firstName,
  lastName,
}) => <Button>Hello {name}</Button>

/* 
如果在 Greeting 中定义的，在使用 Hello 组件时，没有传递，想使用 `defaultProps` 定义默认参数，还是会报错！
在 Greeting 中将要设置为 `defaultProps` 的参数，设置为可选参数，才不会报错。
*/
Hello.defaultProps = {
  firstName: '',
  lastName: '',
}
export default Hello
