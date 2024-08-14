const testElem = document.createElement('div');

function importAll(r) {
  return r.keys().map(r);
}
const contextModule = require.context('./images/carousel-images', false, /\.(png|jpe?g|svg)$/);
const images = importAll(contextModule);

export default class Carousel {
  static numImages = 0;

  static navIndex = 0;

  static imagesArray = [];

  static carouselElemRef;

  static addImagesToCarousel() {
    // #region configs
    const sampleImageBank = images;
    const numImagesToAdd = sampleImageBank.length;
    // #endregion

    // function styleCarouselItems(img) {
    //   const newImg = img.cloneNode(true);
    //   // newImg.style.minWidth = '0px';
    //   // newImg.style.minHeight = '0px';
    //   return newImg;
    // }
    function createCarousel() {
      const carouselElem = document.createElement('div');
      carouselElem.classList.add('carousel');
      carouselElem.style.display = 'flex';
      return carouselElem;
    }
    Carousel.carouselElemRef = createCarousel();

    function addImages() {
      function initiateImage(index) {
        let imgToAdd = new Image();
        imgToAdd.src = sampleImageBank[index];
        imgToAdd = document.createElement('div').appendChild(imgToAdd);
        imgToAdd.classList.add('carousel-item');
        imgToAdd.setAttribute('index', index);
        return imgToAdd;
      }

      for (let i = 0; i < numImagesToAdd; i += 1) {
        const imgToAdd = initiateImage(i);
        Carousel.numImages += 1;

        Carousel.imagesArray.push(imgToAdd);

        // [ ]TODO: change carousel size to accommodate largest img - width and length

        Carousel.carouselElemRef.appendChild(imgToAdd);
      }
    }
    addImages();
  }

  static createCarouselWrapper() {
    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'carousel-wrapper';
    carouselWrapper.appendChild(this.carouselElemRef);
    document.body.appendChild(carouselWrapper);
  }
}
