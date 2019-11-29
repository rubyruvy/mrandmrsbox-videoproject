let vid = document.getElementById('fm');

window.onload = function() {
  adjustVideoSize();
}

window.onresize = function() {
  adjustVideoSize();
}

function adjustVideoSize() {
  if (window.innerWidth/window.innerHeight >= 16/9) {
    vid.width = window.innerWidth;
    vid.height = window.innerWidth * 9/16;
  } else {
    vid.width = window.innerHeight * 16/9;
    vid.height = window.innerHeight;
  }
}

document.getElementById('fm').addEventListener("ended", toTransition);

function toTransition() {
  window.location.href = ("transition_girl_game.html");
}

vid.addEventListener ("mousemove", changeOrNot)
function changeOrNot() {
  let w = window.innerWidth;
  let x = window.event.clientX;
  if (x < w*0.15) {
    document.body.style.cursor = "url('images/arrow-previous.png'), auto";
  } else if (x > w*0.85) {
    document.body.style.cursor = "url('images/arrow-next.png'), auto";
  } else if (vid.paused) {
    document.body.style.cursor = "url('images/play.png'), auto";
  } else if (vid.paused == false) {
    document.body.style.cursor = "url('images/pause.png'), auto";
  }
}

vid.addEventListener("click", toPrevious)
function toPrevious() {
  let w = window.innerWidth;
  let x = window.event.clientX;
  if (x < w*0.15) {
    window.location.href = ("game-firstchoice.html");
  } else if (x > w*0.85) {
    window.location.href = ("transition_girl_game.html");
  } else if (vid.paused) {
    document.body.style.cursor = "url('images/play.png'), auto";
    vid.play();
  } else if (vid.paused == false) {
    document.body.style.cursor = "url('images/pause.png'), auto";
    vid.pause();
  }
}