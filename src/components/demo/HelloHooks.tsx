import React, { Component, useEffect, useState } from 'react';
import { Button } from 'antd';

interface Greeting {
  name: string,
  firstName: string,
  lastName: string,
}

/* 
text初始值指定为 null，但也可以是 string 类型，如何约束类型？

useState 是一个泛型函数，
可以添加一个泛型参数，来约束state的类型。
这样就可以使用联合类型进行约束。
*/
const HelloHooks = (props: Greeting) => {
  // state指定了初始值，就不用再指定类型，会自动推断。
  const [count, setCount] = useState(0);
  const [text, setText] = useState<null | string>(null);

  // useEffect的第2个参数，表示只有当指定的参数改变时，useEffect 中的逻辑才会执行。
  useEffect(() => {
    console.log(1111)
    if (count > 5) {
      setText('稍后再试')
    }
  }, [count])

  return (
    <>
      <p>已经点击了{count}次 {text}</p>
      <Button onClick={() => setCount(count + 1)}>Hello {props.name}</Button>
    </>
  )
}

HelloHooks.defaultProps = {
  firstName: '',
  lastName: '',
}

export default HelloHooks
