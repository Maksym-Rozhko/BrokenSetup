import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

new Swiper('.swiper.main-slider', {
  slidesPerView: 1,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.main-slider__controls.swiper-pagination',
    clickable: true,
  },
});