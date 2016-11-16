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

  var photoSwipe;

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
        mainSwiper.unlockSwipeToNext();
      }else{
        $('.top-navigation').removeClass('top-navigation--main');

        if(swiper.activeIndex != swiper.slides.length-1)
          $('.swiper-button-next-g').removeClass('swiper-button-next-g--main');
      }

      if(swiper.activeIndex == 1){
        $('.swiper-button-next-g').addClass('swiper-button-disabled');
        if(photoSwipe.activeIndex != 2)
          swiper.lockSwipeToNext();

      }

      if(photoSwipe.activeIndex == 2)
        $('.swiper-button-next-g').removeClass('swiper-button-disabled');

    }
  });

  var photoSwipe = new Swiper('.whocan-block__content__slides', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    simulateTouch: false,
    paginationBulletRender: function (index, className) {
      return '<span class="' + className + ' ' + className + '-numeric">' + (index + 1) + '</span>';
    },
    onSlideChangeStart: function (swiper) {
      if (swiper.activeIndex == 2){
        $('.swiper-button-next-g').removeClass('swiper-button-disabled');
        mainSwiper.unlockSwipeToNext();
      }
    }
  });

  var programm1Swiper = new Swiper('.programm-block__photos', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    simulateTouch: false,
    paginationType: 'bullets'
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

  var i18nOptions = {
    fallbackLng: false,
    useCookie: true,
    lng: 'ru',
    preload: ['ru', 'en']
  };

  $.i18n.init(i18nOptions, function() {
    $('body').i18n();
    $('.lng-switch__current').addClass('lng-switch__current--' + $.i18n.lng());
  });

  $('.lng-switch__lang').click(function () {
    var changeLang = $(this).attr('data-lang');
    console.log(changeLang);

    console.log('lng-switch__current--' + $.i18n.lng() + ' has been removed');
    $('.lng-switch__current').removeClass('lng-switch__current--' + $.i18n.lng());
    $.i18n.setLng(changeLang);
    $('body').i18n();
    $('.lng-switch__current').addClass('lng-switch__current--' + $.i18n.lng());
    console.log('lng-switch__current--' + $.i18n.lng() + ' has been added');
  });

});