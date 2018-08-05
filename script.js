$(document).ready(function() {

  $(function () {
    $(document).scroll(function () {
      var $nav = $("#header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $("#welcome-sec").height() - 65);
    });
});

  var offset;
  $(".nav-link").click(function() {
    var scrollTo;
    switch($(this).text()) {
      case "the new internet":
        offset = -60;
        scrollTo = "#internet-sec";
        break;
      case "the tech":
        offset = -85;
        scrollTo = "#tech-sec";
        break;
      case "contact":
        scrollTo = "#contact-sec";
        break;
    }
    $('html, body').animate({
        scrollTop: $(scrollTo).offset().top + offset
    }, "slow");
  });

  $(".scroll-div").click(function() {
    offset = -60;
    $('html, body').animate({
        scrollTop: $("#internet-sec").offset().top + offset
    }, "slow");
});
$("#header-img").click(function() {
  $('html, body').animate({
      scrollTop: 0
  }, "slow");
});
});
