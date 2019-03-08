$(document).ready(function(){
   
 // Sticky navigation

  $(".js-feature1").waypoint(function(direction){
 	if(direction=="down"){
       $('nav').addClass('sticky');
 	}else{
        $('nav').removeClass('sticky');   
        } 
 	}, {
 		offset:'60px;'
 });


//MOBILE NAVIGATION
$('.js-nav-icon').click(function(){
  var nav1=$(".js-nav-icon i");
  var nav=$('.js-main-nav');
  nav.slideToggle(200);
  if(nav1.hasClass("fa-bars")){
  	nav1.addClass("fa-times");
  	nav1.removeClass("fa-bars");
   }else{
   	 nav1.addClass("fa-bars");
  	nav1.removeClass("fa-times");
   }
});

  //Animation

  $('.js-wp-1').waypoint(function(direction){
  	$('.js-wp-1').addClass('animated fadeIn');
  },{
  	offset:'60%'
  });

 $('.js-wp-2').waypoint(function(direction){
  	$('.js-wp-2').addClass('animated fadeInUp');
  },{
  	offset:'60%'
  });

  $('.js-wp-3').waypoint(function(direction){
  	$('.js-wp-3').addClass('animated pulse');
  },{
  	offset:'60%'
  });

// Scroll on buttons
 $('.js-scroll-bt1').click(function(){
    $('html,body').animate({scrollTop:$('.js-feature1').offset().top},1000);
 });

$('.js-scroll-bt2').click(function(){
    $('html,body').animate({scrollTop:$('.js-feature2').offset().top},1000);
 });

  // Navigation Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

});

// $(".js-feature1").click(function(){
// 	$(this).css('background-color','white');
// });

