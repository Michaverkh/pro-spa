const swiper = new Swiper('.projects-slider', {
  loop: true,
  navigation: {
    nextEl: '.our-projects__button',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
    // dynamicMainBullets: 10
  }
});



new Swiper('.working-with-staff__slider', {
  loop: true,
  navigation: {
    nextEl: '.staff-slider__button',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

new Swiper('.offers-staff-slider', {
  loop: true,
  navigation: {
    nextEl: '.offers-to-staff__button',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});
