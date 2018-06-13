import React from 'react';
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <footer>
          <div>Icons from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> are licensed by CC BY 3.0</div>
        </footer>
      </div>
    );
  }
}

export default App;
