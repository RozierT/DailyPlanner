// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
var today = dayjs();


//create variables for current, past, and future hours
var currentHour = dayjs().format('HH')
console.log(currentHour);

//past hour
var pastHour = today.subtract(1, 'hour');
//console.log(pastHour);

//future hour
var futureHour = today.add(1, 'hour');
//console.log(futureHour);

//declare hour element as variable
var hourEl = $('.hour');
var hourText = hourEl.parent().attr('id');
console.log(hourEl);
console.log(hourText);

for (let index = 0; index < hourEl.length; index++) {
  const element = hourEl[index];
  console.log(hourEl);
  console.log(hourText);
}

//declare text area as a variable
var textArea = $('textarea');


   
//     // TODO: Add a listener for click events on the save button. This code should
//     // use the id in the containing time-block as a key to save the user input in
//     // local storage. HINT: What does `this` reference in the click listener
//     // function? How can DOM traversal be used to get the "hour-x" id of the
//     // time-block containing the button that was clicked? How might the id be
//     // useful when saving the description in local storage?
$('.saveBtn').on("click", function() {
  var textInput = $(this).siblings('.description').val();
  var hourInput = $(this).parent().attr('id');
  localStorage.setItem(hourInput, textInput);
  var savedValue = localStorage.getItem(hourInput);
  console.log(savedValue);
})
    
//     //
//     // TODO: Add code to apply the past, present, or future class to each time
//     // block by comparing the id to the current hour. HINTS: How can the id
//     // attribute of each time-block be used to conditionally add or remove the
//     // past, present, and future classes? How can Day.js be used to get the
//     // current hour in 24-hour time?
if (pastHour < hourText) {
  $('textarea').addClass('past');
} else if (futureHour > hourText) {
  $('textarea').addClass('future')
} else if (currentHour === hourText) {
  $('textarea').addClass('present');
}

    
//     //
//     // TODO: Add code to get any user input that was saved in localStorage and set
//     // the values of the corresponding textarea elements. HINT: How can the id
//     // attribute of each time-block be used to do this?
//     //


//     // TODO: Add code to display the current date in the header of the page.


//update header with current date
var currentDayEl = document.getElementById('currentDay');
currentDayEl.innerHTML= today.format('dddd, MMMM D YYYY');