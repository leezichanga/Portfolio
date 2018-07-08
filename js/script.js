// smooth scrolling
$(document).ready(function() {

  // navbar initially hidden
  $('.navbar').hide();

  // display tooltip on page load
  $('.tooltip').tooltip('show');

  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }

      // navbar fade-in/fade-out
      if (scrollbarLocation > 550) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    });
    
  });
  // Navbar popup
  $(window).on('scroll', function() {
    
  });
  
});
// end of smooth scrolling


// word substitution
var length = $(".scroll-words").length;
var p = 0;
var u = 0;
while(u<10000) {
for(i=0;i<length;i++){
  $( ".scroll-list" ).animate({
    marginTop: "-"+(i*2)+".55em"
  }, 2000 );
  p = i+1;
}

if(p==length){
for(j=p-1;j>=0;j--){
  $( ".scroll-list" ).animate({
    marginTop: "-"+(j*2)+".55em"
  }, 2000 );
}
}
u++;
}

// end of word substitution

// change background color
$(window).on("scroll touchmove", function() {
  if ($(document).scrollTop() >= $("#one").position().top) {
    $('.projects').css('background', $("#one").attr("data-color"));
  };
  if ($(document).scrollTop() > $("#two").position().top) {
    $('.projects').css('background', $("#two").attr("data-color"))
  };
  if ($(document).scrollTop() > $("#three").position().top) {
    $('.projects').css('background', $("#three").attr("data-color"))
  };
});
// end of change background color
