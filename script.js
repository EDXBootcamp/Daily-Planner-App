$(document).ready(function () {
     // Use dayjs to get the current date
     const currentDate = dayjs().format("dddd, MMMM D, YYYY");
     // Display the current date in the header
     $("#currentDay").text(currentDate);
     
     //Adding Clock To Header
     setInterval(function(){
        const currentTime = dayjs().format("hh:mm:ss a");
        $("#currentTime").text(currentTime);
     },1000);


     // Set the working hours range 
    const startHour = 9; // 9 AM
    const endHour = 17; // 5 PM

    // Loop to create time blocks
    for (let hour = startHour; hour <= endHour; hour++) {
      // Create a row for each hour
      var $row = $("<div>").addClass("row time-block");
      $(".container").append($row);

      // Display hour label
      var $hour = $("<div>")
        .addClass("col-md-1 hour")
        .text(dayjs().hour(hour).format("hA"));
      $row.append($hour);

      // Create textarea for user input
      var $description = $("<textarea>").addClass("col-md-10 description");
      $row.append($description);

      // Create save button
      var $saveBtn = $("<button>")
        .addClass("col-md-1 saveBtn")
        .html('<i class="fas fa-save"></i>');
      $row.append($saveBtn);
    }


     // Get the current hour
     var currentHour = dayjs().hour();

     // Loop through time blocks to apply color coding for past, present and future
    $(".time-block").each(function () {
       var blockHour = parseInt($(this).find(".hour").text());
 
       if (blockHour < currentHour) {
         $(this).addClass("past");
       } else if (blockHour === currentHour) {
         $(this).addClass("present");
       } else {
         $(this).addClass("future");
       }
    });

    // Event listener for save button clicks
    $(".saveBtn").on("click", function () {
        // Get the user input from the textarea
        var eventDescription = $(this).siblings(".description").val();
  
        // Get the hour of the time block
        var eventHour = parseInt($(this).siblings(".hour").text());
  
        // Save the event to local storage
        localStorage.setItem("event_" + eventHour, eventDescription);
    });


    // Load events from local storage
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).find(".hour").text());
  
        // Retrieve the event from local storage
        var savedEvent = localStorage.getItem("event_" + blockHour);
  
        // Display the saved event in the textarea
        if (savedEvent) {
          $(this).find(".description").val(savedEvent);
        }
    });


     
     
});