//-------------------------------------------------
// Canvas methods
//-------------------------------------------------
(function(window){
	window.CanvasLoader = {};
   
  CanvasLoader.clickFunction = function(){}

  CanvasLoader.setClickFunction = function(f){
	  CanvasLoader.clickFunction = f;
  }

	CanvasLoader.getPosition = function(event) {
		var x = new Number();
		var y = new Number();
		var canvas = document.getElementById("gameSpace");

		if (event.x != undefined && event.y != undefined) {
	  	x = event.x;
	  	y = event.y;
		} else {// Firefox method to get the position	
	  	x = event.clientX + document.body.scrollLeft +
	      	document.documentElement.scrollLeft;
	  	y = event.clientY + document.body.scrollTop +
	      	document.documentElement.scrollTop;
		}
		x -= canvas.offsetLeft;
		y -= canvas.offsetTop;
		CanvasLoader.clickFunction(x, y);
	}

	CanvasLoader.clearCanvas = function () {
		ctx.fillStyle = "#666666";
		ctx.fillRect (0, 0, 960, 640);  
	}

	CanvasLoader.init = function(){
	 var canvas = document.getElementById("gameSpace");
	 canvas.addEventListener("mousedown", CanvasLoader.getPosition, false);
	}

	document.addEventListener("DOMContentLoaded", CanvasLoader.init, false);

})(window);

