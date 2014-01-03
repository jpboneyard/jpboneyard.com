$(document).ready(function() {

//Mobile nav toggling action-action-action
	$(".m-nav-toggle").click(function(){
		console.log("clicked");
			$(".nav-link-mod").toggleClass("visible");
	});

$(window).bind("resize",function(){
    console.log($(this).width())
    if($(this).width() <760){
    $(".nav-link-mod").removeClass('hidden')
    }
    else{
    $(".nav-link-mod").removeClass('visible')
    }
})

    

	 


//Anchor Slide
	$("a.anchorLink").anchorAnimate();
});














