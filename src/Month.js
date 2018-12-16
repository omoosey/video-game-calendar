import React, { Component } from 'react';
import Week from './Week.js';

class Month extends Component {
	render () {
		let week1 = [];
		let date = (1 + Math.floor((2.6*11) - 0.2) - (2*20) + 18 + Math.floor(18/4) + Math.floor(20/4))%7;
	    console.log(date);

		if(date === 2){
			week1.push()
		}

		return (
			<div className="month">
              <h2>{this.props.months[0].name}</h2>
              <Week />
              <div className="week">
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
              </div>
              <div className="week">
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
              </div>
              <div className="week">
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
              </div>
              <div className="week">
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
                <div className="day">
                </div>
              </div>
            </div>
		)
	}
}

export default Month