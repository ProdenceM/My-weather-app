function searchCity() {
  const cityInput = document.getElementById('cityInput').value;
  getWeather(cityInput);
}

function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getWeatherByCoordinates(latitude, longitude);
    });
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}

function getWeather(city) {
  const apiKey = 'd478f69e1b2f5d563653f13f5f91d76';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data.name, data.main.temp);
    })
    .catch((error) => {
      alert('Error fetching weather data. Please try again later.');
      console.error(error);
    });
}

function getWeatherByCoordinates(latitude, longitude) {
  const apiKey = 'd478f69e1b2f5d563653f13f5f91d76';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data.name, data.main.temp);
    })
    .catch((error) => {
      alert('Error fetching weather data. Please try again later.');
      console.error(error);
    });
}

function displayWeather(city, temperature) {
  const weatherCard = document.getElementById('weatherCard');
  const cityNameElement = document.getElementById('cityName');
  const temperatureElement = document.getElementById('temperature');
  //const temperature = Math.round(city.data.main.temp);

  cityNameElement.textContent = `City: ${city}`;
  temperatureElement.textContent = `Temperature: ${temperature}°C`;

  weatherCard.style.display = 'block';
}
