<!-- ======================================================
Global Weather Explorer - Professional README Documentation
Author: Jemal Hangela
Project 2: Interactive Frontend Development
Last Updated: April 2026
====================================================== -->

#  Global Weather Explorer

##  Overview

Global Weather Explorer is an interactive front-end web application that allows users to search for real-time weather information for cities around the world.

The application integrates with the OpenWeather API to display current weather conditions along with a five-day forecast in a visually engaging and responsive layout. It demonstrates key front-end development skills including API integration, DOM manipulation, responsive design, and user interaction using HTML, CSS, and JavaScript.

===
## User Stories
### First Time Visitor Goals
As a first-time visitor, I want to immediately understand what the website does so that I can use it easily.
As a first-time visitor, I want a simple search box so that I can quickly find weather information.
As a first-time visitor, I want the website to look professional and modern so that I trust the information shown.

### Returning Visitor Goals
As a returning visitor, I want to quickly search different cities so that I can compare weather conditions.
As a returning visitor, I want the website to load quickly so that I can save time.
As a returning visitor, I want the website to work on mobile and desktop devices.

### Frequent User Goals
As a frequent user, I want reliable weather updates so that I can plan travel or daily activities.
As a frequent user, I want a forecast feature so that I can prepare for the coming days.
As a frequent user, I want a clean and enjoyable experience each time I visit.

===
## Wireframes
### Desktop Layout
----------------------------------------------------
| Header: Logo + Title + Description               |
| Days of Week Calendar                            |
----------------------------------------------------
| Search Input Field | Search Button              |
----------------------------------------------------
| Current Weather Card                            |
| City Image | Temp | Weather | Humidity | Wind   |
----------------------------------------------------
| 5 Day Forecast Cards                            |
| Day1 | Day2 | Day3 | Day4 | Day5               |
----------------------------------------------------
| Footer                                          |
----------------------------------------------------

### Tablet Layout
-----------------------------------------
| Header                                |
| Calendar                              |
-----------------------------------------
| Search Input                          |
| Search Button                         |
-----------------------------------------
| Current Weather                       |
-----------------------------------------
| Forecast Cards (2 per row)            |
-----------------------------------------
| Footer                                |
-----------------------------------------

### Mobile Layout
-------------------------
| Header               |
| Calendar             |
-------------------------
| Search Input         |
| Search Button        |
-------------------------
| Weather Card         |
-------------------------
| Forecast Cards       |
| stacked vertically   |
-------------------------
| Footer               |
-------------------------
## Design & Wireframes image
<img width="602" height="903" alt="Design   Wireframes (2)" src="https://github.com/user-attachments/assets/626519b1-dfcd-428f-801a-cfe6c07cba1f" />

===
## Strategy Plane
The main goal of the website is to provide users with fast, clear, and accurate weather information for cities worldwide through a simple interactive interface.

## Scope Plane
Features included:
1. City search functionality
2. Current weather display
3. Five-day forecast
4. Weekly calendar
5. Dynamic city image
6. Responsive design
7. Error handling
===
## Structure Plane
The website structure is organised into:
- Header section
- Search section
- Current weather section
- Forecast section
- Footer section

## Skeleton Plane
The layout prioritises:
* Clear navigation flow
* Easy-to-find search function
* Visible weather results
* Consistent spacing and alignment
===
## Surface Plane
Design choices include:
- Blue gradient background representing sky/weather
- White cards for readability
- Colourful calendar with highlighted current day
- Hover effects for interactivity
- Responsive modern styling

## Features

1. * **City Weather Search**
  Users can search for any city and instantly view current weather conditions.

2. * **Five-Day Forecast**
  Displays a 5-day forecast including temperature and weather conditions.

3. * **Weekly Calendar**
  A visual calendar showing all days of the week with the current day highlighted.

4. * **Dynamic City Images**
  Each searched city displays a live image to enhance visual appeal.

5. * **Weather Icons**
Icons represent weather conditions such as clouds, rain, and sunshine.

6. * **Responsive Design**
Fully responsive layout for mobile, tablet, and desktop devices.

7. * **Error Handling**
Displays user-friendly messages for invalid inputs or API errors.
8. API integration
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

###  Live Project Demo

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
The application connects to the OpenWeather API using JavaScript fetch() requests.
When a user enters a city name and clicks the search button:
1. A request is sent to the API with the city name.
2. The API returns live weather data in JSON format.
3. JavaScript reads the response.
4. The page updates automatically without reloading.

## Data Retrieved from API
- Current temperature
- Weather condition
- Humidity level
- Wind speed
- 5-day forecast data
- Weather icons
This integration allows the website to provide real-time and accurate weather information for users worldwide.
===

##  Testing
Testing was carried out throughout development to ensure the website worked correctly across different devices and scenarios.
### Functional Testing
- Entered valid city names such as London, Paris, and Dubai
- Confirmed weather data displayed correctly
- Confirmed five-day forecast loaded successfully
### Validation Testing
* Tested empty input field
* Tested invalid city names
* Confirmed clear error messages appeared
### Responsive Testing
The website was tested on:
1. Mobile devices
2. Tablets
3. Desktop screens
The layout adjusted correctly on all screen sizes.
### Browser Testing
The project was tested on:
- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Performance Testing
- Search results loaded quickly
- Buttons responded correctly
- Dynamic content updated without page refresh
### See full testing details in:
testing/testing.md

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
* Dark mode
* Interactive map
* Loading animation

==
## Conclusion
Global Weather Explorer successfully delivers a modern and interactive weather application that provides users with fast access to real-time weather data from cities around the world. The project demonstrates practical front-end development skills through the use of HTML, CSS, JavaScript, API integration, responsive design, and user-focused functionality.
The application offers a clear and engaging user experience while meeting the objectives of the Interactive Frontend Development project. It also provides a strong foundation for future enhancements such as saved favourites, advanced forecasting tools, and additional user customisation features.

===

## Author
**Jemal Hangela**
Level 5 Diploma in Web Application Development

This project was developed as part of an Interactive Frontend Development milestone project.
