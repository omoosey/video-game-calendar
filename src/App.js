import React, { Component } from 'react';
import './App.css';
import Month from './Month.js'

class App extends Component {
  state = {
    games: [],
    months: [{name: 'January', numOfDays: 31}, {name: 'February', numOfDays: 28}, {name: 'March', numOfDays: 31}, 
              {name: 'April', numOfDays: 30}, {name: 'May', numOfDays: 31}, {name: 'June', numOfDays: 30}, 
              {name: 'July', numOfDays: 31}, {name: 'August', numOfDays: 31}, {name: 'September', numOfDays: 30}, 
              {name: 'October', numOfDays: 31}, {name: 'November', numOfDays: 30}, {name: 'December', numOfDays: 31}, ]
  }

  componentWillMount = () => {
    fetch('https://api-endpoint.igdb.com/release_dates/154513', {
      mode: 'cors',
      headers: {
        'user-key': 'fe6b183a901554b5418e7b3a22ca8288',
        'Accept': 'application/json'
      } 
    }).then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    let days = [];

    
    

    return (
      <div className="App">
        <header className="App-header">
        <h1>Game Release Calendar</h1>
          <div id="calendar">
            <Month months={this.state.months}/>
          </div>
          <div id="list">
          </div>
        </header>
      </div>
    );
  }
}

export default App;
