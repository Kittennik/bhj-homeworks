var dead = document.getElementById("dead");
var lost = document.getElementById("lost");
var holes = document.getElementsByClassName("hole-game");


function StartGame() {
  dead.textContent = 0; 
  lost.textContent = 0;
}

function divOnClick(event) {
  if (event.target.className.includes("hole_has-mole")) {
    dead.textContent++;
  } 
  else {
    lost.textContent++;
  }
  if (dead.textContent == 10) {
    alert("Вы победили");
    return StartGame();
  }
  if (lost.textContent == 5) {
    alert("Вы проиграли"); 
    return StartGame();
  }
}

holes[0].onclick = divOnClick;