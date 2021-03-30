//Sliders
$(function(){
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
});


// Tabs
// Search tab
// const tabsLinks = document.querySelectorAll('.search-tabs__link');
// const contentItems = document.querySelectorAll('.search-content__item');

// for (let i = 0; i < tabsLinks.length; i++) {
//   tabsLinks[i].addEventListener("click", (e) => {
//     e.preventDefault();
//     let activeTabAttr = e.target.getAttribute("href");
//     for (let j = 0; j < tabsLinks.length; j++) {
//       let contentAttr = contentItems[j].getAttribute("id");

//       if (activeTabAttr === contentAttr) {
//         tabsLinks[j].classList.add("search-tabs__link-active");
//         contentItems[j].classList.add("search-content__item-active"); 
//       } else {
//         tabsLinks[j].classList.remove("search-tabs__link-active");
//         contentItems[j].classList.remove("search-content__item-active");
//       }
//     }
//   });
// }

// const productTabsLinks = document.querySelectorAll('.tab');
// const productContentItems = document.querySelectorAll('.tabs-content');

// for (let i = 0; i < productTabsLinks.length; i++) {
//   productTabsLinks[i].addEventListener("click", (e) => {
//     e.preventDefault();
//     let activeTabAttr = e.target.getAttribute("href");

//     for (let j = 0; j < productTabsLinks.length; j++) {
//       let contentAttr = productContentItems[j].getAttribute("id");

//       if (activeTabAttr === contentAttr) {
//         productTabsLinks[j].classList.add("tab--active");
//         productContentItems[j].classList.add("tabs-content--active"); 
//       } else {
//         productTabsLinks[j].classList.remove("tab--active");
//         productContentItems[j].classList.remove("tabs-content--active");
//       }
//     }
//   });
// }


// Popular
// favourite button
const favouriteBtn = document.querySelectorAll('.product-item__favourite');
for (let i = 0; i < favouriteBtn.length; i++) {
  favouriteBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
    favouriteBtn[i].classList.toggle('product-item__favourite--active');
  });
}

//Activate tabs in search section
tabs('.search-tabs__title', '.search-tabs__content-item', '.search-tabs__header', 'active');
//Activate tabs in products section
// tabs('.search-tabs__title', '.search-tabs__content-item', '.search-tabs__header', 'active');

//Tabs function
function tabs (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

  const tabs = document.querySelectorAll(tabsSelector);
  const tabsContent = document.querySelectorAll(tabsContentSelector);
  const tabsParent = document.querySelector(tabsParentSelector);
  
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
    if (target && target.classList.contains(tabsSelector.slice(1))) {
    tabs.forEach((item, i) => {
      if (target == item) {
          hideTabContent();
          showTabContent(i);
          }
      });
    }
  });
}