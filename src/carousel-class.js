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

  //   static currentImage;

  static addImagesToCarousel() {
    // #region configs
    const sampleImageBank = images;
    const numImagesToAdd = sampleImageBank.length;
    // #endregion

    function styleCarouselItems(img) {
      const newImg = img.cloneNode(true);
      newImg.style.border = 'solid 5px black';
      newImg.style.margin = '30px';
      newImg.style.flex = '1 0 0px';
      newImg.style.minWidth = '0px';
      newImg.style.minHeight = '0px';
      return newImg;
    }
    /** * create carousel to hold images */
    function createCarousel() {
      const carouselElem = document.createElement('div');
      carouselElem.classList.add('carousel');
      carouselElem.style.display = 'flex';
      return carouselElem;
    }
    Carousel.carouselElemRef = createCarousel();

    //FIXME: can't figure out why height come out as 0
    function findLargest() {
      const wh = ['width', 'height'];
      const whResult = wh.map((dimension) => {
        const reduceResult = Carousel.imagesArray.reduce((prev, curr) => {
          let larger;
          if (curr[dimension] > prev[dimension]) {
            larger = curr;
          } else {
            larger = prev;
          }
          return larger;
        });
        return reduceResult[dimension];
      });
      console.log(whResult);

      // const result = Carousel.imagesArray.reduce((prev, curr) => {
      //   let larger;
      //   if (curr.width > prev.width) {
      //     larger = curr;
      //   } else {
      //     larger = prev;
      //   }
      //   return larger;
      // });
      // return result;
    }
    // Carousel.carouselElemRef.addEventListener('load', findLargest);
    document.addEventListener('DOMContentLoaded', findLargest);
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
