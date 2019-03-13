// swiper

let mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    effect: 'slide',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })


// fullPage Scroll
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

//methods
fullpage_api.setAllowScrolling(false);