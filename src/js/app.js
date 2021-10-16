import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  window.onload = function(){
    setTimeout(loadAfterTime, 3000)
 };
 
 
 function loadAfterTime() { 
 
 
 var getClassOne = document.querySelectorAll( '.card' );
 getClassOne.card.display="none";
 }
});
