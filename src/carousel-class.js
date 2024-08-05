import carouselImage1 from './images/300x200.svg';
import carouselImage2 from './images/600x400.svg';

export default class Carousel {
  static numImages = 0;

  static currentNavIndex = 0;
  static imagesArray = [];

  //   static currentImage;

  static addImagesToCarousel() {
    // #region configs
    const sampleImageBank = [carouselImage1, carouselImage2];
    const numImagesToAdd = 5;
    // #endregion

    function styleCarouselItems(img) {
      const newImg = img.cloneNode(true);
      newImg.style.border = 'solid 1px black';
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
    this.carouselElemRef = createCarousel();

    for (let i = 0; i < numImagesToAdd; i += 1) {
      let imgToAdd = new Image();
      const rand01 = Math.round(Math.random());
      imgToAdd.src = sampleImageBank[rand01];
      imgToAdd = styleCarouselItems(imgToAdd);

      imgToAdd = document.createElement('div').appendChild(imgToAdd);
      imgToAdd.classList.add('carousel-item');
      imgToAdd.setAttribute('index', i);
      Carousel.numImages += 1;

      //FIXME: testing whether or not it matters to add Elemref to an array
      //before OR after appending to its parent
      Carousel.imagesArray.push(imgToAdd);

      this.carouselElemRef.appendChild(imgToAdd);
    }
    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'carousel-wrapper';
    carouselWrapper.appendChild(this.carouselElemRef);
    document.body.appendChild(carouselWrapper);
  }
}
