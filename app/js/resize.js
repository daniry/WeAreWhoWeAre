// поведение элементов на странице при ресайзе

function checkOnMobile() {
  if (window.innerWidth < 567) {
    console.log('mobile');
    
    // перемещение в шапке
    document.querySelector('.header__right').append(document.querySelector('.header__info'));
    
    // перемещение в эпизодах
    const episodesMain = document.querySelectorAll('.episodes__videos-main');
    if(episodesMain) {
      episodesMain.forEach((ep, i) => {
        document.querySelectorAll('.episodes__item')[i].prepend(ep)
      })
    }

    // перемещение в футере
    document.querySelector('.footer__menu').append(document.querySelector('footer .socials'));

  } else {
    console.log('desk')

    // перемещение в шапке
    document.querySelector('.header__left').append(document.querySelector('.header__info'));

    // перемещение в эпизодах
    const episodesMain = document.querySelectorAll('.episodes__videos-main');
    if(episodesMain) {
      episodesMain.forEach((ep, i) => {
        document.querySelectorAll('.episodes__videos')[i].prepend(ep)
      })
    }

    // перемещение в футере
    document.querySelector('.footer__main').append(document.querySelector('footer .socials'));
  }

}

checkOnMobile();

window.addEventListener('resize', function() {
  checkOnMobile();
});