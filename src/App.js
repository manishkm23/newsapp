import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News.jsx';
export default class App extends Component {
  render() {
    return (<>
      <Navbar/>
      <News pageSize="9"/>
    </>
    )
  }
}