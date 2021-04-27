// $(document).ready(function(){
//     $(this).scrollTop(0);
// });

$(document).ready(function() {
    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
      var topPos = $(this).scrollTop();
      // if user scrolls down - show scroll to top button
      if (topPos > 250) {
        $(scrollTop).css("opacity", "1");
      } else {
        $(scrollTop).css("opacity", "0");
      }
    }); // scroll END
  
  }); // ready() END


  // btn
  var btn = document.querySelector('.btn.share');
var actions = document.querySelector('.actions')

btn.addEventListener('click', () => {
	if(actions.classList.contains('active')){
		btn.classList.remove('active')
		actions.classList.remove('active')
	}else{
		btn.classList.add('active')
		actions.classList.add('active')
	}
})