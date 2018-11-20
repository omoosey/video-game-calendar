import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    games: [],
    months: [{name: 'January', numOfDays: 31}, {name: 'February', numOfDays: 28}, {name: 'March', numOfDays: 31}, 
              {name: 'April', numOfDays: 30}, {name: 'May', numOfDays: 31}, {name: 'June', numOfDays: 30}, 
              {name: 'July', numOfDays: 31}, {name: 'August', numOfDays: 31}, {name: 'September', numOfDays: 30}, 
              {name: 'October', numOfDays: 31}, {name: 'November', numOfDays: 30}, {name: 'December', numOfDays: 31}, ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Game Release Calendar</h1>
          <div id="calendar">
            <div className="month">
              <h2>{this.state.months[0].name}</h2>
              <div className="week">
                <div className="day">
                </div>
              </div>
            </div>
          </div>
          <div id="list">
          </div>
        </header>
      </div>
    );
  }
}

export default App;
