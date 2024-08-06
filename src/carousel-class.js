const testElem = document.createElement('div');

function importAll(r) {
  return r.keys().map(r);
}
const contextModule = require.context('./images/carousel-images', false, /\.(png|jpe?g|svg)$/);
const images = importAll(contextModule);

export default class Carousel {
  static numImages = 0;

  static currentNavIndex = 0;

  static imagesArray = [];


  static addImagesToCarousel() {
    // #region configs
    const sampleImageBank = images;
    const numImagesToAdd = sampleImageBank.length;
    // #endregion

    function styleCarouselItems(img) {
      const newImg = img.cloneNode(true);

      // newImg.style.flex = '1 0 0px';
      newImg.style.minWidth = '0px';
      newImg.style.minHeight = '0px';
      return newImg;
    }
    function createCarousel() {
      const carouselElem = document.createElement('div');
      carouselElem.classList.add('carousel');
      carouselElem.style.display = 'flex';
      return carouselElem;
    }
    Carousel.carouselElemRef = createCarousel();

    // Carousel.carouselElemRef.addEventListener('load', findLargest);
    // document.addEventListener('DOMContentLoaded', () => {
    //   console.log([
    //     document.querySelector('.carousel-item').offsetWidth,
    //     document.querySelector('.carousel-item').offsetHeight,
    //   ]);
    // });

    // Carousel.imagesArrayWithWL = [];
    // testElem.getBoundingClientRect()

    for (let i = 0; i < numImagesToAdd; i += 1) {
      let imgToAdd = new Image();
      // const rand01 = Math.round(Math.random());
      imgToAdd.src = sampleImageBank[i];
      imgToAdd = styleCarouselItems(imgToAdd);

      imgToAdd = document.createElement('div').appendChild(imgToAdd);
      imgToAdd.classList.add('carousel-item');
      imgToAdd.setAttribute('index', i);
      Carousel.numImages += 1;

      Carousel.imagesArray.push(imgToAdd);

      // [ ]TODO: change carousel size to accommodate largest img - width and length

      this.carouselElemRef.appendChild(imgToAdd);
    }

    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'carousel-wrapper';
    carouselWrapper.appendChild(this.carouselElemRef);
    document.body.appendChild(carouselWrapper);
  }
}
