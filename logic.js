var tempOpacity = 0;
var padding = 0;
var animate = null;

function fade(){
	document.getElementById("content").style.opacity = tempOpacity;
	document.getElementById("content").style.paddingTop = padding+"%";
	if(tempOpacity < 1){
		tempOpacity += 0.015;
		padding += 0.03;
		if(tempOpacity > 1){
			tempOpacity = 1;
		}
		animate = setTimeout(fade,4);
	}
}

fade();
