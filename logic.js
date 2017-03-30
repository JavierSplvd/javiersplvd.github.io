var tempOpacity = 0;
var animate = null;

function fade(){
	document.getElementById("content").style.opacity = tempOpacity;
	if(tempOpacity < 1){
		tempOpacity += 0.015;
		if(tempOpacity > 1){
			tempOpacity = 1;
		}
		animate = setTimeout(fade,4);
	}
}

fade();
