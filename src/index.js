const apikey = "9afdf84304c7b144339cd19b2615627f";
const cityname = document.getElementById("input");
const btn = document.getElementById("btn");
const h = document.getElementById("in");
const refresh = document.getElementById("refresh");
const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=`;
const image = document.getElementById("weather-image");

async function weather(city){
  const response = await fetch(apiurl + city + `&appid=${apikey}` );
  const data = await response.json();
  console.log(data);
  const weather = document.getElementById("city")
  weather.innerText="City : "+data.name ;
  document.getElementById("temp").innerText ="Temperature : " +(-(273-Math.round(data.main.temp))) + "°C";
  document.getElementById("hum").innerText = "Humidity : " +data.main.humidity + "%";
  document.getElementById("weat").innerText = "Weather : "+data.weather[0].description;
  document.getElementById("wind").innerText = "Wind Speed : "+ data.wind.speed + "km/hr";


  
  console.log("Weather Condition:", data.weather[0].main);
  if (data.weather[0].main.toLowerCase() === "mist") {
    image.src = "./images/mist.png";
  } else if (data.weather[0].main.toLowerCase() === "clear") {
    image.src = "./images/clearsky.png";
  } else if (data.weather[0].main.toLowerCase() === "rain") {
    image.src = "./images/rain.png";
  } else if (data.weather[0].main.toLowerCase() === "haze") {
    image.src = "./images/haze.png";
  } else if (data.weather[0].main.toLowerCase() === "clouds") {
    image.src = "./images/cloud.png";
  } else if (data.weather[0].main.toLowerCase() === "snow") {
    image.src = "./images/snow.png";
  } else {
    image.src = "./images/sunny.png"; 
  }

}

btn.addEventListener("click",()=>{
  const city = cityname.value;
  if(city){
    weather(city);
    h.height='500px';
    image.style.visibility="visible";
  }else{
    alert("please enter the correct city!!")
  }

})

refresh.addEventListener("click",()=>{
  const weather = document.getElementById("city")
  weather.innerText = "";
  document.getElementById("temp").innerText = " ";
  document.getElementById("hum").innerText = " ";
  document.getElementById("weat").innerText = " ";
  document.getElementById("wind").innerText = " ";
  cityname.value=" ";
  image.src = ""
  image.style.visibility="hidden";
  h.height="280px";
})  
