$(document).ready (function () {
 $(window).scroll (function () {
    var sT = $(this).scrollTop();
        if (sT >= 20) {
            $('.navbar-default').addClass('mask')
        }else {
            $('.navbar-default').removeClass('mask')
        }
  })
})

$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".navbar-default").show();
    } else {
        $(".navbar-default").hide();
    }
    this.previousTop = currentTop;
});