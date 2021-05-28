function myMove() {
  var elem = document.getElementById("animate");   
  var posTop = 0;
  var posLeft = 0;
  var id = setInterval(frame, 5);
  function frame() {
	  posTop++;
	  posLeft++;
	  elem.style.top = posTop + "px"; 
	  elem.style.left = posLeft + "px"; 
	  if ((posTop == 350) && (posLeft == 350))
		  clearInterval(id);
  }
}
function motion() {
  var elem = document.getElementById("move");   
  var posTop = 0;
  var posright = 0;
  var id = setInterval(frame, 5);
  function frame() {
	  posTop++;
	  posright++;
	  elem.style.top = posTop + "px"; 
	  elem.style.right = posright + "px"; 
	  if ((posTop == 350) && (posright == 350))
		  clearInterval(id);
  }
}
