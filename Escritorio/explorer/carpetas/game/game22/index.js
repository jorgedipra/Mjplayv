var LEFT = 0;
var RIGHT = 1;
var UP = 2;
var DOWN = 3;

var START_RUPEE_NUM = 10;
var SEC = 30;            
var ALL_TIME = 16 * SEC; 
var CREATE_INTERVAL = 40;

enchant();
window.onload = function() {
    
    var game = new Game(320, 320);
    game.fps = 16;
    game.score = 0;
    game.rupeeNum = START_RUPEE_NUM;
    var label;
    var man;
    
    game.preload('chara0.gif',
        'map0.gif',
        'icon0.gif'
		  );

    
    game.onload = function() {
        
        var bg = new Sprite(320, 320);
        bg.backgroundColor = "rgb(0, 200, 255)";
        game.rootScene.addChild(bg);
	
       
        var pad = new Pad();
        pad.x   = 0;
        pad.y   = 220;
        game.rootScene.addChild(pad);
        
	
	Sound.load('se1.wav').play();
	
      
        label = new Label("");
        game.rootScene.addChild(label);

        man = new Sprite(32, 32);
        man.image  = game.assets['chara0.gif'];
        man.x      = 160 - 16;
        man.y      = 160 - 16;
	man.dir    = DOWN;
        man.anim   = [ 9, 10, 11, 10,  
		       18, 19, 20, 19,	
		       27, 28, 29, 28,	
		        0,  1,  2,  1];	
        man.frame  = 10;
        game.rootScene.addChild(man);
        
	
	for (var k = 0; k < START_RUPEE_NUM; k++) game.addrupee();
	
	
	game.addRareRupee();
	
      
        man.tick = 0;
        man.addEventListener(Event.ENTER_FRAME, function() {
            
            if (game.input.left)  {
                man.x -= 3;
                man.scaleX = 1;
		man.dir = LEFT;
            }
          
            else if (game.input.right) {
                man.x += 3;
                man.scaleX =  1;
		man.dir = RIGHT;
            }
	  
            if (game.input.up)  {
                man.y -= 3;
                man.scaleY = 1;
		man.dir = UP;
            }
         
            else if (game.input.down) {
                man.y += 3;
                man.scaleY =  1;
		man.dir = DOWN;
            }
            
            
            man.tick++;
	    
            //if (!game.input.left && !game.input.right && !game.input.up && !game.input.down) {
               // man.frame = man.anim[0];        
	   
            if (game.input.left || game.input.right || game.input.up || game.input.down){
                man.frame = man.anim[man.dir * 4 + (man.tick % 4)];  
		
            } 
        });
    };
    
   
    game.addrupee = function() {
        
        var rupee = new Sprite(16, 16);
        rupee.image = game.assets['icon0.gif'];
	game.rupeeNum++;
        rupee.x = rand(15) * 20;
        rupee.y = rand(15) * 20;
        rupee.frame = 65;

        game.rootScene.addChild(rupee);
      
        rupee.addEventListener(Event.ENTER_FRAME, function() {
            //rupee.y += rupee.speed;
           
            if (man.within(rupee, 16)) {
		game.rootScene.removeChild(this);
                game.score += 30;

               
		Sound.load('se2.wav').play();
		//sound.stop();
            } 
        });
    };
    
    game.addRareRupee = function() {
       
        var rareRupee = new Sprite(16, 16);
        rareRupee.image = game.assets['icon0.gif'];
	game.rupeeNum++;
        rareRupee.x = rand(14) * 20 + 20;
        rareRupee.y = rand(14) * 20 + 20;
        rareRupee.frame = 66;

        game.rootScene.addChild(rareRupee);
        
       
        rareRupee.addEventListener(Event.ENTER_FRAME, function() {
            //rupee.y += rupee.speed;
            
            if (man.within(rareRupee, 16)) {
		game.rootScene.removeChild(this);
                game.score += 150;
 		Sound.load('se6.wav').play();
            } 
        });
    };
   
    game.tick = ALL_TIME;
    game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
        game.tick--;
	if (game.tick === 0) {
           
	    enchant.Sound.load('se4.wav').play();
            game.end(game.score, "Su puntuación es" + game.score );
	}  else if (game.tick > 0) {
            
             if (game.rupeeNum % 8 === 0) {
	  	game.addRareRupee();	
            } else if ((game.tick % CREATE_INTERVAL) === 0) {
                game.addrupee();
            } 
            label.text = "Tiempo restante: " + Math.floor(game.tick / 16)  + 
                "<br />Puntuación: " + game.score + "rupia";
	}
    });
	
    //ゲームの開始
    game.start();
};

//乱数の生成
function rand(num){
    return Math.floor(Math.random() * num);
}