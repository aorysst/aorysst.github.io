$(document).ready(function(){
    $(this).scrollTop(0);
});

$(document).ready(function() {
    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
      var topPos = $(this).scrollTop();
      // if user scrolls down - show scroll to top button
      if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
      } else {
        $(scrollTop).css("opacity", "0");
      }
    }); // scroll END
  
  }); // ready() END