import React from "react";
import "./Header.css";
import AppLogo from "../AppLogo";
import Message from "../Message";
import Scores from "../Scores";



class Header extends React.Component {
	render() {
		return (
			<div className="page-header">
				<nav className="navbar navbar-dark bg-dark fixed-top">
					<h1 className="navbar-text display-6">
						<AppLogo className="header-parts">
							CLicky Game!
						</AppLogo>
						<Message className="header-parts">
							This is s test
						</Message>
						<Scores className="header-parts">
							This is another test
						</Scores>
					</h1>
				</nav>
			</div >
		);
	}
}

export default Header;
