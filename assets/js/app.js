// Global Weather Explorer -JS Main Application Logic
// Author: Jemal Hangela
//Project 2: Global Weather Explorer (Interactive Frontend Development Project)
  // Last Updated:21 March 2026

// API Key for OpenWeather API
const apiKey = "ad566afaa8777e2f412ad0d93fbd7521";

// DOM Elements
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

// Event Listeners
searchBtn.addEventListener("click", searchWeather);

// Allow pressing Enter key to search
cityInput.addEventListener("keypress", function(e){

if(e.key === "Enter"){

searchWeather();

}

});

// Initialise Calendar
createCalendar();


function createCalendar(){

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const today = new Date().getDay();

const calendar = document.getElementById("calendar");

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

// Main function to search weather based on city input

function searchWeather(){

const city = cityInput.value;

if(city === ""){

document.getElementById("errorMessage").innerText="Please enter a city name.";
return;

}

document.getElementById("errorMessage").innerText="";

getWeather(city);
getForecast(city);

}


// Function to fetch current weather data for a given city
function getWeather(city){

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

.then(response => response.json())

.then(data => {

if(data.cod === "404"){

document.getElementById("weatherResult").innerHTML="City not found.";
return;

}

displayWeather(data);

});

}

// Function to get a city logo from Unsplash based on the city name

function getCityLogo(city){

return `https://source.unsplash.com/100x100/?${city},city`;

}


// Function to display current weather data on the page
function displayWeather(data){

const icon = data.weather[0].icon;

const logo = getCityLogo(data.name);

let html = `

<img class="city-logo" src="${logo}">

<h3>${data.name}</h3>

<img src="https://openweathermap.org/img/wn/${icon}@2x.png">

<p>🌡 Temperature: ${data.main.temp} °C</p>

<p>☁ Weather: ${data.weather[0].description}</p>

<p>💧 Humidity: ${data.main.humidity}%</p>

<p>🌬 Wind Speed: ${data.wind.speed} m/s</p>`;

document.getElementById("weatherResult").innerHTML = html;

}

// Function to fetch 5-day weather forecast for a given city

function getForecast(city){

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)

.then(response => response.json())

.then(data => displayForecast(data));

}

// Function to display 5-day weather forecast on the page

function displayForecast(data){

const container = document.getElementById("forecastContainer");

container.innerHTML="";

for(let i=0;i<5;i++){

let forecast = data.list[i*8];

let icon = forecast.weather[0].icon;

let card = `

<div class="forecast-card">

<p>${new Date(forecast.dt_txt).toLocaleDateString()}</p>

<img src="https://openweathermap.org/img/wn/${icon}.png">

<p>${forecast.main.temp} °C</p>

<p>${forecast.weather[0].main}</p>

</div>`;

// Append forecast card to container
container.innerHTML += card;

}

}