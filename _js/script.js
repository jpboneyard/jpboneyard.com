$(document).ready(function() {

var windowWidth = $(window).width();


//Mobile nav toggling action-action-action
	$(".m-nav-toggle").click(function(){
		console.log("clicked");
			$(".nav-link-mod").toggleClass("visible");
	});

    $(window).bind("resize",function(){
        windowWidth = $(this).width();
        if (windowWidth <760){
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
    if (windowWidth > 770) {
      if (visible) {
        document.getElementsByClassName('site-video')[0].play();
        $(this).prop('loop', true);
        // console.log('visible');
      } else {
        $(this).stop().prop('loop', false);
        // console.log('not visible');
      }
    }
  });


//Anchor Slide
	$("a.anchorLink").anchorAnimate();
});














