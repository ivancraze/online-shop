$(function(){

  $(".promo-slider").slick({
    dots: true,
    prevArrow: '<button class="promo-slider__btn promo-slider__btn-prev"><img src="img/icons/arrow_prev.svg"></button>',
    nextArrow: '<button class="promo-slider__btn promo-slider__btn-next"><img src="img/icons/arrow_next.svg"></button>'
  });
});


// Tabs
const tabsLinks = document.querySelectorAll('.search-tabs__link');
const contentItems = document.querySelectorAll('.search-content__item');

for (let i = 0; i < tabsLinks.length; i++) {
  tabsLinks[i].addEventListener("click", (e) => {
    e.preventDefault();
    let activeTabAttr = e.target.getAttribute("href");
    for (let j = 0; j < tabsLinks.length; j++) {
      let contentAttr = contentItems[j].getAttribute("id");

      if (activeTabAttr === contentAttr) {
        tabsLinks[j].classList.add("search-tabs__link-active");
        contentItems[j].classList.add("search-content__item-active"); 
      } else {
        tabsLinks[j].classList.remove("search-tabs__link-active");
        contentItems[j].classList.remove("search-content__item-active");
      }
    }
  });
}