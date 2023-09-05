// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
const localSettings = {};
dayjs.locale(localSettings);
const today = dayjs();

$(function(){
  var currentHour = dayjs().format('H');
  console.log(currentHour);

  function timeBlockFormat(){
    $('.time-block').each(function(){
      const timeBlock = parseInt(this.id);
      $(this).toggleClass('past', timeBlock < currentHour);
      $(this).toggleClass('present', timeBlock === currentHour);
      $(this).toggleClass('future', timeBlock > currentHour);
    });
  }

  timeBlockFormat();
})




//update header with current date
var currentDayEl = document.getElementById('currentDay');
currentDayEl.innerHTML= today.format('dddd, MMMM D YYYY');