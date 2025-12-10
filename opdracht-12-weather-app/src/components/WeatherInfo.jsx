const WeatherInfo = ({ city, icon, temp, feelslike, humidity, windSpeed }) => {
  return (
    <div className="weather-info">
      <section>
        <h1>{city}</h1>
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="Weather icon"
        />
      </section>
      <h2> Temperature: {Math.floor(temp)}°C</h2>
      <h2> Feels Like: {Math.floor(feelslike)}°C</h2>
      <h2> Humidity: {Math.floor(humidity)}%</h2>
      <h2> Wind Speed: {Math.floor(windSpeed)}m/s</h2>
    </div>
  );
};

export default WeatherInfo;
