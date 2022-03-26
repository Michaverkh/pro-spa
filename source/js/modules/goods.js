export const goodList = [
    {
        Id: 0,
        img: "img/content/image 12.jpg",
        imgWebp: "img/content/image 12.webp, img/content/image 12@2x.webp 2x",
        type: "Сауна",
        area: "34",
        name: "EOS",
        price: 11500,
        location: "Москва, квартира",
        company: "Твой пар",
        likesCount: 256,
        commentsCount: 1,
        isNew: false
    },
    {
      Id: 1,
      img: "img/content/image 14.jpg",
      imgWebp: "img/content/image 14.webp, img/content/image 14@2x.webp 2x",
      type: "Сауна",
      area: "65",
      name: "Harvia",
      price: 50000,
      location: "Королев, дом",
      company: "95 градусов",
      likesCount: 1,
      commentsCount: 0,
      isNew: false
  }

]

const goodListContainer  = document.querySelector('.goods__list');
const goodTemplate = document.querySelector('#goods-template')
  .content
  .querySelector('.good-item');


export const renderGoods = (data) => {
    data.forEach((good) => {
        const goodElement = goodTemplate.cloneNode(true);
        // const tripNames = goodElement.querySelectorAll('.cruis-item__header');
        // tripNames.forEach(name => name.textContent = `Круиз  “${trip.name}”`);
        goodElement.querySelector('.good-item__type').textContent = good.type;
        goodElement.querySelector('.good-item__image').src = good.img;
        goodElement.querySelector('.good-item__image--webp').srcset = good.imgWebp;

        goodListContainer.appendChild(goodElement);
    })
}

