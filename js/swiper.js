const swiper = new Swiper('.reviews__swiper', {
  // Optional parameters
  loop: true,
  autoHeight: true,

  // If we need pagination
  pagination: {
    el: '.reviews__swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
});