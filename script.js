const apiKey = '2ea3db1ae4884a5b35e26224dba1065b';

  function getWeather() {
    const city = document.getElementById('cityInput').value;
    if(!city) return alert('Please enter a city name');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(res => {
        if(!res.ok) throw new Error('City not found');
        return res.json();
      })
      .then(data => {
        document.getElementById('city').textContent = data.name + ', ' + data.sys.country;
        document.getElementById('temp').textContent = Math.round(data.main.temp) + '°C';
        document.getElementById('desc').textContent = data.weather[0].description;
        document.getElementById('humidity').textContent = 'Humidity: ' + data.main.humidity + '%';
        document.getElementById('wind').textContent = 'Wind: ' + data.wind.speed + ' m/s';
        document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      })
      .catch(err => {
        alert(err.message);
      });
  }
