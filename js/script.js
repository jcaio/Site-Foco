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

    breakpoints: {
      // when window width is <= 320px
      320: {
          slidesPerView: 1,
          spaceBetween: 0
      },
      // when window width is <= 480px
      480: {
          slidesPerView: 1,
          spaceBetween: 0
      },
      // when window width is <= 640px
      640: {
          slidesPerView: 1,
          spaceBetween: 0
      },
    }
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

  breakpoints: {
    // when window width is <= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 15
    },
    // when window width is <= 480px
    480: {
        slidesPerView: 1,
        spaceBetween: 15
    },
    // when window width is <= 640px
    640: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    800: {
        slidesPerView: 2,
        spaceBetween: 15
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 20
    }  
  }
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

  breakpoints: {
    // when window width is <= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 0
    },
    // when window width is <= 480px
    480: {
        slidesPerView: 1,
        spaceBetween: 0
    },
    // when window width is <= 640px
    640: {
        slidesPerView: 1,
        spaceBetween: 0
    },
    800: {
        slidesPerView: 3,
        spaceBetween: 0
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 1
    }  
  }
  });

  /*Slide Clientes*/
  var swiper = new Swiper('.swiper-container4', {
    pagination: {
      el: '.swiper-pagination',
    },
    /*autoplay: {
      delay: 5000,
  },*/
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

  breakpoints: {
    // when window width is <= 320px
    320: {
        slidesPerView: 2,
        spaceBetween: 15
    },
    // when window width is <= 480px
    480: {
        slidesPerView: 2,
        spaceBetween: 15
    },
    // when window width is <= 640px
    640: {
        slidesPerView: 2,
        spaceBetween: 10
    },
    800: {
        slidesPerView: 3,
        spaceBetween: 15
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 20
    }  
  }
  });

  /*Produtos-Hotelaria*/
  var swiper = new Swiper('.swiper-container-produto', {
    slidesPerView: 4,
    spaceBetween: 0,
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

  /*Box-Valores*/
  var swiper = new Swiper('.swiper-container-valores', {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

