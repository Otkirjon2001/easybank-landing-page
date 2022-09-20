const elSiteHeaderButton = document.querySelector('.js-site-header-toggler');
const elSiteHeaderSitenav = document.querySelector('.site-header__sitenav');
const elTogglerImgOpen  = document.querySelector('.toggler__img--open');
const elTogglerImgClose  = document.querySelector('.toggler__img--close');
elSiteHeaderButton.addEventListener('click', function(){
  elSiteHeaderSitenav.classList.toggle('site-header__sitenav--open');
  elTogglerImgOpen.classList.toggle('none');
  elTogglerImgClose.classList.toggle('none');
})