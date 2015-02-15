//init
$(document).ready(function () {
  'use strict';
  showTitle();
  showButton();
  bindEvent();
});

function showTitle() {
  setTimeout(function () {
    $('#ttbanner').css('top', '50px');
    $('#ttbanner').addClass('bounceInDown');
    $('#ttbanner').addClass('animated');
    bindDom();
  }, 2000)
}

function showButton() {
  setTimeout(function () {
    $('#playBtn').show();
    $('#playBtn').addClass('zoomOutExtIn');
    $('#playBtn').addClass('animated');
  }, 5000);
}

function showTransLine() {
  $('#transline').show();
  $('#transline').removeClass('fadeOutLeft');
  $('#transline').removeClass('animated');
  $('#transline').addClass('fadeInLeft');
  $('#transline').addClass('animated');
}

function bindEvent() {
  $('#playBtn').bind('click', function () {
    $('#playBtn').removeClass('zoomOutExtIn');
    $('#playBtn').removeClass('animated');
    $('#playBtn').fadeOut();
    $('#ttbanner').removeClass('bounceInDown');
    $('#ttbanner').removeClass('animated');
    $('#ttbanner').addClass('bounceOutUp');
    $('#ttbanner').addClass('animated');
    $('#playBtn').show();
    setTimeout(function () {
      $('#ttbanner').css('top', '-60px');
      $('#ttbanner').removeClass('bounceOutUp');
      $('#ttbanner').removeClass('animated');
      showTransLine();
    }, 2000)
  });
}

function bindDom(){
  $(document).bind('click', function () {
    if ($('#transline').css('display') === 'block') {
      $('#transline').removeClass('fadeInLeft');
      $('#transline').removeClass('animated');
      $('#transline').addClass('fadeOutLeft');
      $('#transline').addClass('animated');
      setTimeout(function () {
        $(document).unbind('click');
        $('#transline').hide();
        showTitle();
        showButton();
      }, 2000)
    }
  });
}