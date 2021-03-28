$(function(){

  $(".promo-slider").slick({
    dots: true,
    prevArrow: '<button class="promo-slider__btn promo-slider__btn-prev"><img src="img/icons/arrow_prev.svg"></button>',
    nextArrow: '<button class="promo-slider__btn promo-slider__btn-next"><img src="img/icons/arrow_next.svg"></button>'
  });

  $('.search-tabs__link').on('click', function(e) {
    e.preventDefault();
    
    $('.search-tabs__link').removeClass('search-tabs__link-active');
    $('.search-content__item').removeClass('search-content__item-active');

    $(this).addClass('search-tabs__link-active');
    $($(this).attr('href')).addClass('search-content__item-active');
  });
});

