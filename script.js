const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "969d5e815emsh2823813d284060fp19132ajsn74dec74c62fa",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      cityName.innerHTML = city;
      console.log(response);
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      humidity2.innerHTML = response.humidity;
      wind_speed2.innerHTML = response.wind_speed;
      temp2.innerHTML = response.temp;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

const shangai = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "969d5e815emsh2823813d284060fp19132ajsn74dec74c62fa",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shangai",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      shangai_cloudpct.innerHTML = response.cloud_pct;
      shangai_temp.innerHTML = response.temp;
      shangai_feelslike.innerHTML = response.feels_like;
      shangai_humidity.innerHTML = response.humidity;
      shangai_min_temp.innerHTML = response.min_temp;
      shangai_max_temp.innerHTML = response.max_temp;
      shangai_wind_speed.innerHTML = response.wind_speed;
      shangai_wind_deg.innerHTML = response.wind_degrees;
      shangai_sunrise.innerHTML = response.sunrise;
      shangai_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

const Boston = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "969d5e815emsh2823813d284060fp19132ajsn74dec74c62fa",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      Boston_cloudpct.innerHTML = response.cloud_pct;
      Boston_temp.innerHTML = response.temp;
      Boston_feelslike.innerHTML = response.feels_like;
      Boston_humidity.innerHTML = response.humidity;
      Boston_min_temp.innerHTML = response.min_temp;
      Boston_max_temp.innerHTML = response.max_temp;
      Boston_wind_speed.innerHTML = response.wind_speed;
      Boston_wind_deg.innerHTML = response.wind_degrees;
      Boston_sunrise.innerHTML = response.sunrise;
      Boston_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

const Lucknow = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "969d5e815emsh2823813d284060fp19132ajsn74dec74c62fa",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      Lucknow_cloudpct.innerHTML = response.cloud_pct;
      Lucknow_temp.innerHTML = response.temp;
      Lucknow_feelslike.innerHTML = response.feels_like;
      Lucknow_humidity.innerHTML = response.humidity;
      Lucknow_min_temp.innerHTML = response.min_temp;
      Lucknow_max_temp.innerHTML = response.max_temp;
      Lucknow_wind_speed.innerHTML = response.wind_speed;
      Lucknow_wind_deg.innerHTML = response.wind_degrees;
      Lucknow_sunrise.innerHTML = response.sunrise;
      Lucknow_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

const Kolkata = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "969d5e815emsh2823813d284060fp19132ajsn74dec74c62fa",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      Kolkata_cloudpct.innerHTML = response.cloud_pct;
      Kolkata_temp.innerHTML = response.temp;
      Kolkata_feelslike.innerHTML = response.feels_like;
      Kolkata_humidity.innerHTML = response.humidity;
      Kolkata_min_temp.innerHTML = response.min_temp;
      Kolkata_max_temp.innerHTML = response.max_temp;
      Kolkata_wind_speed.innerHTML = response.wind_speed;
      Kolkata_wind_deg.innerHTML = response.wind_degrees;
      Kolkata_sunrise.innerHTML = response.sunrise;
      Kolkata_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

shangai();
Boston();
Lucknow();
Kolkata();
