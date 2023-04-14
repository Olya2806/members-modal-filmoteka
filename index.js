const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 2500,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});



// openModalBtn = document.querySelector('[data-modal-students-open]');
// closeModalBtn = document.querySelector('[data-members-modal-close-btn]');
// membersModal = document.querySelector('.members__modal');
// backdrop = document.querySelector('[data-members-modal]');
// body = document.querySelector('body')



