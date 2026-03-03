import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

// new Swiper('.swiper.main-slider', {
//   slidesPerView: 1,
//   speed: 1000,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },

//   pagination: {
//     el: '.main-slider__controls.swiper-pagination',
//     clickable: true,
//   },
// });

new Swiper('.swiper.advantage-slider', {
  slidesPerView: 1,
  speed: 1000,

  pagination: {
    el: '.advantage .advantage-slider__controls.swiper-pagination',
    type: 'fraction',
  },
});

new Swiper('.swiper.setup-slider', {
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 30,

  pagination: {
    el: '.setup .setup-slider__controls.swiper-pagination',
    type: 'fraction',
  },
});

new Swiper('.swiper.process-slider', {
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 30,

  pagination: {
    el: '.process .process-slider__controls.swiper-pagination',
    type: 'fraction',
  },
});

new Swiper('.swiper.approach-slider', {
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 30,

  pagination: {
    el: '.approach .approach-slider__controls.swiper-pagination',
    type: 'fraction',
  },
});

new Swiper('.swiper.customization-slider', {
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 30,

  pagination: {
    el: '.customization .customization-slider__controls.swiper-pagination',
    type: 'fraction',
  },
});
