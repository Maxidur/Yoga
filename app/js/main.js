
$(".buttom_menu").click(function(){
   	$(this).toggleClass("active");
  	$(this).toggleClass("close"); 
   	$(".top_menu").fadeToggle(600);
  	$(".list").fadeToggle(0);
  	if($(".buttom_menu").hasClass("active")){
  		$(".list").wrapAll("<nav class='top_menu'></nav>");
  	} else {
  		$(".list").unwrap();
  	}
  });

function listDisplay() {
	if($(window).width() > 814) {
		$(".list").css("display","block");	
	} else {
		$(".list").css("display","none");

	}
};

listDisplay();

$(window).resize(function(){
	listDisplay();
})





				

 				

		

	





