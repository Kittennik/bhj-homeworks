const timer = document.getElementById("timer");

let addTimer = setInterval(() => {
  if (timer.textContent == 0) {
    alert("Вы победили в конкурсе"); 
  } 
  else {
    timer.textContent -= 1;
  }
}, 1000);