var swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    speed: 500,
    autoplay: {
        delay: 15000,
        disableOnInteraction: false
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true,  
    // },
    effect: 'coverflow',
    coverflowEffect: {
      // rotate: 30,
      slideShadows: false,
    },
    // slidesPerGroup: 1,
    slidesPerView: 3,
    // centeredSlides: true,
    grabCursor: true,
    });
