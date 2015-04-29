$(document).ready (function () {
 $(window).scroll (function () {
    var sT = $(this).scrollTop();
        if (sT >= 20) {
            $('.butImNotAWrapper').addClass('cambio')
        }else {
            $('.butImNotAWrapper').removeClass('cambio')
        }
  })
})