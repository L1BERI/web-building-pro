let stickyheader = document.querySelector('.sticky-header');
let headerUpper = document.querySelector('.header')
let header = document.querySelector('.header__inner');
let stickyLogo = document.querySelector('.sticky-logo')
let burgerMenu = document.querySelector('.burger');
let mobileMenu = document.querySelector('.mobile-menu');
let headerHeight = headerUpper.offsetHeight;
let bodyScroll = document.querySelector('.body');
let accordeonKey = document.querySelectorAll('.mobile__menu-link');

for (var i = 0; i < accordeonKey.length; i++) {
    accordeonKey[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var accordionContent = this.nextElementSibling;
      if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
    } else {
        accordionContent.style.display = "block";
      }
    });
  }
window.onload= function(){
    if (window.scrollY < headerHeight) {
        stickyheader.classList.remove('sticky-active');
        stickyLogo.classList.remove('hidden-logo');
        burgerMenu.classList.remove('burger-pos');
        burgerMenu.classList.add('burger')
        
    } else {
        stickyheader.classList.add('sticky-active');
        stickyLogo.classList.add('hidden-logo');
        burgerMenu.classList.add('burger-pos');
        burgerMenu.classList.remove('burger')
    }
}

window.addEventListener('scroll', function () {
    if (window.scrollY < headerHeight) {
        stickyheader.classList.remove('sticky-active');
        burgerMenu.classList.remove('burger-pos');
        burgerMenu.classList.add('burger')
        
    } else {
        stickyheader.classList.add('sticky-active');
        burgerMenu.classList.add('burger-pos');
        burgerMenu.classList.remove('burger')
    }

})


burgerMenu.addEventListener('click', function (e) {
    mobileMenu.classList.toggle('mobile-active');
    burgerMenu.classList.toggle('burger-active');
    stickyheader.classList.toggle('sticky-shadow')
    if (burgerMenu.classList.contains('burger-active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
    if (burgerMenu.classList.contains('burger')){
        burgerMenu.classList.remove('burger-pos');
        burgerMenu.classList.add('burger')
    } else{
        burgerMenu.classList.add('burger-pos');
        burgerMenu.classList.remove('burger')
    }
})

// Инициализация слайдера
var mySwiper = new Swiper ('.swiper-container', {
  slidesPerView: 3,
  draggable: true,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320:{
      direction: 'vertical',
      slidesPerView: 'auto',
      
    },
    800:{
      slidesPerView: 2
    }, 
    900:{
      slidesPerView: 3
    }, 
  }
})
