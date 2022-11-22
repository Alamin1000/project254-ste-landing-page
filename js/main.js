

(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });


})(jQuery);


// device-size
$(window).on('load resize', function(){
  // device-size
  $('body').append("<div class='device-size-detector' style='height: 100%; width: 100%; position: fixed; top: 0; left: 0; opacity: 0; visibility: hidden; pointer-events: none;'></div>");
  $('body').css({
    '--vh': $('.device-size-detector').outerHeight() + 'px',
    '--vw': $('.device-size-detector').outerWidth() + 'px'
  })
})


$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });


  // preloader
  $("#preloader").fadeOut(500);

})










