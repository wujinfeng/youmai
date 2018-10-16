
jQuery(window).bind('scroll', function (){
  if (jQuery(window).scrollTop() > 900){
    jQuery('#main-nav').addClass('navbar-fixed-top');
  } else {
    jQuery('#main-nav').removeClass('navbar-fixed-top');
  }
});

jQuery(document).ready(function($) {
  "use strict";
  $('#main-nav .nav').onePageNav({
    currentClass: 'active',
    scrollOffset: 69,
  });
});

$(document).ready(function(){

  //.parallax(xPosition, speedFactor, outerHeight) options:
  //xPosition - Horizontal position of the element
  //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
  //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
  $('#top').parallax("50%", 0.4);
  $('#testimonial').parallax("50%", 0.4);
  $('#download').parallax("50%", 0.4);
})


$(document).ready(function() {
      $(".owl-carousel").owlCarousel({
        autoPlay: 3000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });

    });

jQuery(function( $ ){
          $('#download-app1').localScroll({
            duration:1200
          });
           $('#download-app2').localScroll({
            duration:1000
          });
        });


jQuery('#form').submit(function (event) {
    event.preventDefault();
    var name= $('#name').val();
    var email= $('#email').val();
    var subject= $('#subject').val();
    var message= $('#message').val();
    $.ajax({
        url:'/user/message',
        data:{name:name, email:email, subject:subject, message:message},
        type:'POST',
        dataType:'json',
        success:function (res) {
            console.log(res)
            console.log(typeof res)
            if(res && res.code === 200){
                $('#myModalBody').text(res.msg)
                $('#myModal').modal()
            }else{
                $('#myModalBody').text(res.msg)
                $('#myModal').modal()
            }
        },
        error: function(a, b, c){
            console.log(a, b, c)
        }
    })
});
