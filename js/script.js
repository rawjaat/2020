$(function() {


/*-------------------------------------------
Load Page
---------------------------------------------*/
		
	$('body').waitForImages({
		finished: function() {
				Website();
				$('body').jKit();
		},
		waitForAll: true
	});


/*-------------------------------------------
Ajax link page transitions
---------------------------------------------*/

	$("a.ajax-link").live("click", function(){
		$this = $(this);
		var link = $this.attr('href');
		var current_url = $(location).attr('href');	
		
		if( link != current_url && link != '#' ) { 
		$.ajax({
			url:link,
			processData:true, 
			dataType:'html', 
			success:function(data){
				document.title = $(data).filter('title').text(); 
				current_url = link;
        if (typeof history.pushState != 'undefined') history.pushState(data, 'Page', link);
        
          setTimeout(function(){						
          $('#preloader').delay(50).fadeIn(600);
          $('html, body').delay(1000).animate({ scrollTop:  0  },1000);						
					
					setTimeout(function(){
							
            $('#ajax-content').html($(data).filter('#ajax-content').html());
            $('#ajax-sidebar').html($(data).filter('#ajax-sidebar').html());

						$('body').waitForImages({
							finished: function() {
								Website();
								backLoading();
								$('.opacity-nav').delay(50).fadeOut(600);
              },										
              waitForAll: true
						});								
					},1000);
					},0);
			}
		});
    }
    return false;
	});


/*-------------------------------------------
When you click back arrow
---------------------------------------------*/


function backLoading() {  
    $(window).on("popstate", function () {
        $('body').fadeOut('slow',function(){
            location.reload();
        });
        $('body').fadeIn();
    });
}   

/*-------------------------------------------
Load Page - next Open Site
---------------------------------------------*/

function Website() {
		CheckScripts();		
		Masonry();
		$('body').jKit();
		backgroundmenu();
		setTimeout(function(){
			$(".preloader").fadeOut(500);							
		},2000);
		setTimeout(function(){
			$('header').fadeIn();							
		},500);
}


/*-------------------------------------------
Init and check list scripts
---------------------------------------------*/

function CheckScripts() {

  $(document).ready(function(){
    preloaderCheck();
    Typewriting();
    sidebarhero();
  });

}


/*-------------------------------------------
Masonry Check Script
---------------------------------------------*/

function Masonry() {
       var $container = $('.portfolio-grid');
     
       $container.imagesLoaded( function(){
         $container.masonry({
           itemSelector : 'li'
         });
       });
}


/*-------------------------------------------
Multi purpose init Background menu
---------------------------------------------*/

function backgroundmenu() {

  $(document).ready(function(){
     if($("#header-fade").length) {

         $(window).scroll(function(){
            if ($(this).scrollTop() > 10) {
                $('header').fadeOut();
            } else {
                $('header').fadeIn();
            }
        }); 
     }
     
     if($("#header-white").length) {

         $(window).scroll(function(){
            if ($(this).scrollTop() > 10) {
                $('header').css( "background", "white" );
                $('header .logo > a').css( "borderBottom", "0" );

            } else {
                $('header').css( "background", "none" );
            }
        }); 
     }

   
  });

}

/*-------------------------------------------
Typewriting init script
---------------------------------------------*/

function Typewriting() {


$(document).ready(function(){
	setTimeout( function(){
		if($("#site-type").length) {
        $(".typewrite span").typed({
            strings: ["an engineer? ", "a designer? ", "both. "],
            typeSpeed: 80,
            backDelay: 800,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
        });
    }
	}, 3000);
});
}


/*-------------------------------------------
Amazing Fade with scroll Sidebar
---------------------------------------------*/

function sidebarhero() {

  if($("#hero").length) {
    var fadeStart=100,fadeUntil=800,fading = $('#hero');

    $(window).bind('scroll', function(){
        var offset = $(document).scrollTop()
            ,opacity=0
        ;
        if( offset<=fadeStart ){
            opacity=1;
        }else if( offset<=fadeUntil ){
            opacity=1-offset/fadeUntil;
        }
        fading.css('opacity',opacity);
    });
  } 
}


/*-------------------------------------------
Open Check Scription
---------------------------------------------*/

function OpenCheck() {
    setTimeout(function() {
        hidePreloader();
    }, 1000);
}


/*-------------------------------------------
Check Preloader
---------------------------------------------*/

function preloaderCheck() {
    showPreloader();
    $(window).load(function() {
        hidePreloader();
    });
}

/*-------------------------------------------
Functions Show / Hide Preloader
---------------------------------------------*/

function showPreloader() {
  $(".preloader").fadeIn("slow");
}

function hidePreloader() {
  $(".preloader").delay(2000).fadeOut("slow");
}

	
	
/*-------------------------------------------
Functions Show / Hide Preloader
---------------------------------------------*/

var slideIndex1 = 0;
showSlides1();

function showSlides1() {
  var j;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  for (j = 0; j < slides1.length; j++) {
    slides1[j].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
  for (j = 0; j < dots1.length; j++) {
    dots1[j].className = dots1[j].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots1[slideIndex1-1].className += " active";
  setTimeout(showSlides1, 6000); // Change image every X000 seconds
}
	
	
	
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4500); // Change image every X000 seconds
}


})//End