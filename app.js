// function showDiv(){
const shareBtn = document.getElementById("share-btn")

 shareBtn.addEventListener("click",e)     
 function showDiv(){
  if(document.querySelector(".tooltip").style.visibility= "hidden"){
   document.querySelector(".tooltip").style.visibility= "visible"
   shareBtn.style.background= "hsl(217, 19%, 35%)";
   shareBtn.src= "images/icon-sharewhite.svg";
  }
 }