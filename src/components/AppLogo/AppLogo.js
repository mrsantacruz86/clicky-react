import React from "react";
import "./AppLogo.css";
import logo from "./icon.svg";

class AppLogo extends React.Component {
	render() {
		return (
			<div className="App-Logo">
				<i class="far fa-hand-pointer"></i> {this.props.children}
			</div >
		);
	}
}

export default AppLogo;
