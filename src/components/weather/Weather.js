import React, { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, weather: null, error: null };
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?id=3031137&units=metric&lang=fr_fr&appid=d097398003a07d358c1ca75221051984"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            weather: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }


  render() {
    return (
      <div>
        {this.state.isLoaded && (
          <div>
            <p>Temperature : {this.state.weather.main.temp} °C</p>
          </div>
        )}
      </div>
    );
  }
}

export default Weather;
