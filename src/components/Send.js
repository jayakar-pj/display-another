import React, { Component } from 'react';
import '../App.css';

class Send extends React.Component {
  constructor() {
    super();
    this.state = {
    username:'',
    email:'',
    phone:''
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.Change=this.Change.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const form = {
        username: this.state.username,
        email: this.state.email,
        phone:this.state.phone
       }
       // localStorage.setItem('form', JSON.stringify(form));
       // console.log(form);
       sessionStorage.setItem('username', this.state.username);
       sessionStorage.setItem('email', this.state.email);
       sessionStorage.setItem('phone', this.state.phone);
        this.props.history.push('/Display');
  }
  Change(event){
    this.setState({
      [event.target.name]:event.target.value
    })
 
  }
  render() {
    return (
        <div className="App">
        <p>Data Send</p>
      <form onSubmit={this.handleSubmit}>
        
        <label>
          Name:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.Change}
            ref={node => (this.username = node)}
          />
        </label><br/>
        <label>
          email:
          <input
            type="text"
            name="email"
            onChange={this.Change}
            value={this.state.email}
            ref={node => (this.Email = node)}
          />
        </label><br/>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            onChange={this.Change}
            value={this.state.phone}
            ref={node => (this.phone = node)}
          />
        </label><br/>
        <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}
           

export default Send;
