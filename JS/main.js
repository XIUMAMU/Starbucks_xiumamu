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
  gasp.to(fadeEl, 1, {
    delay: (index + 1 ) * 0.7,
    opacity: 1
  })
});

// Swiper
new Swiper('.notice-line .inner .inner__left .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});