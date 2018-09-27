import React from 'react';

const toQueryString = (obj) => {
  const parts = [];
  for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
          parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
      }
  }
  return parts.join('&');
};

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: null };

    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(location) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    const params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    };
    url += toQueryString(params);

    const apiKey = 'a9d221d6d5ef2e8d17f12958f23f98d7';
    url += `&APPID=${apiKey}`;

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        this.setState({weather: data});
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  render() {
    let content = <div></div>;

    if (this.state.weather) {
      const weather = this.state.weather;
      const temp = (weather.main.temp - 273.15) * 1.8 + 32;

      content = <div className="weather-content"><p>{weather.name}</p><p>{temp.toFixed(1)}°F</p></div>;
    } else {
      content = <div className="loading">loading weather...</div>;
    }

    return (
      <div className="weather widget">
        <h1>Weather</h1>
        {content}
      </div>
    );
  }

}

export default Weather;
