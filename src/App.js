import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import Wrapper from "./components/Wrapper";

class App extends React.Component {
  shuffleElements = elementsArray => {
    var ctr = elementsArray.length, temp, index;
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

  render() {
    return (
      <div className="App">
        <Header />
        <Wrapper>

        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
