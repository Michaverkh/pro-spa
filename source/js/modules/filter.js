const hideFilterButtons = document.querySelectorAll('.filter-block__show-button');
const filterLists = document.querySelectorAll('.param-list');
const filterHideToggle = document.querySelector('.filter-toggle');
const filter = document.querySelector('.filter');
const filterCloseButton = document.querySelector('.filter__mobile-button');
// filter-toggle filter-tougle--hiden filter__mobile-button sorting__tougle sorting__list
const sortingToggle = document.querySelector('.sorting__tougle');
const sortingList = document.querySelector('.sorting__list');

for (let i=0; i < hideFilterButtons.length; i++) {
  hideFilterButtons[i].addEventListener('click', ()=>{
    filterLists[i].classList.toggle('param-list--closed');
    hideFilterButtons[i].classList.toggle('filter-block__show-button--closed');
    })
}

filterHideToggle.addEventListener('click', ()=> {
  filterHideToggle.classList.toggle('filter-toggle--hiden');
  filter.classList.toggle('hidden');
})

filterCloseButton.addEventListener('click', () => {
  if (!filter.classList.contains('hidden')) {
    filter.classList.add('hidden');
  }
})

sortingToggle.addEventListener('click', ()=> {
  console.log('click')
  sortingList.classList.toggle('sorting__list--closed');
})
