$(function () {
    $(window).scroll(function(){
        // add navbar opacity on scroll
        if ($(this).scrollTop() > 100) {
            $(".navbar.navbar-fixed-top").addClass("scroll");
        } else {
            $(".navbar.navbar-fixed-top").removeClass("scroll");
        }

        // global scroll to top button
        if ($(this).scrollTop() > 300) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }        
    });

    // $('#myCarousel').carousel('cycle');

    // scroll back to top btn
    $('.scrolltop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 700);
        return false;
    });
    
    // scroll navigation functionality
    $('.scroller').click(function(){
    	var section = $($(this).data("section"));
    	var top = section.offset().top;
        $("html, body").animate({ scrollTop: top }, 700);
        return false;
    });

    // FAQs
    var $faqs = $("#faq .faq");
    $faqs.click(function () {
        var $answer = $(this).find(".answer");
        $answer.slideToggle('fast');
    });

    if (!$.support.leadingWhitespace) {
        //IE7 and 8 stuff
        $("body").addClass("old-ie");
    }
    OAuth.initialize('aSOjwnUIZ2k-r1gYcA1lix_Fc9s');
});

function getCookie(name) {
  name += '=';
  var parts = document.cookie.split(/;\s*/);
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (part.indexOf(name) == 0)
      return part.substring(name.length)
  }
  return null;
}

$('document').ready(function() {
  var uid = parseInt(getCookie('uid'))
  if (!isNaN(uid) && 0 < uid) {
    $('#login').hide();
  }
  $('#login').on('click', function(e) {
    console.log("got here!");
    e.preventDefault();
    $('#sign-in').modal();
  });
  $('.icon-github').on('click', function(e) {
    e.preventDefault();
    OAuth.popup('github', function(err, result) {
      $('#sign-in .modal-body').css('font-size', '1.3em');
      result.provider = 'github'      
      $.post('/user/oauth', result, function(data) {
        $('#sign-in .modal-body').html(JSON.stringify(data));
      });      
    });
  });
});

