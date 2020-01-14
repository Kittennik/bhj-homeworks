const timer = document.getElementById("timer");

let addTimer = () => {
  if (timer.textContent == 0) {
    alert("Вы победили в конкурсе");
    clearInterval(intervalID);
  } 
  else {
    timer.textContent -= 1;
  }
}

var intervalID = setInterval(addTimer, 1000);