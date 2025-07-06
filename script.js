const apikey = "9e3a0a3425655c09cff3f9879049a04a";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchval = document.querySelector(".input-text");
let searchbtn = document.querySelector(".search-btn");
let imagec = document.querySelector(".image-change");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".error").style.paddingTop = "50px";
    document.querySelector(".nonebg").style.display = "none";
  } else {
    const data = await response.json();

    console.log(data);

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "<sup style='font-size:23px'>°C</sup>";
    document.querySelector(".cityname").innerHTML =
      "<p style='font-size: 15px ;'>Weather in</p>" + data.name;
    document.querySelector(".humv").innerHTML = data.main.humidity + "%";
    document.querySelector(".windv").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      imagec.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      imagec.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
      imagec.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      imagec.src = "drizzle.png";
    } else if (data.weather[0].main == "Snow") {
      imagec.src = "snow.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".nonebg").style.display = "block";
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchval.value);
});


checkWeather("chennai");
