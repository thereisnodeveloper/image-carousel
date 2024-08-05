import carouselImage1 from './images/300x200.svg';
import carouselImage2 from './images/600x400.svg';

export default class Carousel {
  static numImages = 0;

  static currentNavIndex = 0;

  static addImagesToCarousel() {
    // #region configs
    const imageBank = [carouselImage1, carouselImage2];
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
      const carousel = document.createElement('div');
      carousel.classList.add('carousel');
      carousel.style.display = 'flex';
      return carousel;
    }
    this.carouselElemRef = createCarousel();

    for (let i = 0; i < numImagesToAdd; i += 1) {
      let imgToAdd = new Image();
      const rand01 = Math.round(Math.random());
      imgToAdd.src = imageBank[rand01];
      imgToAdd = styleCarouselItems(imgToAdd);

      imgToAdd = document.createElement('div').appendChild(imgToAdd);
      imgToAdd.classList.add('carousel-item');
      imgToAdd.setAttribute('id', i);
      Carousel.numImages += 1;

      this.carouselElemRef.appendChild(imgToAdd);
    }
    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'carousel-wrapper';
    carouselWrapper.appendChild(this.carouselElemRef);
    document.body.appendChild(carouselWrapper);
  }
}
