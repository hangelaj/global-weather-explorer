<!-- ======================================================
  Global Weather Explorer Professional testing.md Project Documentation
   Author: Jemal Hangela
   Project 2: Global Weather Explorer (Interactive Frontend Development Project)
   Last Updated:21 March 2026
====================================================== -->

# Testing – Global Weather Explorer

## Introduction

Testing is an important stage of the development process.
The Global Weather Explorer application was tested to ensure that all features work correctly and provide a good user experience.

Testing was carried out manually using different scenarios and inputs.


## Test Environment

Testing was performed using the following tools:

Browser:
Google Chrome

Operating System:
Windows 10

API:OpenWeather API


## Feature Testing

### Page Load

Test:
Load the website.

Expected Result:
The page loads successfully and displays the header, calendar, search section, and forecast section.

Result:Passed


### Calendar Display

Test:
Check the weekly calendar.

Expected Result:
All days from Sunday to Saturday are displayed.

Result:Passed

Test:
Verify that the current day is highlighted.

Expected Result:
The current day appears highlighted in the calendar.

Result:Passed

### City Search

Test:
Enter a valid city name and click the search button.

Example:
London

Expected Result:
The application retrieves weather data and displays it on the page.

Result:Passed

### Enter Key Search

Test:
Press the Enter key after typing a city name.

Expected Result:
Weather data is retrieved without needing to click the search button.

Result:Passed

### Invalid City

Test:
Enter a city that does not exist.

Example:
abcdxyz

Expected Result:
An error message is displayed indicating the city was not found.

Result:Passed

### Weather Data Display

Test:
Search for a city.

Expected Result:
The following information appears:

City name
Temperature
Weather description
Humidity
Wind speed

Result:Passed


### City Logo Image

Test:
Search for different cities.

Expected Result:
A city-related image appears above the weather information.

Result: Passed


### Five Day Forecast

Test:
Search for a city and check the forecast section.

Expected Result:
Five forecast cards appear showing the next five days.

Result:Passed


## Responsive Testing

Test:
Resize the browser window to simulate mobile view.

Expected Result:
The layout adapts and remains readable on smaller screens.

Result:Passed

## Performance Testing

Test:
Search multiple cities quickly.

Expected Result:
The application continues to retrieve weather data correctly.

Result: Passed


## Known Limitations

The following limitations were identified:

City images are retrieved from an external image service and may occasionally show generic city-related images.

The application requires an internet connection to access the weather API.


## Future Testing Improvements

Future testing could include:

Cross-browser testing (Firefox, Safari, Edge)

Automated testing tools

Performance testing for larger datasets

## Author
Level 5 Diploma in Web Application Development project 2
Project developed as part of a front-end web development learning project.

Author: Jemal Hangela