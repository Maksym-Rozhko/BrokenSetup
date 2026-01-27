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
