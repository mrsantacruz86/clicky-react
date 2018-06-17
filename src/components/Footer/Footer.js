import React from "react";
import "./Footer.css";

class Footer extends React.Component {
	render() {
		return (
			<div className="bg-dark fixed-bottom">
				<div className="row">
					<div className="footer-container container">
						<div>Clicky Game! Icons from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> are licensed by CC BY 3.0</div>
					</div>					
				</div>
			</div >
		);
	}
}

export default Footer;
