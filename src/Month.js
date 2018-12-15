import React, { Component } from 'react';

class Month extends Component {
	render () {
		return (
			<div className="month">
              <h2>{this.state.months[0].name}</h2>
              <div className="week">
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