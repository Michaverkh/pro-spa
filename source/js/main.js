import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {openMenu} from './modules/main-nav';
import {goodList, renderGoods, removeGoods} from './modules/goods';
import './vendor/swiper';
// ---------------------------------

// renderGoods(goodList);

const sortNew = document.querySelector('.sorting__button--new');
const sortchip = document.querySelector('.sorting__button--price');

function sortData(a,b) {
  var dateA = new Date(a.date).getTime();
  var dateB = new Date(b.date).getTime();
  return dateA > dateB ? 1 : -1;
};

function sortPrice(a,b) {
  return a.price > b.price ? 1 : -1;
};


let goodsCount = 20;
const showMoreButton = document.querySelector('.goods__show-more-button');

let goodsToShow = goodList.slice(0, goodsCount);
renderGoods(goodsToShow);

showMoreButton.addEventListener('click', () => {
  goodsCount += 20;
  removeGoods();
  goodsToShow = goodList.slice(0, goodsCount);
  renderGoods(goodsToShow);
});

sortNew.addEventListener('click', () => {
  removeGoods();

  let newGoods = [];
  newGoods = goodList.sort(sortData).slice(0, goodsCount);
  renderGoods(newGoods)
});

sortchip.addEventListener('click', () => {
  removeGoods();

  let chipGoods = [];
  chipGoods = goodList.sort(sortPrice).slice(0, goodsCount);
  renderGoods(chipGoods);
});



window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  openMenu();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});
