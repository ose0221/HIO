new Swiper(".main__page .swiper", {
  slidePerView: 1,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".main__page .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".main__page .swiper-prev",
    nextEl: ".main__page .swiper-next",
  },
});
