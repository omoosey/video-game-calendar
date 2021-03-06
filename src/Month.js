import React, { Component } from 'react';
import Week from './Week.js';

class Month extends Component {
	render () {
		let firstWeek = [];
		let lastWeek = [];
		let firstDay;
		let lastDay;

	/* (day + Math.floor(2.6month - 0.2) - 2century + year + Math.floor(year/4) + Math.floor(century/4))%7 
	    ** day (1 to 31)
	    ** month (1 = March, ..., 10 = December, 11 = Jan, 12 = Feb) Treat Jan & Feb as months of the preceding year
	    ** century (1987 has C = 19)
	    ** year (1987 has Y = 87 except Y = 86 for Jan & Feb)
	    ** date (0 = Sunday, ..., 6 = Saturday)
	    */

		firstDay = (1 + Math.floor((2.6*1) - 0.2) - (2*20) + 19 + Math.floor(18/4) + Math.floor(20/4))%7;
		
		if (firstDay < 0) {
			firstDay += 7
		}
		
	    console.log(firstDay);

	    lastDay = (31 + Math.floor((2.6*1) - 0.2) - (2*20) + 19 + Math.floor(18/4) + Math.floor(20/4))%7;

	    // Clean up with a for loop maybe?
		if(firstDay === 0){
			firstWeek.push(<div className="week">
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
						</div>)
		} else if (firstDay === 1){
			firstWeek.push(<div className="week">
							<div className="day blank">
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
						</div>)
		} else if (firstDay === 2){
			firstWeek.push(<div className="week">
							<div className="day blank">
							</div>
							<div className="day blank">
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
						</div>)
		} else if (firstDay === 3){
			firstWeek.push(<div className="week">
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day">
							</div>
							<div className="day">
							</div>
							<div className="day">
							</div>
							<div className="day">
							</div>
						</div>)
		} else if (firstDay === 4){
			firstWeek.push(<div className="week">
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day">
							</div>
							<div className="day">
							</div>
							<div className="day">
							</div>
						</div>)
		} else if (firstDay === 5){
			firstWeek.push(<div className="week">
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day">
							</div>
							<div className="day">
							</div>
						</div>)
		} else if (firstDay === 6){
			firstWeek.push(<div className="week">
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day">
							</div>
						</div>)
		}

		if(lastDay === 0){
			lastWeek.push(<div className="week">
							<div className="day">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
						</div>)
		} else if (lastDay === 1){
			lastWeek.push(<div className="week">
							<div className="day">
							</div>
							<div className="day">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
						</div>)
		} else if (lastDay === 2){
			lastWeek.push(<div className="week">
							<div className="day">
							</div>
							<div className="day">
							</div>
							<div className="day">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
						</div>)
		} else if (lastDay === 3){
			lastWeek.push(<div className="week">
							<div className="day">
							</div>
							<div className="day">
							</div>
							<div className="day">
							</div>
							<div className="day">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
						</div>)
		} else if (lastDay === 4){
			lastWeek.push(<div className="week">
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
							<div className="day blank">
							</div>
							<div className="day blank">
							</div>
						</div>)
		} else if (lastDay === 5){
			lastWeek.push(<div className="week">
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
							<div className="day blank">
							</div>
						</div>)
		} else if (lastDay === 6){
			lastWeek.push(<div className="week">
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
						</div>)
		}

		return (
			<div className="month">
              <h2>{this.props.months[0].name}</h2>
              {firstWeek}
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
              {lastWeek}
            </div>
		)
	}
}

export default Month