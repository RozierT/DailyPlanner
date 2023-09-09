// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
const localSettings = {};
dayjs.locale(localSettings);
const today = dayjs();

$(function(){
  var currentHour = dayjs().format('H');

  //function to add/toggle block classes base on current hour
  function timeBlockFormat(){
    $('.time-block').each(function(){
      const timeBlock = parseInt(this.id);
      $(this).toggleClass('past', timeBlock < currentHour);
      $(this).toggleClass('present', timeBlock == currentHour);
      $(this).toggleClass('future', timeBlock > currentHour);
    });
  }
  //function to save enterred notes into the local storage
  function saveToLocal (){
    $('.saveBtn').on('click', function(){
        const key = $(this).parent().attr('id');
        const value = $(this).siblings('.description').val();
        localStorage.setItem(key, value);
       // console.log("value is "+value);
       // console.log(key +" was changed");
    });

      //function to pull from local storage so saved items persist on refresh

    $('.time-block').each(function(){
      const key = $(this).attr('id');
      const value = localStorage.getItem(key);
      $(this).children('.description').val(value);
    });
}

  //call the primary funcitons
  timeBlockFormat();
  saveToLocal();
})

//update header with current date
var currentDayEl = document.getElementById('currentDay');
currentDayEl.innerHTML= today.format('dddd, MMMM D YYYY');