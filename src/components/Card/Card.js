import React from "react";
import "./Card.css";

class Card extends React.Component {
  state = {
    clicked: false
  };

  handleClick = (event) => {

  }
  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
      </div>

    );
  }
}

export default Card;
