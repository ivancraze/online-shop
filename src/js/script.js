$(function(){
  //Stars rating 
  $("#rateYo").rateYo({
    normalFill: "#c4c4c4",
    ratedFill: "#1C62CD",
    spacing: "7px",
  });
  //Sliders
  $(".promo-slider").slick({
    dots: true,
    prevArrow: '<button class="promo-slider__btn promo-slider__btn-prev"><img src="img/icons/arrow_prev.svg"></button>',
    nextArrow: '<button class="promo-slider__btn promo-slider__btn-next"><img src="img/icons/arrow_next.svg"></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  $(".product-slider").slick({
    slidesToShow: 4,
    prevArrow: '<button class="product-slider__btn product-slider__btn-prev"><img src="img/icons/arrow_black_prev.svg"></button>',
    nextArrow: '<button class="product-slider__btn product-slider__btn-next"><img src="img/icons/arrow_black_next.svg"></button>',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 870,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 560,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  });
  //FormStyler
  $('.filter-style').styler();

  //Rangeslider
  // $(".js-range-slider").ionRangeSlider({
  //   type: "double",
  //   grid: false,
  //   min: 0,
  //   max: 1500000,
  //   from: 100000,
  //   to: 500000,
  // });
  // rangeSlider
    let $range = $(".js-range-slider"),
      $inputFrom = $(".js-input-from"),
      $inputTo = $(".js-input-to"),
      instance,
      min = 0,
      max = 1500000,
      from = 100000,
      to = 500000;

    $range.ionRangeSlider({
      skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 100000,
        to: 500000,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
      from = data.from;
        to = data.to;
        
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);	
    }

    $inputFrom.on("input", function () {
        let val = $(this).prop("value");
        
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
        
        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        let val = $(this).prop("value");
        
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
        
        instance.update({
            to: val
        });
    });
});

//Tabs 
//Activate tabs in search section
tabs('.search-tabs__title', '.search-tabs__content-item', '.search-tabs__header', 'active');
//Activate tabs in products section
tabs('.popular-tabs__title', '.popular-tabs__content-item', '.popular-tabs__header', 'active');
//Activate tabs in suggest section
tabs('.suggest-tabs__title', '.suggest-tabs__content-item', '.suggest-tabs__header', 'active');
// Activate tabs in aside filters from catalog page
tabs('.aside-filter-tabs__title', '.aside-filter-tabs__content-item', '.aside-filter-tabs__header', 'active');
// Activate tabs in product card page
tabs('.product-card__tabs-title', '.product-card__tabs-content-item', '.product-card__tabs-header', 'active');
tabs('.product-page__tabs-title', '.product-page__tabs-content-item', '.product-page__tabs-header', 'active');

function tabs (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

  const tabs = document.querySelectorAll(tabsSelector);
  const tabsContent = document.querySelectorAll(tabsContentSelector);
  const tabsParent = document.querySelector(tabsParentSelector);

  if (tabs.length === 0 || tabsContent.length === 0 || tabsParent.length === 0) return;

  function hideTabContent() {
      tabsContent.forEach(item => {
        item.classList.remove(activeClass);
      });

      tabs.forEach(item => {
        item.classList.remove(activeClass);
      });
  }
  
  function showTabContent(i = 0) {
      tabsContent[i].classList.add(activeClass);
      tabs[i].classList.add(activeClass);
  }
  
  hideTabContent();
  showTabContent();
  
  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    tabs.forEach((item, i) => {
      if (target == item) {
          hideTabContent();
          showTabContent(i);
          }
      });
  });
}

// Popular
// favourite button
const favouriteBtn = document.querySelectorAll('.product-item__favourite');
for (let i = 0; i < favouriteBtn.length; i++) {
  favouriteBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
    favouriteBtn[i].classList.toggle('product-item__favourite--active');
  });
}

//Content
//Filters accordeon
$('.filter__item-drop, .filter-btn__extra').on('click', function(){
  $(this).toggleClass('filter__item-drop--active');
  $(this).next().slideToggle(200);
});
//Filters accordeon mobile
$('.aside-filter__btn-mobile').on('click', function(){
  $(this).next().slideToggle(200);
});
//Footer accordeon
$('.footer__info-title, .footer__shop-title').on('click', function(){
  $(this).next().slideToggle(200);
});

//Hambmenu
const hambBtn = document.querySelector('.menu__hamburger-btn');
const menuMobile = document.querySelector('.menu-mobile__list');
hambBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menuMobile.classList.toggle('menu-mobile__list--active');
});