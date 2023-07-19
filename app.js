// function showDiv(){
const shareBtn = document.getElementById("share-btn")
const mobileShare = document.getElementById("mobileShareBtn");
console.log(mobileShare);

    
 function showDiv(){
  if(document.querySelector(".tooltip").style.visibility= "hidden"){
   document.querySelector(".tooltip").style.visibility= "visible"
   shareBtn.style.background= "hsl(217, 19%, 35%)";
   shareBtn.src= "images/icon-sharewhite.svg";
  }
 }

 function showMobile(){
document.querySelector(".container").style.display = "none";
document.querySelector(".second").style.display ="block"

}
 