// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = '7ac611934e8b4f38d75f3167834669e8';

function getWeatherData(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            // Extract the required weather information from the API response
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;

            // Display the weather information on the web page
            document.getElementById('location').textContent = `Weather in ${location}`;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('description').textContent = `Description: ${description}`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
        })
        .catch((error) => {
            console.log('Error:', error);
        });
}

// Retrieve weather data when the search button is clicked
document.getElementById('searchButton').addEventListener('click', function () {
    const location = document.getElementById('locationInput').value;
    getWeatherData(location);
});

