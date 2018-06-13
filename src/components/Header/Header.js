import React from "react";
import "./Header.css";

class Title extends React.Component {
	render() {
		return (
			<div className="page-header">
				<nav className="navbar navbar-dark bg-dark">
					<h1 className="navbar-brand mb-0 h1">Navbar</h1>
					<h1 className="title">{this.props.children}</h1>
				</nav>
			</div >
		);
	}
}

export default Title;
