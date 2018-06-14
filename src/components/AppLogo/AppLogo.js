import React from "react";
import "./AppLogo.css";
class AppLogo extends React.Component {
	render() {
		return (
			<div className={`App-Logo ${this.props.className}`}>
				<i class="far fa-hand-pointer"></i> {this.props.children}
			</div >
		);
	}
}

export default AppLogo;
