var swiper
/*Slide Principal*/
  swiper = new Swiper('.swiper-container1', {
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
          spaceBetween:   0
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

      800:{
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  /*Slide Hoteis*/
  swiper = new Swiper('.swiper-container2', {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: false,
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
        slidesPerGroup: 1,
        spaceBetween: 15
    },
    // when window width is <= 480px
    480: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15
    },
    // when window width is <= 640px
    640: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
    },
    800: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10
    },
    1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10
    }  
  }
  });

  /*Slide Agências*/
  swiper = new Swiper('.swiper-container3', {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: false,
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
        slidesPerGroup: 1,
        spaceBetween: 0
    },
    // when window width is <= 480px
    480: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
    },
    // when window width is <= 640px
    640: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
    },
    800: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 0
    },
    1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 1
    }  
  }
  });

  /*Slide Clientes*/
  swiper = new Swiper('.swiper-container4', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 10000,
    },
  });

  /*Slide Parceiros*/
  swiper = new Swiper('.swiper-container5', {
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
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15
    },
    // when window width is <= 480px
    480: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15
    },
    // when window width is <= 640px
    640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10
    },
    800: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15
    },
    1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
    }  
  }
  });

  /*Produtos-Hotelaria*/
  swiper = new Swiper('.swiper-container-produto', {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
      },
      // when window width is <= 480px
      480: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
      },
      // when window width is <= 640px
      640: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 0
      },

      800: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 0  
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 0  
      },
    }
  });

  /*Box-Valores*/
  swiper = new Swiper('.swiper-container-valores', {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 1,  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
      },
      // when window width is <= 480px
      480: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
      },
      // when window width is <= 640px
      640: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
      },
      800:{
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 0 
      },
      1024:{
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 0 
      }
    }
  });

  /*Box-Combos*/
  swiper = new Swiper('.swiper-container-combo', {
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 1,  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerGroup: 1
      },
      // when window width is <= 480px
      480: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
      },
      // when window width is <= 640px
      640: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
      },

      800:{
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 0
      },
      1024:{
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 0
      }
    }
  });

  /*Alterar os campos nas páginas Hotelaria e Agencia de Viagem*/
  $.openData = function(id){
    if(id == '#websitesIntegrados-js'){
      $('#motorReservas-js, #channelManager-js, #marketingDigital-js').attr('style', 'display: none');
      $('#websitesIntegrados-js').attr('style', 'display: block');  
    }else if(id == '#motorReservas-js'){
      $('#motorReservas-js').attr('style', 'display: block');
      $('#websitesIntegrados-js, #channelManager-js, #marketingDigital-js').attr('style', 'display: none');
    }else if (id == '#channelManager-js'){
      $('#motorReservas-js, #websitesIntegrados-js, #marketingDigital-js').attr('style', 'display: none');
      $('#channelManager-js').attr('style', 'display: block');
    }else if (id == '#marketingDigital-js'){
      $('#websitesIntegrados-js, #channelManager-js, #motorReservas-js').attr('style', 'display: none');
      $('#marketingDigital-js').attr('style', 'display: block');
    }
    
  }

  /*Click no botão do index e já abrir no assunto solicitado*/
  $.testButton = function(id){
    console.log(id);
    localStorage.setItem('options', id);
  }

  if (localStorage.getItem('options')){
      if (localStorage.getItem('options') == 'channel') {
        $('#motorReservas-js, #websitesIntegrados-js, #marketingDigital-js').attr('style', 'display: none');
        $('#channelManager-js').attr('style', 'display: block');
        $('.box-2').addClass("active swiper-slide-active");
       /* $('.box-3').addClass("swiper-slide-next");
        $('.box-1').addClass("swiper-slide-duplicate-prev");
        $('.box-1, .box-3, .box-4').removeClass("swiper-slide-active");
        $('.box-1, .box-2, .box-4').removeClass("swiper-slide-next");
        $('.box-2, .box-3, .box-4').removeClass("swiper-slide-duplicate-prev");*/
      }else if(localStorage.getItem('options') == 'motor'){
        $('#motorReservas-js').attr('style', 'display: block');
        $('#websitesIntegrados-js, #channelManager-js, #marketingDigital-js').attr('style', 'display: none');
        $('.box-1').addClass("active swiper-slide-active");
        /*$('.box-2').addClass("swiper-slide-next");
        $('.box-4').addClass("swiper-slide-duplicate-prev");
        $('.box-2, .box-3, .box-4').removeClass("swiper-slide-active");
        $('.box-1, .box-3, .box-4').removeClass("swiper-slide-next");
        $('.box-1, .box-2, .box-3').removeClass("swiper-slide-duplicate-prev"); */ 
      }else if (localStorage.getItem('options') == 'site'){
        $('#motorReservas-js, #channelManager-js, #marketingDigital-js').attr('style', 'display: none');
        $('#websitesIntegrados-js').attr('style', 'display: block');
        $('.box-3').addClass("active swiper-slide-active");
        /*$('.box-4').addClass("swiper-slide-next");
        $('.box-2').addClass("swiper-slide-duplicate-prev");
        $('.box-1, .box-2, .box-4').removeClass("swiper-slide-active");
        $('.box-1, .box-2, .box-3').removeClass("swiper-slide-next");
        $('.box-1, .box-3, .box-4').removeClass("swiper-slide-duplicate-prev");*/
      }else if (localStorage.getItem('options') == 'marketing'){
        $('#websitesIntegrados-js, #channelManager-js, #motorReservas-js').attr('style', 'display: none');
        $('#marketingDigital-js').attr('style', 'display: block');
        $('.box-4').addClass("active swiper-slide-active");
       /* $('.box-1').addClass("swiper-slide-next");
        $('.box-3').addClass("swiper-slide-duplicate-prev");
        $('.box-1, .box-2, .box-3').removeClass("swiper-slide-active");
        $('.box-2, .box-3, .box-4').removeClass("swiper-slide-next");
        $('.box-1, .box-2, .box-4').removeClass("swiper-slide-duplicate-prev");*/
      }
  }
  
  //Suavidade no Scroll da página index
  $('.scrollSuave a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        
    $('html, body').animate({ 
      scrollTop: targetOffset - 100
    }, 500);  
  });  

  //Mostrar que o menu está ativo
  $(document).ready(function() {
    $('a.yellow, .swiper-slide-produto').click(function() {
        $('a.yellow.active, .swiper-slide-produto.active').removeClass("active"); 
        $(this).addClass("active"); 
    });
});

//Recarregamento no topo da página
$(document).ready(function(){
  $(window).scrollTop(0);
});


  