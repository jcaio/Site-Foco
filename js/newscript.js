/*Slide Principal*/
var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    }, 
    breakpoints:{
      320:{
        slidesPerView: 1
      },
      480:{
        slidesPerView: 1
      },
      640:{
        slidesPerView: 1
      }
    }
  });

  var swiper = new Swiper('.swipper-container-integracoes', {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next-integracoes',
      prevEl: '.swiper-button-prev-integracoes',
    },
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 0
      },
      480:{
        slidesPerView: 1,
        spaceBetween: 0
      },
      640:{
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });