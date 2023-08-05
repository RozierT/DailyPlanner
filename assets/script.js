// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.


// $(function () {

    
     var saveBtnEl = $('.saveBtn');
//     var schedule = [

//     ]

   
//     // TODO: Add a listener for click events on the save button. This code should
//     // use the id in the containing time-block as a key to save the user input in
//     // local storage. HINT: What does `this` reference in the click listener
//     // function? How can DOM traversal be used to get the "hour-x" id of the
//     // time-block containing the button that was clicked? How might the id be
//     // useful when saving the description in local storage?
    
    saveBtnEl.on('click', function(event) {
        event.preventDefault();
            console.log("saved");
         //   var userInput = hour9.textarea.textContent("");
         //   console.log(userInput);
    } )
    
//     //
//     // TODO: Add code to apply the past, present, or future class to each time
//     // block by comparing the id to the current hour. HINTS: How can the id
//     // attribute of each time-block be used to conditionally add or remove the
//     // past, present, and future classes? How can Day.js be used to get the
//     // current hour in 24-hour time?
    var currentDayEl = document.getElementById('currentDay');
    var today = dayjs();
    currentDayEl.innerHTML= today.format('dddd, MMMM D YYYY');
    var currentHour = today.format('h a');
    console.log(currentHour);

    // var block = [document.getElementsByClassName('time-block')];
   
    // block.forEach(element => {
    //   //var blockId = element.hour;
    //   console.log(element.idName);
    // });
    var hour9 = document.getElementById('hour-9');
    if (currentHour < 9){
      hour9.classList.add('future');
    } else if (currentHour == 9){
      hour9.classList.add('present');
    } else if (currentHour > 9){
      hour9.classList.add('past');
    } 
    
    var hour5 = document.getElementById('hour-5');
    if (currentHour < 5){
      hour5.classList.add('future');
    } else if (currentHour == 5){
      hour5.classList.add('present');
    } else if (currentHour > 5){
      hour5.classList.add('past');
    } 
    

//     if (element.matches(".box")) {
//     var state = element.getAttribute("data-state");

//     // Use an if statement to conditionally render the number on the card
//     if (state === "hidden") {
//       // If the card is clicked while the state is "hidden", we set .textContent to the number 
//       element.textContent = element.dataset.number;
//       // Using the dataset property, we change the state to visible because the user can now see the number
//       element.dataset.state = "visible";
   
//     } else {
//       // 'Hide' the number by setting .textContent to an empty string
//       element.textContent= "";
//       // Use .setAttribute() method
//       element.setAttribute("data-state", "hidden")
     
//     }  
    
//     //
//     // TODO: Add code to get any user input that was saved in localStorage and set
//     // the values of the corresponding textarea elements. HINT: How can the id
//     // attribute of each time-block be used to do this?
//     //
    var userInput = $(hour9.textContent);
    console.log(userInput);

//     // TODO: Add code to display the current date in the header of the page.

//   };
// })