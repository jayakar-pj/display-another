import React from 'react';

class Header extends React.Component{
	render(){
		return(
			<div className="App-Header">
			<div className="Body">
			<h1>Khaja Moulali {this.props.initial}</h1>
			<p>This is my first react application example</p>
			</div>
			</div>
			)
	}
}


export default Header;