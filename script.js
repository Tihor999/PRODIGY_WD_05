document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    const citySelect = document.getElementById('city-select');
    const weatherResult = document.getElementById('weather-result');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const weather = document.getElementById('weather');
    const humidity = document.getElementById('humidity');

    const weatherData = {
        'Delhi': {
            temp: '35°C',
            weather: 'Sunny',
            humidity: '30%'
        },
        'Mumbai': {
            temp: '28°C',
            weather: 'Rainy',
            humidity: '85%'
        },
        'Bangalore': {
            temp: '25°C',
            weather: 'Cloudy',
            humidity: '70%'
        },
        'Chennai': {
            temp: '32°C',
            weather: 'Hot',
            humidity: '60%'
        },
        'Kolkata': {
            temp: '30°C',
            weather: 'Humid',
            humidity: '80%'
        },
        'Hyderabad': {
            temp: '33°C',
            weather: 'Dry',
            humidity: '40%'
        }
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const city = citySelect.value;

        if (weatherData[city]) {
            cityName.textContent = `Weather in ${city}`;
            temperature.textContent = `Temperature: ${weatherData[city].temp}`;
            weather.textContent = `Weather: ${weatherData[city].weather}`;
            humidity.textContent = `Humidity: ${weatherData[city].humidity}`;
            weatherResult.style.display = 'block';
        } else {
            alert('City not found. Please try again.');
            weatherResult.style.display = 'none';
        }
    });
});
