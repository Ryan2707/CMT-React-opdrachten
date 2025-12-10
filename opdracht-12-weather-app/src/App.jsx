import "./App.css";
import { useState, useEffect } from "react";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("");
  const [inputCity, setInputCity] = useState("");

  const apiKey = "20703b7c57f2ab5a196a02b52c09469b";

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const weatherData = await response.json();
        setWeather(weatherData);
        console.log(weatherData);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center gap-6">
      <div className="flex flex-row gap-3">
        <input
          type="text"
          placeholder="City"
          className="border px-4 py-2 rounded-lg"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={() => {
            setCity(inputCity);
            setInputCity(""); // clear field
          }}
        >
          Search
        </button>
      </div>

      {weather ? (
        <WeatherInfo
          city={weather.name}
          icon={weather.weather[0].icon}
          temp={weather.main.temp}
          feelslike={weather.main.feels_like}
          humidity={weather.main.humidity}
          windSpeed={weather.wind.speed}
        />
      ) : (
        <p>Het weer is aan het laden...</p>
      )}
    </div>
  );
}

export default App;
