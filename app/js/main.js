
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

// slider_aboutUs

$(document).ready(function(){
  $(".owl-carousel.aboutUs_carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
  });
});

// slider trainer
$(document).ready(function(){
  $(".owl-carousel.shop_carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    animateOut: "fadeOutUp",
    animateIn: "fadeInDown"
  });
});

$(document).ready(function(){
  $(".owl-carousel.trainer_carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,    
  });
});




// shop buttom hover

$(".shop_buttom").hover(
  function() {
    var target = $(this).parent().children();  
    $(target[0]).css("background-color","#161e5d");
  },
  function() {
    var target = $(this).parent().children();
    $(target[0]).css("background-color","#5b6ceb");
  }
  );








				

 				

		

	





