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

    /* (day + Math.floor(2.6month - 0.2) - 2century + year + Math.floor(year/4) + Math.floor(century/4))%7 
    ** day (1 to 31)
    ** month (1 = March, ..., 10 = December, 11 = Jan, 12 = Feb) Treat Jan & Feb as months of the preceding year
    ** century (1987 has C = 19)
    ** year (1987 has Y = 87 except Y = 86 for Jan & Feb)
    ** date (0 = Sunday, ..., 6 = Saturday)
    */
    let date = (1 + Math.floor((2.6*11) - 0.2) - (2*20) + 18 + Math.floor(18/4) + Math.floor(20/4))%7;

    console.log(date);

    return (
      <div className="App">
        <header className="App-header">
        <h1>Game Release Calendar</h1>
          <div id="calendar">
            <Month />
          </div>
          <div id="list">
          </div>
        </header>
      </div>
    );
  }
}

export default App;
