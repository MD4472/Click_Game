var counter = 0;
var lengthOfPlay = 20;
var secondsTimer;
var restartButton = document.getElementById("restartButton");
var imagesArray =   document.getElementsByTagName("img");

function startTimer(){
  secondsTimer = setInterval(myTimer, 1000);
}
document.getElementById("start").addEventListener("click", startTimer);

function myTimer(){
  // alert("Hi");
    if (lengthOfPlay > 0) {
    document.getElementById("timer").innerHTML = lengthOfPlay-=1;
  } else {
    alert("Time is up. Your total clicks equals " + counter + ".");
    clearInterval(secondsTimer);
  }
}

function clickCounter(){
  if (this.getAttribute('data-clickable') === 'true'){
  counter+=1;
    this.setAttribute('data-clickable', 'false');
  }
  document.getElementById("click").innerHTML = counter;
}

for (i = 0; i < imagesArray.length; i++){
  imagesArray[i].addEventListener("click", clickCounter);
}

function restart(){
  window.location.reload();
  // alert("I am here.");
}
restartButton.addEventListener("click", restart);



