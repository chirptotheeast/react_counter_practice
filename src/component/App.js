import React from 'react';
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate"
import './App.css';

class App extends React.Component {
  state = {
    total: null, 
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  }


  render(){
    return (
    <div className="App">
      <header className="App-header">
          Welcome to the counter
      </header>
    </div>
    );
  }
}

export default App;
