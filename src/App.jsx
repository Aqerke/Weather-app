import "./App.css";
import { React, useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCity } from "@react-icons/all-files/fa/FaCity";
import { FaTemperatureLow } from "@react-icons/all-files/fa/FaTemperatureLow";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import { FaRegFileAlt } from "@react-icons/all-files/fa/FaRegFileAlt";
import { FaArrowCircleDown } from "@react-icons/all-files/fa/FaArrowCircleDown";
import { FaCloudRain } from "@react-icons/all-files/fa/FaCloudRain";

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <p>Current Date is = {currDate}</p>
    <p>Current Time is = {currTime}</p>
  </>,
  document.getElementById("root")
);

const api = {
  key: "d6dcec49db06d1e3fd25ca57f17caaa1",
  base: "https://api.openweathermap.org/data/2.5/",
};

const FunctionalComponent = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /* Search button is pressed. Making a fetch call to the Open Weather Map API. */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  /*class Weather extends React.Component {
    render() {
      return (
        <div className="weatherapp">
          <h3>Weather app {this.props.name}!</h3>
        </div>
      );
    }
  }
  // Default values of props
  Weather.defaultProps = {
    name: "There",
    message: "Weather app",
  };

  const element1 = document.getElementById("weatherapp");

  ReactDOM.render(<Weather name="Tran" message="Welcome back!" />, element1);
*/

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>
        <p>Current date: {currDate}</p>
        <p>Current time: {currTime}</p>
        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>
              <FaCity /> {weather.name}
            </p>

            {/* Temperature Celsius  */}
            <p>
              <FaTemperatureLow /> {weather.main.temp}°C
            </p>

            {/* Condition (Sunny ) */}
            <p>
              <FaChevronRight /> {weather.weather[0].main}
            </p>
            <p>
              <FaRegFileAlt /> {weather.weather[0].description}
            </p>
            <p>
              <FaCloudRain /> Humidity: {weather.main.humidity}%
            </p>
            <p>
              <FaArrowCircleDown /> Pressure: {weather.main.pressure}
            </p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
};

export default FunctionalComponent;
