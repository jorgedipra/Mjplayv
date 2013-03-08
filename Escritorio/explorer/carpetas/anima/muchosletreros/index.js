$(function() {
    $('.nb_span').keyup(function(){
	var span = '<span></span>';
	var nb_span = $(this).val();
	   
	$('span').remove();

	for(var i=0; i < nb_span; i++){
	    $('body').append(span);
    	}
    });

    $('.nb_span').keyup();
    AnimateThis();
    setInterval("AnimateThis()", 6000);
});

function AnimateThis() {   
     $('span').each(function(index) {
	var hellos = ['Salut !', 'Hello !', 'Привет !', 'नमस्कार !', '¡Hola !', 'مرحبا !', '您好 ！', 'こんにちは ！', 'Olá !', 'Hallo !'];
	var hello = hellos[Math.floor(Math.random()*hellos.length)];
	 
	var numRand = Math.floor((Math.random()*50)+20);
	var numRandFont = Math.floor((Math.random()*40)+15);
	var numRandRotate = Math.floor((Math.random()*45)+5);
	 
	$(this).hide().html(hello);
	$(this).css({'-moz-transform': 'rotate(' + numRandRotate + 'deg)'});
	$(this).delay(index*250).fadeIn('slow').animate({fontSize : numRandFont + 'px', top : numRand + '%', left : numRand + '%'}, 2500).effect('explode', 500);
     });  
}