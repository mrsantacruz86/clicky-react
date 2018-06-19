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
      maxScore: 0,
      clickedItems: [],
      actionMessage:"Select a card to start"
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
    this.setState({
      score: this.state.score + 1,
    });
  }
  restart = () => {
    this.setState({ score: 0 , clickedItems:[]});
  }
  
  setMaxScore = () => {
    if (this.state.maxScore <= this.state.score){
      this.setState({
        maxScore: this.state.maxScore + 1
      });
    }
  }
  
  displayMessage = (msg) => {
    this.setState({
      actionMessage:msg
    });
  }
  
  saveClickedCard = (id)=>{
    let joined = this.state.clickedItems.concat(id);
    this.setState({
      clickedItems: joined
    });
  }
  
  handleClick = (id) => {
    if (this.state.clickedItems.indexOf(id) < 0 ) {
      this.saveClickedCard(id);
      this.increaseScore();
      this.setMaxScore();
      this.displayMessage("YOU GUESSED CORRECTLY!");
      const cards = this.shuffleElements(this.state.cards);
      this.setState({ cards });
    }else{
      this.displayMessage("YOU GUESSED INCORRECTLY!");
      this.restart();
    }
  }

  render() {
    return (
      <div className="App">
        <Header 
          score={this.state.score}
          maxScore={this.state.maxScore}
          message={this.state.actionMessage}
        />
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

