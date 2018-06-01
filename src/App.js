import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <select>
          <option>Tennis</option>
        </select>
        <button onMouseOver={() => console.log('shiitt')}>Grow</button>
      </div>
    );
  }
}

export default App;
