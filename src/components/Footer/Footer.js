import React from "react";
import "./Footer.css";

class Footer extends React.Component {
	render() {
		return (
			<div className="page-header bg-dark fixed-bottom">
				<div className="header-spacer"></div>
				<div className="row">
					<div className="footer-container container">
						<div>Clicky Game!</div>
						<div>Icons from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> are licensed by CC BY 3.0</div>
					</div>					
				</div>
				<div className="header-spacer"></div>
			</div >
		);
	}
}

export default Footer;
