/*Slide Principal*/
var swiper = new Swiper('.swiper-container-slide-main', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
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

  /*Slide de Integrações*/
  var swiper = new Swiper('.swipper-container-integracoes', {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: false,
    freeMode: true,
    slidesPerGroup: 4,
    loopFillGroupWithBlank: false,
    loopAdditionalSlides:4,
    autoplay:{
      stopOnLastSlide:true,
    },
    navigation: {
      nextEl: '.swiper-button-next-integracoes',
      prevEl: '.swiper-button-prev-integracoes',
    },
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loopAdditionalSlides:1,
        loop: false,
      },
      480:{
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loopAdditionalSlides:1,
        loop: false,
      },
      640:{
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loopAdditionalSlides:1,
        loop: true,
      }
    }
  });

  /*Slide Integrações - Gestor de Canais*/
  var swiper = new Swiper('.swiper-container-integracoes-gc', {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: false,
    freeMode: false,
    slidesPerGroup: 4,
    loopFillGroupWithBlank: false,
    loopAdditionalSlides:4,
    autoplay:{
      stopOnLastSlide:true,
    },
    navigation: {
      nextEl: '.swiper-button-next-integracoes',
      prevEl: '.swiper-button-prev-integracoes',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      480:{
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      640:{
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      }
    }
  });

  /*slide Clientes*/
  var swiper = new Swiper('.swiper-container-clientes', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination-client',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      stopOnLastSlide:true,
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
  })

  /*Slider Integrações Motor de Reservas*/
  var swiper = new Swiper('.swiper-container-int-mv', {
    slidesPerView: 2,
    loop: true,
    freeMode: false,
    slidesPerGroup: 2,
    loopFillGroupWithBlank: false,
    loopAdditionalSlides:2,
    autoplay:{
      delay: 6000,
      stopOnLastSlide:true,
    },
    pagination: {
      el: '.swiper-pagination-int-mv',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      stopOnLastSlide:true,
    },
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      480:{
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      640:{
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      }
    }
  })


  /*Carousel Cascada*/
  $('#cascade-slider').cascadeSlider({
    itemClass: 'cascade-slider_item',
    autoplay: 2000,
  });

  /*Agência - Alterar os campos de Agências-Receptivas*/
  $.openData = function(id){
    if(id == '#passeio-receptivo'){
      $('#transfer-receptivo, #hoteis-receptivo, #ticket-receptivo').attr('style', 'display: none');
      $('#passeio-receptivo').attr('style', 'display: block');
      $('.transfer-receptivo, .hoteis-receptivo, .ticket-receptivo').removeClass('link-active');
      $('.passeio-receptivo').addClass('link-active');
    }else if(id == '#transfer-receptivo'){
      $('#passeio-receptivo, #hoteis-receptivo, #ticket-receptivo').attr('style', 'display: none');
      $('#transfer-receptivo').attr('style', 'display: block');
      $('.passeio-receptivo, .hoteis-receptivo, .ticket-receptivo').removeClass('link-active');
      $('.transfer-receptivo').addClass('link-active');
    }else if(id == '#hoteis-receptivo'){
      $('#passeio-receptivo, #transfer-receptivo, #ticket-receptivo').attr('style', 'display: none');
      $('#hoteis-receptivo').attr('style', 'display: block');
      $('.passeio-receptivo, .transfer-receptivo, .ticket-receptivo').removeClass('link-active');
      $('.hoteis-receptivo').addClass('link-active');
    }else if(id == '#ticket-receptivo'){
      $('#passeio-receptivo, #transfer-receptivo, #hoteis-receptivo').attr('style', 'display: none');
      $('#ticket-receptivo').attr('style', 'display: block');
      $('.passeio-receptivo, .hoteis-receptivo, .transfer-receptivo').removeClass('link-active');
      $('.ticket-receptivo').addClass('link-active');
    }
  }

  /*Agência - Alterar os campos de Agências-Emissivas*/
  $.openData2 = function(id){
    if(id == '#passeio-emissivo'){
      $('#cruzeiros-emissivo, #hoteis-emissivo, #voos-emissivo').attr('style', 'display: none');
      $('#passeio-emissivo').attr('style', 'display: block');
      $('.cruzeiros-emissivo, .hoteis-emissivo, .voos-emissivo').removeClass('link-active');
      $('.passeio-emissivo').addClass('link-active');
    }else if(id == '#cruzeiros-emissivo'){
      $('#passeio-emissivo, #hoteis-emissivo, #voos-emissivo').attr('style', 'display: none');
      $('#cruzeiros-emissivo').attr('style', 'display: block');
      $('.passeio-emissivo, .hoteis-emissivo, .voos-emissivo').removeClass('link-active');
      $('.cruzeiros-emissivo').addClass('link-active');
    }else if(id == '#hoteis-emissivo'){
      $('#passeio-emissivo, #cruzeiros-emissivo, #voos-emissivo').attr('style', 'display: none');
      $('#hoteis-emissivo').attr('style', 'display: block');
      $('.passeio-emissivo, .cruzeiros-emissivo, .voos-emissivo').removeClass('link-active');
      $('.hoteis-emissivo').addClass('link-active');
    }else if(id == '#voos-emissivo'){
      $('#passeio-emissivo, #cruzeiros-emissivo, #hoteis-emissivo').attr('style', 'display: none');
      $('#voos-emissivo').attr('style', 'display: block');
      $('.cruzeiros-emissivo, .hoteis-emissivo, .passeio-emissivo').removeClass('link-active');
      $('.voos-emissivo').addClass('link-active');
    }
  }

  /*Modal*/
var modal_estilos = 'display: block;'
+'width: 80%; max-width: 370px;'
+'background: #f9a71a; padding: 15px;'
+'border-radius: 5px;'
+'-webkit-box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75);'
+'-moz-box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75);'
+'box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75);'
+'position: fixed;'
+'top: 50%; left: 50%;'
+'transform: translate(-50%,-50%);'
+'z-index: 99999999; text-align: center';

var fundo_modal_estilos = 'top: 0; right: 0;'
+'bottom: 0; left: 0; position: fixed;'
+'background-color: rgba(0, 0, 0, 0.6); z-index: 99999999;'
+'display: none;';

var meu_modal = '<div id="fundo_modal" style="'+fundo_modal_estilos+'">'
+'<div id="meu_modal" style="'+modal_estilos+'">'
   +'<h5 class="texto-label">Entre em Contato</h5><br />'
      +'<form>'
         +'<div class="row">'
            +'<div class="col-sm-12">'
               +'<div class="form-group">'
                  +'<input name="nome" class="form-control input-form" type="text" placeholder="Digite seu nome" autofocus required />'
               +'</div>'
               +'<div class="form-group">'
                  +'<input name="telefone" class="form-control input-form" type="tel" placeholder="Digite seu telefone"  required />'
               +'</div>'
               +'<div class="form-group">'
                  +'<input name="email" style="max-width: 100%; float: left;" class="form-control input-form" type="email" placeholder="Digite seu email" required />'
                  +'<button style="float: right; margin-left: 15px;" type="submit" class="btn btn-modal">Enviar</button>'
               +'</div>'
            +'</div>'
         +'</div>'
      +'</form>'
   +'<button type="button" class="close" style="top: 5px; right: 10px; position: absolute; cursor: pointer;"><span>&times;</span></button>'
+'</div></div>';

$("body").append(meu_modal);

$("#fundo_modal, .close").click(function(){ $("#fundo_modal").hide(); });
$("#meu_modal").click(function(e){ e.stopPropagation(); });
  
