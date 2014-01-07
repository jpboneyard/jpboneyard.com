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


//Inview npr sign
$('.hdr-sign').bind('inview', function(event, visible) {
  if (visible) {
    $(this).stop().addClass('swing animated');
  } else {
    $(this).stop().removeClass('swing animated');
  }
});


//Inview Letter Project
$('.letters-mod img').bind('inview', function(event, visible) {
  if (visible) {
    $(this).stop().animate({ opacity: 1 });
  } else {
    
  }
});

//Inview Video
$('.site-video').bind('inview', function(event, visible) {
  if (visible) {
    $(this).stop().document.getElementsByTagName('video')[0].play();
  } else {
    $(this).stop().prop('loop', false);
  }
});


//Anchor Slide
	$("a.anchorLink").anchorAnimate();
});














