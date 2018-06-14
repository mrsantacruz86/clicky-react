import React from "react";
import "./Header.css";
import AppLogo from "../AppLogo";
import Message from "../Message";
import Scores from "../Scores";



class Header extends React.Component {
	render() {
		return (
			<div className="page-header bg-dark fixed-top">
				<div className="header-spacer"></div>
				<div className="row">
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<AppLogo className="header-component">
							CLicky Game!
						</AppLogo>
					</div>

					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<Message className="header-component">
							This is s test
						</Message>
					</div>
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<Scores className="header-component">
							This is another test
						</Scores>
					</div>
				</div>
				<div className="header-spacer"></div>
			</div >
		);
	}
}

export default Header;
