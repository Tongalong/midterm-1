var fb, fb1;



window.onload = function(){
	fb = document.getElementById("fb");
	fb1 = document.getElementById("fb1");
	TweenMax.to(fb, 1, {css:{scaleX:8, scaleY:8, rotation:-90, backgroundColor:"#FF0000"}, color:'#c78700', delay:1,ease:"easeOutElastic"});
	TweenMax.to(fb1, 2, {css:{scaleX:8, scaleY:8, rotation:-180, backgroundColor:"#FF0000", left:'200px', top:'200px'}, color:'#c78700', delay:3,ease:"easeOutElastic"});
	// TweenMax.fromTo(fb, 1.5, {width:0, height:0}, {width:100, height:200});

}


