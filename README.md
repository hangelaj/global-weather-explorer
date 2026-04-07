<!-- ======================================================
Global Weather Explorer - Professional README Documentation
Author: Jemal Hangela
Project 2: Interactive Frontend Development
Last Updated: April 2026
====================================================== -->

#  Global Weather Explorer

##  Overview

Global Weather Explorer is an interactive front-end web application that allows users to search for real-time weather information for cities around the world.

The application integrates with the OpenWeather API to display current weather conditions along with a five-day forecast. It demonstrates key front-end development skills including API integration, DOM manipulation, responsive design, and user interaction using HTML, CSS, and JavaScript.

===

## Features

* **City Weather Search**
  Users can search for any city and instantly view current weather conditions.

* **Five-Day Forecast**
  Displays a 5-day forecast including temperature and weather conditions.

* **Weekly Calendar**
  A visual calendar showing all days of the week with the current day highlighted.

* **Dynamic City Images**
  Each searched city displays a live image to enhance visual appeal.

* **Weather Icons**
Icons represent weather conditions such as clouds, rain, and sunshine.

* **Responsive Design**
Fully responsive layout for mobile, tablet, and desktop devices.

* **Error Handling**
Displays user-friendly messages for invalid inputs or API errors.

===

##  Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive design
* **JavaScript (ES6)** – Interactivity and API integration
* **OpenWeather API** – Real-time weather data
* **Unsplash API** – Dynamic city images
* **Git & GitHub** – Version control and deployment
===

##  Project Structure


global-weather-explorer/
│
├── index.html                # Main application page
├── successful.html          # Success/confirmation page
├── README.md                # Project documentation
├── project-report.md        # Project report
│
├── assets/                  # Static assets
│   ├── css/
│   │   └── style.css        # Styling and layout
│   │
│   ├── js/
│   │   └── app.js           # Main JavaScript logic
│   │
│   └── images/              # Optional images
│
├── docs/                    # Project documentation
│   ├── wireframes.html      # Visual wireframes
│   └── wireframes.md        # Wireframe explanation
│
├── testing/                 # Testing documentation
│   └── testing.md


===

## Deployment

This project is deployed using **GitHub Pages**.

###  Live Demo

 https://hangelaj.github.io/global-weather-explorer/

###  GitHub Repository
 https://github.com/hangelaj/global-weather-explorer

===

##  Deployment Steps

1. Push project code to a GitHub repository
2. Go to **Repository Settings**
3. Navigate to **Pages**
4. Select:

   * Branch: `main`
   * Folder: `/ (root)`
5. Click **Save**
6. Wait for the deployment link to be generated

===

##  How to Run the Project Locally

1. Clone the repository:
git clone https://github.com/hangelaj/global-weather-explorer.git
  
2. Open the project folder

3. Open `index.html` in your browser

4. Enter a city name and click **Search**

===

## API Integration

The application uses the **OpenWeather API** to fetch:

* Temperature
* Weather condition
* Humidity
* Wind speed
* 5-day forecast data

Data is retrieved using JavaScript `fetch()` requests and dynamically displayed on the page.

===

##  Testing

Testing was conducted to ensure:

* Correct API responses
* Valid and invalid city handling
* Responsive design across devices
* Proper UI rendering

See full testing details in:

- `testing/testing.md`

===

##  User Experience (UX)

The application is designed to be:

* Simple and intuitive
* Fast and responsive
* Visually engaging
* Easy to navigate

Users can quickly search and view weather data with minimal interaction.

===

##  Future Improvements

* Add interactive map integration
* Save favourite cities (localStorage)
* Temperature unit toggle (°C / °F)
* Add animations and themes

===

## Author

**Jemal Hangela**
Level 5 Diploma in Web Application Development

This project was developed as part of an Interactive Frontend Development milestone project.
