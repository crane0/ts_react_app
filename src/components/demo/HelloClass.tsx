import React, { Component } from 'react';
import { Button } from 'antd';

interface Greeting {
  name: string,
  firstName: string,
  lastName: string,
}

interface State {
  count: number
}

/* 
Component<P = {}, S = {}, SS = any>

Component 被定义为泛型类，
第1个参数，表示属性类型，默认{}
第2个参数，表示状态类型，默认{}
第3个参数，不用关注。。。
*/
class HelloClass extends Component<Greeting, State> {
  state: State = {
    count: 0
  }
  static defaultProps = {
    firstName: '',
    lastName: '',
  }
  render () {
    return (
      <>
        <p>已经点击了{this.state.count}次</p>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>Hello {this.props.name}</Button>
      </>
    )
  }
}
export default HelloClass
