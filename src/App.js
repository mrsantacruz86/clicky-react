import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import cardsArray from "./assets/cards.json";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cardsArray,
      score: 0,
      maxScore: 0
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  shuffleElements = elementsArray => {
    let ctr = elementsArray.length, temp, index;
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      ctr--;
      // And swap the last element with it
      temp = elementsArray[ctr];
      elementsArray[ctr] = elementsArray[index];
      elementsArray[index] = temp;
    }
    return elementsArray;
  }
  increaseScore = () => {
    const sc = this.state.score + 1;
    this.setState({sc});
  }
  
  increaseMaxScore = () => {
    
  }
  
  handleClick = (id) => {
    alert(this.state.score);
    const cards = this.shuffleElements(this.state.cards);
    this.setState({cards});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Wrapper>
          {this.state.cards.map(card => (
            <Card
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
              checkCard={this.handleClick}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;

