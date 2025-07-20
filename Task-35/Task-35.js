<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Card</title>
    <style>
        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            flex-direction: column;
            gap: 20px;
        }
        #city-select {
            padding: 8px 12px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 16px;
        }
        .weather-card {
            background: linear-gradient(135deg, #6dd5ed, #2193b0);
            color: white;
            padding: 25px;
            border-radius: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            width: 300px;
            text-align: center;
        }
        .weather-info {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 15px;
        }
        #weather-icon {
            width: 80px;
            height: 80px;
        }
        #temperature {
            font-size: 3rem;
            font-weight: bold;
            margin: 0;
        }
        #location {
            margin: 0;
            font-size: 1.5rem;
        }
        #description {
            margin-top: 10px;
            font-size: 1.1rem;
            text-transform: capitalize;
        }
    </style>
</head>
<body>

    <select id="city-select" onchange="updateWeather()">
        <option value="Tirupati">Tirupati</option>
        <option value="London">London</option>
        <option value="Tokyo">Tokyo</option>
    </select>

    <div class="weather-card">
        <h2 id="location">Tirupati</h2>
        <div class="weather-info">
            <p id="temperature">31°C</p>
            <img id="weather-icon" src="https://openweathermap.org/img/wn/02d@2x.png" alt="Weather icon">
        </div>
        <p id="description">few clouds</p>
    </div>

    <script>
        const weatherData = {
            "Tirupati": { temp: "31°C", desc: "few clouds", icon: "02d" },
            "London": { temp: "15°C", desc: "light rain", icon: "10d" },
            "Tokyo": { temp: "22°C", desc: "clear sky", icon: "01d" }
        };

        function updateWeather() {
            const city = document.getElementById("city-select").value;
            const data = weatherData[city];

            document.getElementById("location").textContent = city;
            document.getElementById("temperature").textContent = data.temp;
            document.getElementById("description").textContent = data.desc;
            document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
        }
    </script>

</body>
</html>