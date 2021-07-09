"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Zach B.
   Date:  7/8/21

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

/* Set the date displayed in the calendar */
let thisDay = new Date("August 24, 2018");

/* Write the calendar to the element with the id "calendar" */
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

/* Function to generate the calendar table */
function createCalendar(calDate) {
   let calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML +="</table>";
   return calendarHTML;
}

/* Function to write the calendar caption */
function calCaption(calDate) {
   // monthName array contains the list of month names
   let monthName = ["January", "Febuary", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

   // Determine the current month
   let thisMonth = calDate.getMonth();

   // Determine the curtrent year
   let thisYear = calDate.getFullYear();

   // Write the caption
   return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

/* Function to write a table row of weekday abbreviations */
function calWeekdayRow() {
    // Array of weekday abbreviations
    let dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let rowHTML = "<tr>";

    // Loop through the dayNAme array
    for(let i = 0; i < dayName.length; i++) {
        rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
    }
    rowHTML += "</tr>";
    return rowHTML;
}

/* Function to calculate the number of days in the month */
function daysInMonth(calDate) {
	// Array of days in each month
	let dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	// Extract the four digit year and month value
	let thisYear = calDate.getFullYear();
	let thisMonth = calDate.getMonth();

	// Revise the days in Febuary for leap years
	if (thisYear % 4 === 0) {
		if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
			dayCount[1] = 29;
		}
	}

	// Return the number of days for the current month
	return dayCount[thisMonth];	
}
