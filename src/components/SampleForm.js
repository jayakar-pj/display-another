import React from 'react';
import browserHistory from 'react-router';

class SampleForm extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			status : ''
		}
	}

	handleInputChange = (e) =>{
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	handleSubmit = (e)=>{
		e.preventDefault();
		console.log('clicked');
		
		const data = {
			'firstName' : this.state.firstName,
			'lastName' : this.state.lastName,
			'status' : this.state.status
		}
const fn = this.state.firstName;
 localStorage.setItem("fn", JSON.stringify(fn));
 // console.log(fn);
		console.log(data);
		fetch('http://localhost:5000/api/addNewDeck',{
			method: 'POST',
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			body: data
		}).then((res)=>res.json())
		.then((data)=>console.log(data))
		.then((err)=>console.log(err))
	// let name = localStorage.getItem(fn);
	// 	console.log(name);
this.props.history.push('/Display');
		this.setState({
			firstName: '',
			lastName: '',
			status: ''
		})
	}
	render(){
	
		return(
			<div>
			<input type="text" 
				   value={this.state.firstName}
				   name="firstName"
				   onChange={this.handleInputChange}
				   /><br/>
			<input type="text" 
				   value={this.state.lastName}
				   name="lastName"
				   onChange={this.handleInputChange}
				   /><br/>
			<input type="text" 
				   value={this.state.status}
				   name="status"
				   onChange={this.handleInputChange}
				   /><br/>
			<button onClick={this.handleSubmit}> Submit </button>
			</div>
			)
	}
}


export default SampleForm;