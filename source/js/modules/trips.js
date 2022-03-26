export const tripList = [
    {
        Id: 0,
        name: "Астория",
        route: "Аргентина - Фолклендские острова - Антарктида",
        start: "Ушуайя",
        duration: "11",
        price: "11500",
        img: "img/content/astoria-mobile.jpg",
        imgWebp: "img/content/astoria-desktop.webp, img/content/astoria-desktop@2x.webp 2x",
        imgTabletWebp: "img/content/astoria-tablet.webp, img/content/astoria-tablet@2x.webp 2x",
        imgMobileWeb: "img/content/astoria-mobile.webp, img/content/astoria-mobile@2x.webp 2x"
    },
    {
        Id: 1,
        name: "Элайн",
        route: "Аргентина - Фолклендские острова - Антарктида - Чили",
        start: "Буэнос-Айрес",
        duration: "20",
        price: "14500",
        img: "img/content/astoria-mobile.jpg",
        imgWebp: "img/content/astoria-desktop.webp, img/content/astoria-desktop@2x.webp 2x",
        imgTabletWebp: "img/content/astoria-tablet.webp, img/content/astoria-tablet@2x.webp 2x",
        imgMobileWeb: "img/content/astoria-mobile.webp, img/content/astoria-mobile@2x.webp 2x"
    },
    {
        Id: 2,
        name: "Атлантис",
        route: "Аргентина - Южная Георгия и Южные Сандвичевы Острова - Антарктида",
        start: "Ушуайя",
        duration: "15",
        price: "14500",
        img: "img/content/atlantis-mobile.jpg",
        imgWebp: "img/content/atlantis-desktop.webp, img/content/atlantis-desktop@2x.webp 2x",
        imgTabletWebp: "img/content/atlantis-tablet.webp, img/content/atlantis-tablet@2x.webp 2x",
        imgMobileWeb: "img/content/atlantis-mobile.webp, img/content/atlantis-mobile@2x.webp 2x"
    },
    {
        Id: 3,
        name: "Одисей",
        route: "Аргентина - Южная Георгия и Южные Сандвичевы Острова - Антарктида",
        start: "Ушуайя",
        duration: "15",
        price: "14500",
        img: "img/content/odissey-mobile.jpg",
        imgWebp: "img/content/odissey-desktop.webp, img/content/odissey-desktop@2x.webp 2x",
        imgTabletWebp: "img/content/odissey-tablet.webp, img/content/odissey-tablet@2x.webp 2x",
        imgMobileWeb: "img/content/odissey-mobile.webp, img/content/odissey-mobile@2x.webp 2x"
    },
    {
        Id: 4,
        name: "Олимпия",
        route: "Аргентина - Фолклендские острова - Южная Георгия - Антарктида",
        start: "Ушуайя",
        duration: "21",
        price: "18600",
        img: "img/content/olimpia-mobile.jpg",
        imgWebp: "img/content/olimpia-desktop.webp, img/content/olimpia-desktop@2x.webp 2x",
        imgTabletWebp: "img/content/olimpia-tablet.webp, img/content/olimpia-tablet@2x.webp 2x",
        imgMobileWeb: "img/content/olimpia-mobile.webp, img/content/olimpia-mobile@2x.webp 2x"
    },
    {
        Id: 5,
        name: "Аврора",
        route: "Аргентина - Антарктида - Чили",
        start: "Ушуайя",
        duration: "14",
        price: "11700",
        img: "img/content/aurora-mobile.jpg",
        imgWebp: "img/content/aurora-desktop.webp, img/content/aurora-desktop@2x.webp 2x",
        imgTabletWebp: "img/content/aurora-tablet.webp, img/content/aurora-tablet@2x.webp 2x",
        imgMobileWeb: "img/content/aurora-mobile.webp, img/content/aurora-mobile@2x.webp 2x"
    },
    {
        Id: 6,
        name: "Леонор",
        route: "Чили - Южная Георгия - Антарктида - Аргентина",
        start: "Пунта-Аренас",
        duration: "17",
        price: "12500",
        img: "img/content/leonor-mobile.jpg",
        imgWebp: "img/content/leonor-desktop.webp, img/content/leonor-desktop@2x.webp 2x",
        imgTabletWebp: "img/content/leonor-tablet.webp, img/content/leonor-tablet@2x.webp 2x",
        imgMobileWeb: "img/content/leonor-mobile.webp, img/content/leonor-mobile@2x.webp 2x"
    },
    {
        Id: 7,
        name: "Минион - 1",
        route: "Аргентина - Антарктида",
        start: "Ушуайя",
        duration: "11",
        price: "12300",
        img: "img/content/minion-mobile.jpg",
        imgWebp: "img/content/minion-desktop.webp, img/content/minion-desktop@2x.webp 2x",
        imgTabletWebp: "img/content/minion-tablet.webp, img/content/minion-tablet@2x.webp 2x",
        imgMobileWeb: "img/content/minion-mobile.webp, img/content/minion-mobile@2x.webp 2x"
    }
]

const tripListContainer  = document.querySelector('.upcoming-cruises__list');
const tripTemplate = document.querySelector('#upcoming-cruises-template')
  .content
  .querySelector('.cruis-item');


export const renderCruises = (data) => {
    data.forEach((trip) => {
        const tripElement = tripTemplate.cloneNode(true);
        const tripNames = tripElement.querySelectorAll('.cruis-item__header');
        tripNames.forEach(name => name.textContent = `Круиз  “${trip.name}”`);
        tripElement.querySelector('.cruis-item__text--trip').textContent = trip.route;
        tripElement.querySelector('.cruis-item__text--start').textContent = trip.start;
        tripElement.querySelector('.cruis-item__text--duration').textContent = `${trip.duration} дней`;
        tripElement.querySelector('.cruis-item__text--price').textContent = `от ${trip.price} $`;
        tripElement.querySelector('.cruis-item__image').src = trip.img;
        tripElement.querySelector('.cruis-item__image--webp').srcset = trip.imgWebp;
        tripElement.querySelector('.cruis-item__image--tablet-webp').srcset = trip.imgTabletWebp;
        tripElement.querySelector('.cruis-item__image--mobile-webp').srcset = trip.imgMobileWeb;
    
        tripListContainer.appendChild(tripElement);
    })
}

