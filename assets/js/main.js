/**
 * Created by fajerus on 14.11.2016.
 */


$(function () {
  $('.menu-open').click(function () {
    $('#overlaymenu').css('width', '100%');
  });
  $('.overlay-menu__closebtn').click(function () {
    $('#overlaymenu').css('width', '0%');
  });

  var mainSwiper = new Swiper('.swiper-container-g', {
    simulateTouch: false,
    direction: 'vertical',
    nextButton: '.swiper-button-next-g',
    prevButton: '.swiper-button-prev-g',
    mousewheelControl: true,
    onSlideChangeStart: function (swiper) {
      if(swiper.activeIndex == 0){
        $('.top-navigation').addClass('top-navigation--main');
        $('.swiper-button-next-g').addClass('swiper-button-next-g--main');
      }else{
        $('.top-navigation').removeClass('top-navigation--main');
        $('.swiper-button-next-g').removeClass('swiper-button-next-g--main');
      }
    }
  });

  var photoSwipe = new Swiper('.whocan-block__content__slides', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    simulateTouch: false,
    autoplay: 5000,
    paginationBulletRender: function (index, className) {
      return '<span class="' + className + ' ' + className + '-numeric">' + (index + 1) + '</span>';
    }
  });

  var programm1Swiper = new Swiper('.programm-block__photos', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    simulateTouch: false,
    paginationType: 'bullets',
    autoplay: 5000,
    loop: true
  });
  
  $('#home').click(function () {
    mainSwiper.slideTo(0);
    $('.overlay-menu__closebtn').trigger('click');
  });

  $('#aboutus').click(function () {
    mainSwiper.slideTo(1);
    $('.overlay-menu__closebtn').trigger('click');
  });

  $('#project').click(function () {
    mainSwiper.slideTo(2);
    $('.overlay-menu__closebtn').trigger('click');
  });

  $('#trainers').click(function () {
    mainSwiper.slideTo(6);
    $('.overlay-menu__closebtn').trigger('click');
  });

  $('#investors').click(function () {
    mainSwiper.slideTo(7);
    $('.overlay-menu__closebtn').trigger('click');
  });

  $('#partnership').click(function () {
    mainSwiper.slideTo(8);
    $('.overlay-menu__closebtn').trigger('click');
  });

  $('#contacts').click(function () {
    mainSwiper.slideTo(9);
    $('.overlay-menu__closebtn').trigger('click');
  });

  var i18nOptions = {
    fallbackLng: false,
    useCookie: true,
    lng: 'en',
    preload: ['ru', 'en']
  };

  $.i18n.init(i18nOptions, function() {
    $('body').i18n();
    $('.lng-switch__current').addClass('lng-switch__current--' + $.i18n.lng());
  });

  $('.lng-switch__lang').click(function () {
    var changeLang = $(this).attr('data-lang');

    $('.lng-switch__current').removeClass('lng-switch__current--' + $.i18n.lng());
    $.i18n.setLng(changeLang);
    $('body').i18n();
    $('.lng-switch__current').addClass('lng-switch__current--' + $.i18n.lng());
  });
  
  var myPlayer = videojs("my-video");

  $('.whocan-block__video__play').click(function () {
    $('.whocan-block__video__overlay').addClass('whocan-block__video__overlay--hide');
    $('.whocan-block__video').addClass('whocan-block__video--expanded');

    myPlayer.play();
  });

  $('.whocan-block__video__turn').click(function () {
    $('.whocan-block__video__overlay').removeClass('whocan-block__video__overlay--hide');
    $('.whocan-block__video').removeClass('whocan-block__video--expanded');

    myPlayer.pause();
  });


  $( "form" ).submit(function( e ) {
    $.ajax({
      type: "POST",
      url: "/mail.php",
      data:  $( this ).serializeArray(),
      success: function (data) {
        alert(data);
      }
    });
    e.preventDefault();
  });

});