import React, { Component } from 'react'
import './style.css'
export default class state extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0 
      }
    }
    handleIncriment =() => {
        this.setState(
            {
                count: this.state.count+1
            }
        )
    }
    handldecriment=() =>{
        this.setState(
            {
                count: this.state.count-1
            }
        )
    }

  render() {
    const {count}=this.state
    return (
      <div>
        <h1>count: {count} </h1>
        
        <button onClick={this.handleIncriment}>+</button>
        <button onClick={this.handldecriment} disabled={count===0? true:false}>-</button>
        </div>
    )
  }
}
