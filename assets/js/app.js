// ======================================================
// Global Weather Explorer - Main Application Logic
// Author: Jemal Hangela
// Project: Global Weather Explorer (Interactive Frontend Development)
// Last Updated: 06 April 2026
// ======================================================

// ==============================
// API Key
// ==============================
const apiKey = "ad566afaa8777e2f412ad0d93fbd7521";

// ==============================
// DOM Elements
// ==============================

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const errorMessage = document.getElementById("errorMessage");
const weatherResult = document.getElementById("weatherResult");
const forecastContainer = document.getElementById("forecastContainer");

searchBtn.addEventListener("click", searchWeather);

cityInput.addEventListener("keypress", function(e){
if(e.key === "Enter"){
searchWeather();
}
});

// ===== Calendar =====
createCalendar();

function createCalendar(){

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const today = new Date().getDay();
const calendar = document.getElementById("calendar");

calendar.innerHTML = "";

days.forEach((day,index)=>{

const dayElement = document.createElement("div");
dayElement.classList.add("day");

if(index === today){
dayElement.classList.add("today");
}

dayElement.innerText = day;
calendar.appendChild(dayElement);

});

}

// ===== Search =====
function searchWeather(){

const city = cityInput.value.trim();

if(!city){
errorMessage.innerText="Please enter a city name.";
return;
}

errorMessage.innerText="";
getWeather(city);
getForecast(city);

}

// ===== Current Weather =====
function getWeather(city){

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
.then(res => res.json())
.then(data => {

if(data.cod !== 200){
weatherResult.innerHTML="City not found.";
return;
}

displayWeather(data);

})
.catch(()=>{
weatherResult.innerHTML="Error loading data.";
});

}

// ===== Forecast =====
function getForecast(city){

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
.then(res => res.json())
.then(data => {

if(!data.list){
forecastContainer.innerHTML="No forecast available.";
return;
}

displayForecast(data);

})
.catch(()=>{
forecastContainer.innerHTML="Error loading forecast.";
});

}

// ===== City Image =====
function getCityLogo(city){
return `https://source.unsplash.com/100x100/?${city},city`;
}

// ===== Display Weather =====
function displayWeather(data){

const icon = data.weather[0].icon;
const logo = getCityLogo(data.name);

weatherResult.innerHTML = ` <img class="city-logo" src="${logo}">

<h3>${data.name}</h3>
<img src="https://openweathermap.org/img/wn/${icon}@2x.png">

<p>🌡 ${data.main.temp} °C</p>
<p>☁ ${data.weather[0].description}</p>
<p>💧 ${data.main.humidity}%</p>
<p>🌬 ${data.wind.speed} m/s</p>
`;

}

// ===== Display Forecast =====
function displayForecast(data){

forecastContainer.innerHTML="";

for(let i=0;i<5;i++){

const forecast = data.list[i*8];
const icon = forecast.weather[0].icon;

forecastContainer.innerHTML += `

<div class="forecast-card">
<p>${new Date(forecast.dt_txt).toLocaleDateString()}</p>
<img src="https://openweathermap.org/img/wn/${icon}.png">
<p>${forecast.main.temp} °C</p>
<p>${forecast.weather[0].main}</p>
</div>
`;

}

}
