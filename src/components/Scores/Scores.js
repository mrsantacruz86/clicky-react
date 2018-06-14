import React from "react";
import "./Scores.css";

class Scores extends React.Component {
	render() {
		return (
			<div className={`active-scores ${this.props.className}`}>
				{this.props.children}
			</div >
		);
	}
}

export default Scores;
