import React from "react";
import "./Message.css";

class Message extends React.Component {
	render() {
		return (
			<div className="action-message">
				{this.props.children}
			</div >
		);
	}
}

export default Message;
