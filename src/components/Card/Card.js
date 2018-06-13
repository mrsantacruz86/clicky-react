import React from "react";
import "./Card.css";

class FriendCard extends React.Component {
  state = {
    clicked: false
  };

  handleClick = (event) => {
    this.props.removeFriend(this.props.id);
  }
  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {this.props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {this.props.occupation}
            </li>
            <li>
              <strong>Location:</strong> {this.props.location}
            </li>
          </ul>
        </div>
        <span onClick={this.removeFromBoard}
          className="remove">𝘅</span>
      </div>

    );
  }
}

export default FriendCard;
