import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { time: new Date() };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval( this.tick, 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return (
      <div className="clock widget">
        <h1>Clock</h1>
        <div className="clock-content">
          <div>
            <h2>Time:</h2>
            <h2>{hours} : {minutes} : {seconds} PDT</h2>
          </div>
          <div>
            <h2>Date:</h2>
            <h2>{ this.state.time.toDateString() }</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
