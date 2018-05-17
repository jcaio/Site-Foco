/*Slide Principal*/
var swiper = new Swiper('.swiper-container1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
  });

  /*Slide Hoteis*/
  var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
  },
  });

  /*Slide Agências*/
  var swiper = new Swiper('.swiper-container3', {
    slidesPerView: 4,
    spaceBetween: 1,
    slidesPerGroup: 4,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
  },
  });

  /*Slide Clientes*/
  var swiper = new Swiper('.swiper-container4', {
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 5000,
  },
  });

  /*Slide Parceiros*/
  var swiper = new Swiper('.swiper-container5', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
  },
  });
