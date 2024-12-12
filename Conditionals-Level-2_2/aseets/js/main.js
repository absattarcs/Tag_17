function checkAirQuality() {
            const aqi = document.getElementById('aqiSlider').value;
            const result = document.getElementById('result');

            let healthConcern;
            let healthEffect;

            if (aqi <= 50) {
                healthConcern = "Level of health concern: Good";
                healthEffect = "Level of health effect: Little or no risk";
                document.body.style.backgroundColor = "green";
            } else if (aqi > 50 && aqi <= 100) {
                healthConcern = "Level of health concern: Moderate";
                healthEffect = "Level of health effect: Acceptable quality";
                document.body.style.backgroundColor = "yellow";
            } else if (aqi > 100 && aqi <= 150) {
                healthConcern = "Level of health concern: Unhealthy for sensitive groups";
                healthEffect = "Level of health effect: General publics not likely affected";
                document.body.style.backgroundColor = "red";
            }

            result.innerHTML = `${healthConcern}<br>${healthEffect}`;
        }