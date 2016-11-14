/**
 * Created by fajerus on 14.11.2016.
 */

function showMenu(){
  document.getElementById('overlaymenu').style.width = '100%';
}

function closeMenu() {
  document.getElementById('overlaymenu').style.width = '0%';
}


$(function () {
  var photoSwipe = new Swiper('.whocan-block__content__slides', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    simulateTouch: false
  });

  var programm1Swiper = new Swiper('.programm-block__photos', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    simulateTouch: false
  });
});