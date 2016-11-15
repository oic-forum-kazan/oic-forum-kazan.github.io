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
    pagination: '.swiper-pagination-g',
    paginationClickable: true,
    simulateTouch: false,
    direction: 'vertical',
    nextButton: '.swiper-button-next-g',
    prevButton: '.swiper-button-prev-g',
    onSlideChangeStart: function (swiper) {
      if(swiper.activeIndex == 0){
        $('.top-navigation').addClass('top-navigation--main');
      }else{
        $('.top-navigation').removeClass('top-navigation--main');
      }

    }
  });

  var photoSwipe = new Swiper('.whocan-block__content__slides', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    simulateTouch: false,
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
    paginationType: 'bullets'
  });
  
  $('#home').click(function () {
    mainSwiper.slideTo(0);
    $('.overlay-menu__closebtn').trigger('click');
  });
});