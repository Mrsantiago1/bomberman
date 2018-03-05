var bomber = document.getElementById("bomber");

var bomberLeft = 0;

var bomberTop = 0;

//arrow keys are only triggered by onkeydown, not onkeypress


    // left = 37
    // up = 38
    // right = 39
    // down = 40
//*(e)means event function
function movement(e) {
  if (e.keyCode == 39) {
    bomberLeft+= 5;
    bomber.style.left = bomberLeft + 'px';
}
  if (e.keyCode == 37) {
    bomberLeft+= -5;
    bomber.style.left = bomberLeft + 'px';
}
  if (e.keyCode == 38) {
    bomberTop+= 5;
    bomber.style.top = bomberTop + 'px';
}
  if (e.keyCode == 40) {
    bomberTop+= -5;
    bomber.style.top = bomberTop + 'px';
  }
}
document.onkeydown=movement;
