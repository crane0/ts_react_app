import React from 'react'
import ReactDOM from 'react-dom'

// import Hello from './components/demo/Hello'
// import HelloClass from './components/demo/HelloClass'
// import HelloHOC from './components/demo/HelloHOC'
// import HelloHooks from './components/demo/HelloHooks'
// import App from './components/App'
import Router from './routers/index'


ReactDOM.render(
  // <HelloHooks name="HOC-typescript" />,
  // <App />,
  <Router />,
  document.querySelector('.app')
) 