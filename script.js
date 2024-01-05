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

     
     
});