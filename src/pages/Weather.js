import { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [place, getPlace] = useState(null);
  const [location, setLocation] = useState("london");
  const [inputVal, setInpVal] = useState("");
  const url = `https://www.meteosource.com/api/v1/free/point?place_id=${location}&sections=current%2Chourly&language=en&units=auto&key=5860w7akso07hw0k4n78781ynv3s4xfh13p6n7st`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        getPlace(response.data);
      })
      .catch((err) => {
        console.error("Invalid Location", err);
        alert("Invalid Location. Try Again");
      });
  }, [location]);

  if (!place) {
    return (
      <div>
        <h1 className="pt-64 text-8xl text-pretty italic font-montserrat font-extrabold text-dark-blue">
          Loading...
        </h1>
      </div>
    );
  }

  const inputLocation = () => {
    setLocation(inputVal);
  };

  return (
    <div className="bg-weather bg-cover bg-center h-screen w-full rounded-lg">
      <header className="flex ml-3 mt-2 text-4xl font-bold italic bg-gradient-to-r from-orange to-blue-600 bg-clip-text text-transparent hover:text-gray-600 duration-500"></header>

      <div className="absolute right-6 border-2 border-white p-3 mt-3 rounded-2xl backdrop-blur-3xl">
        <input
          type="text"
          placeholder="Around the globe..."
          value={inputVal}
          className="scale-105 focus:outline-none text-white bg-transparent placeholder-white"
          onChange={(e) => setInpVal(e.target.value)}
        ></input>
        <button onClick={inputLocation} className="text-white">
          Search
        </button>
      </div>

      <div className="mt-40">
        <div className="max-w-md max-h-md mx-auto p-6 shadow-lg rounded-lg border border-gray-200 backdrop-blur-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">
              {place.timezone}
            </h2>
            <p className="text-sm text-white ml-5 inline">
              Lat: {place.lat} Lon: {place.lon}
            </p>
          </div>

          <p className="text-7xl font-light text-white mb-14 mt-14">
            {place.current.temperature}°C
          </p>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-white">
              <span className="font-medium">Wind Speed:</span>
              <span className="font-light">{place.current.wind.speed} m/s</span>
            </div>
            <div className="flex justify-between text-white">
              <span className="font-medium">Precipitation:</span>
              <span className="font-light">
                {place.current.precipitation.total} cm
              </span>
            </div>
            <div className="flex justify-between text-white">
              <span className="font-medium">Cloud Cover:</span>
              <span className="font-light">{place.current.cloud_cover} %</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
