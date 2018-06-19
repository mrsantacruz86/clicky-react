import React from "react";
import "./Card.css";

class Card extends React.Component {

  handleClick = () => {
    this.props.checkCard(this.props.id)
  }

  render() {
    return (
      <div className="card">
        <div className="img-container" onClick={this.handleClick}>
          <img alt={this.props.name} src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default Card;
