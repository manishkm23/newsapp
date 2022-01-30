import React, { Component } from 'react'
import loading from '../loading.gif'
export default class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} className='mx-3' alt="" style={{height:'50px',width:'50px'}}/>
      </div>
    )
  }
}