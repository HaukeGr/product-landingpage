$(document).ready(function() {
  var offset = 20;
  $(".nav-link").click(function() {
    var scrollTo;
    switch($(this).text()) {
      case "the new internet":
        scrollTo = "#internet-sec";
        break;
      case "the tech":
        scrollTo = "#tech-sec";
        break;
      case "contact":
        scrollTo = "#contact-sec";
        break;
    }
    $('html, body').animate({
        scrollTop: $(scrollTo).offset().top + offset
    }, 500);
  });

  $(".scroll-div").click(function() {
    $('html, body').animate({
        scrollTop: $("#internet-sec").offset().top + offset
    }, 500);
});
});
