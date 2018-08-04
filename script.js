$(document).ready(function() {
  $(".scroll-text").click(function() {
    var offset = 20;
    $('html, body').animate({
        scrollTop: $("#internet-sec").offset().top + offset
    }, 500);
});
});
