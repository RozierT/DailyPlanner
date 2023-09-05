// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
const localSettings = {};
dayjs.locale(localSettings);
const today = dayjs();

$(function(){
  var currentHour = dayjs().format('H');

  function timeBlockFormat(){
    $('.time-block').each(function(){
      const timeBlock = parseInt(this.id);
      $(this).toggleClass('past', timeBlock < currentHour);
      $(this).toggleClass('present', timeBlock === currentHour);
      $(this).toggleClass('future', timeBlock > currentHour);
    });
  }

  function saveToLocal (){
    $('.saveBtn').on('click', function(){
      const key = $(this).parent().attr('id');
      const value = $(this).siblings('.desciption').val();
      localStorage.setItem(key, value);
      console.log("value iz "+value);
    });
  }

  $('.time-block').each(function(){
    const key = $(this).attr('id');
    const value = localStorage.getItem(key);
    $(this).children('.description').val(value);
  });

  timeBlockFormat();
  saveToLocal();
})




//update header with current date
var currentDayEl = document.getElementById('currentDay');
currentDayEl.innerHTML= today.format('dddd, MMMM D YYYY');