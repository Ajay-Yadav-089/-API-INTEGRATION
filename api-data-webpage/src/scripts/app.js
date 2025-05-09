// This file contains the JavaScript code for the webpage. It handles the functionality of the webpage, including any interactions with APIs and dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const apiKey = '12a59f76d0459e9ccc24f8068d81d599'; // Your weather API key
    const dataContainer = document.getElementById('data-container');
    const city = 'London'; // Replace with the city you want to fetch weather data for

    async function fetchData() {
        try {
            const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayData(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            dataContainer.textContent = 'Failed to load weather data.';
        }
    }

    function displayData(data) {
        dataContainer.innerHTML = ''; // Clear previous data

        const weatherInfo = `
            <h3>Weather in ${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

        dataContainer.innerHTML = weatherInfo;
    }

    fetchData();
});