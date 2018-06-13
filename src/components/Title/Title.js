import React from "react";
import "./Title.css";

class Title extends React.Component{
	render(){
		return (
		<h1 className="title">{this.props.children}</h1>
		);
	}
}

export default Title;
