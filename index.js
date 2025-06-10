document.addEventListener('DOMContentLoaded', function () {

    const searchBtn = document.getElementById('search-btn');
    const temp = document.querySelector('.temp');
    const inputCity = document.getElementById('city-input-field');
    const city = document.querySelector('.city');
    const humidity = document.querySelector('.humidity');
    const windSpeed = document.querySelector('.wind');
    const weatherImg = document.querySelector('.weather-icon');

    const apiKey = "760d53909fe97acef0a02e5b995f0837";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

    async function checkWeather() {
        try {
            console.log(inputCity.value);
            const response = await fetch(apiUrl + `&q=${inputCity.value}` + `&appid=${apiKey}`);

            if (response.status == 404) {
                document.querySelector('.error').style.display = "block";
                document.querySelector('.weather').style.display = "none";
            }
            else {
                var data = await response.json();
                document.querySelector('.error').style.display= "none";
                document.querySelector('.weather').style.display = "block";

                temp.textContent = `${data.main.temp}°C`;
                city.textContent = `${data.name}`;
                humidity.textContent = `${data.main.humidity}%`;
                windSpeed.textContent = `${data.wind.speed}Km/h`;
                let weather = `${data.weather[0].main}`;
                switch (weather) {
                    case "Clear":
                        weatherImg.src = "images/clear.png"
                        break;
                    case 'Drizzle':
                        weatherImg.src = "images/drizzle.png"
                        break;
                    case 'Mist':
                        weatherImg.src = "images/mist.png"
                        break;
                    case 'Rain':
                        weatherImg.src = "images/rain.png"
                        break;
                    case 'Clouds':
                        weatherImg.src = "images/clouds.png"
                        break;
                    default:
                        weatherImg.src = "images/snow.png";
                        break;
                }

                console.log(data);
            }


        }
        catch (error) {
            console.log(error);
        }

    }
    searchBtn.addEventListener('click', checkWeather);
});

// {
//     "coord": {
//         "lon": 77.2167,
//         "lat": 28.6667
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 43.94,
//         "feels_like": 40.99,
//         "temp_min": 43.94,
//         "temp_max": 43.94,
//         "pressure": 997,
//         "humidity": 10,
//         "sea_level": 997,
//         "grnd_level": 972
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 5.85,
//         "deg": 292,
//         "gust": 6.49
//     },
//     "clouds": {
//         "all": 0
//     },
//     "dt": 1749548914,
//     "sys": {
//         "country": "IN",
//         "sunrise": 1749513164,
//         "sunset": 1749563316
//     },
//     "timezone": 19800,
//     "id": 1273294,
//     "name": "Delhi",
//     "cod": 200
// }

