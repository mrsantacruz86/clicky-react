import React from 'react';
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header>
          <img src="https://openclipart.org/download/216311/mouse_leftclick.svg" className="App-logo" alt="logo" />
        </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <footer>
          <div>Icons from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> are licensed by CC BY 3.0</div>
        </footer>
      </div>
    );
  }
}

export default App;
