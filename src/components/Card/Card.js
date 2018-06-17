import React from "react";
import "./Card.css";

class Card extends React.Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    this.props.checkCard(this.props.id)
    this.setState(prevState => (
      {clicked: true}
    ));
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
