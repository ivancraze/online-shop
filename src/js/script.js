$(function(){
  //Sliders
  $(".promo-slider").slick({
    dots: true,
    prevArrow: '<button class="promo-slider__btn promo-slider__btn-prev"><img src="img/icons/arrow_prev.svg"></button>',
    nextArrow: '<button class="promo-slider__btn promo-slider__btn-next"><img src="img/icons/arrow_next.svg"></button>'
  });

  $(".product-slider").slick({
    slidesToShow: 4,
    prevArrow: '<button class="product-slider__btn product-slider__btn-prev"><img src="img/icons/arrow_black_prev.svg"></button>',
    nextArrow: '<button class="product-slider__btn product-slider__btn-next"><img src="img/icons/arrow_black_next.svg"></button>'
  });
  //FormStyler
  $('.filter-style').styler();
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
$('.filter__item-drop').on('click', function(){
  $(this).toggleClass('filter__item-drop--active');
  $(this).next().slideToggle(200);
})