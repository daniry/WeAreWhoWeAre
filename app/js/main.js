AOS.init();
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    smooth: 1,
    effects: false, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1,
  })
  // настройка хедера (непрозрачность при скролле)
  gsap.fromTo('.header', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.header',
      start: 'center',
      end: '800',
      scrub: true
    }
  })
}

// fancybox плагин
$('[data-fancybox]').fancybox({
  youtube : {
    color: 'white',
    },
  contentClick: "zoomToFit",
});

// меню-бургер
const burgerMenu = document.querySelector('.header__menu-burger');
const menu = document.querySelector('.header__menu-body.menu');
if(burgerMenu && menu) {
  burgerMenu.addEventListener('click', (e) => {
    document.body.classList.toggle('--lock')
    burgerMenu.classList.toggle('--is-open');
    menu.classList.toggle('--is-open');
  })
}

// прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__list-link[data-goto]');
if(menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick)
  })
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto  && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY; //+ scrollY - document.querySelector('.header').offsetHeight;

      if(burgerMenu.classList.contains('--is-open')) {
        document.body.classList.remove('--lock')
        burgerMenu.classList.remove('--is-open');
        menu.classList.remove('--is-open');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
// прокрутка при клике на кнопку на первом экране
const headerScrollBtn = document.querySelector('.header__info-btn');
if(headerScrollBtn) {
  headerScrollBtn.addEventListener('click', (e) => {
    const firstSection = document.querySelector('.--about-section');
    const firstSectionValue = firstSection.getBoundingClientRect().top;
    window.scrollTo({
      top: firstSectionValue,
      behavior: "smooth"
    });
    e.preventDefault();
  })
}



