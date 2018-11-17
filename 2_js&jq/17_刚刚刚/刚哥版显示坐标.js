window.onload = function(){
	document.onmousemove = function(ev){
		if(document.body.lastElementChild.getAttribute("name")=="pos"){
			document.body.lastElementChild.remove();
		}
		var e = ev || window.event;
		var posX = e.pageX;
		var posY = e.pageY;
		var newDiv = document.createElement("div");
		newDiv.setAttribute("name","pos");
		newDiv.style.position = "absolute";
		newDiv.style.left = posX + "px";
		newDiv.style.top = posY + "px";
		newDiv.innerHTML = "("+posX+","+posY+")";
		document.body.appendChild(newDiv);
 	}
}
