$(function () {

  jQuery(document).ready(function ($) {
    $(window).load(function () {
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    });
});

  //wow页面动态效果
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  });
  wow.init();

  //锚点跳转滑动效果  
  $('a[href*=#],area[href*=#]').click(function () {
    console.log(this.pathname)
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this
      .hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({
          scrollTop: targetOffset - 20
        }, 500);
        return false;
      }
    }
  });

  
})
