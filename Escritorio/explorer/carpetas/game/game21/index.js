var canvas = document.getElementById("vt");
var ctx = canvas.getContext("2d");

var frame = 0;					
var AITE_x = 0;					
var AITE_y = 100;			
var AITE_dx = 5;				
var AITE_color = "red";			
var JIBUN_x = 175;			
var JIBUN_y = 400;			
var TAMA_x = -100;		
var TAMA_y = -100;		
var point = 0;					


canvas.onmousemove = mouseMoveListener;
function mouseMoveListener(e){
	var rect = e.target.getBoundingClientRect();	
	JIBUN_x = e.clientX - rect.left;	//canvascanvas
//	JIBUN_y = e.clientY- rect.top;		


	 }



setInterval(anime,50);	

function anime(){	
	frame++;								

	
	ctx.fillStyle = "black";				
	ctx.fillRect(0,0,500,500);		
		


		
	
	ctx.fillStyle = AITE_color;				
	ctx.fillRect(AITE_x-50,AITE_y-10,100,20);		
	ctx.fillRect(AITE_x-50,AITE_y-50,100,20);		
	ctx.fillRect(AITE_x-50,AITE_y-30,20,60);		
	ctx.fillRect(AITE_x-10,AITE_y-30,20,20);		
	ctx.fillRect(AITE_x+30,AITE_y-30,20,60);		
	ctx.fillRect(AITE_x-30,AITE_y+30,20,20);		
	ctx.fillRect(AITE_x+10,AITE_y+30,20,20);		
	ctx.fillRect(AITE_x-70,AITE_y-30,20,20);		
	ctx.fillRect(AITE_x-90,AITE_y-10,20,20);		
	ctx.fillRect(AITE_x+50,AITE_y-30,20,20);		
	ctx.fillRect(AITE_x+70,AITE_y-10,20,20);		
	ctx.fillRect(AITE_x-30,AITE_y-70,20,20);		
	ctx.fillRect(AITE_x+10,AITE_y-70,20,20);		
	AITE_color = "red";

	
	ctx.fillStyle = "green";				
	ctx.fillRect(TAMA_x-10,TAMA_y-10,20,20);		


	
	ctx.fillStyle = "blue";				
	ctx.fillRect(JIBUN_x-50,JIBUN_y-10,100,20);		
	ctx.fillRect(JIBUN_x-20,JIBUN_y-30,40,20);		
	

	
	ctx.fillStyle = "black";				
	ctx.font = "20px 'arial' ";		
	ctx.fillText("MJPLAy" + point,JIBUN_x-30,JIBUN_y-50);		

	
	
	AITE_x = AITE_x + AITE_dx;
	if(AITE_x > 450)	AITE_dx = -1;
	if(AITE_x <  50)	AITE_dx =  1;
	
	
	TAMA_y = TAMA_y - 5;
	


	if ((TAMA_y == AITE_y) && (Math.abs(TAMA_x - AITE_x)<50)){
		point++;
		AITE_color = "pink";
		TAMA_y = -100;
		}
		

}

function shoot(){
	
	TAMA_x = JIBUN_x;
	TAMA_y = JIBUN_y;
	}