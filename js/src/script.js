$(function(){	
	
	$(".point").on('click', function(){
		$(".point").css("background", "url(img/point1.jpg)");
        $(this).css("background", "url(img/point2.jpg)");
        }); 

    $(".services__block").hover(
        function(){
        $(".services__p", this).css("color", "#f4b60d");
		$(".block__shadow", this).fadeIn(250).css("display", "block");
        },
        function(){
        $(".services__p", this).css("color", "#fff");
		$(".block__shadow", this).fadeOut(250).css("display", "block");
        });		
	
})();



