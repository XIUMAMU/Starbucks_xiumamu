// Search Icon Fade Animation

const searchEl = document.querySelector(".search")
const searchInputEl = searchEl.querySelector("input")

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// Header badges scroll Fade Animation

const badgeEl = document.querySelector(".badges")

window.addEventListener('scroll', _.throttle(function(){
  if (window.scrollY > 500){
    gsap.to(badgeEl, 0.6, {
      opacity:0,
      display:'none'
    })
  }else{
    gsap.to(badgeEl, 0.6, {
      opacity:1,
      display:'block'
    })
  }
},300));

// Visual image Fade Animation
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  })
});

// Promotion toggle

const promotionEl = document.querySelector('.promotion');
const promotionToggleEl = document.querySelector('.toggle-promotion');

let isHidePromotion = false;

promotionToggleEl.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion

  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  }else{
    promotionEl.classList.remove('hide')
  }
});

// Swiper
new Swiper('.notice-line .inner .inner__left .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination:{
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  }
});


// Floating Image Animation

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y : size,
    repeat : -1,
    yoyo : true,
    ease: Power2.easeInOut,
    delay : random(0, delay)
  });
} ;

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);