import React, { Component } from 'react'
import HomePage from './homePage'
import Loginpage from './loginPage'
class rendering extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        isLoggedIN:true
    }
  }

  render() {
    
        const {isLoggedIN}=this.state
        let ans;
        if (isLoggedIN){
            ans= <HomePage/>
        }
            
        else{
            ans= <Loginpage/>

        }
    return(
        <div>
        {ans}

        </div>
    )
  }

}

export default rendering
