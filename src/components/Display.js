import React, { Component } from 'react';
import '../App.css';

class display extends Component {
 constructor(props) {
    super(props)
    this.state={
    	form:[]
    }
  }

  render() {
    const name = sessionStorage.getItem('username');
   const email = sessionStorage.getItem('email');
const phone = sessionStorage.getItem('phone');
    console.log(name)
    return (
        <div className="App">
      {name}<br/>
      {email}<br />
      {phone}
      </div>
    )
  }
}
           

export default display;
