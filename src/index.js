// [x]TODO: import image
// [ ]TODO: create viewing window
// [ ]TODO: measure length of each image
// [ ]TODO: initiate carousel by going to first image

import carouselImage1 from './images/300x200.svg';
import carouselImage2 from './images/600x400.svg';

const testElem = document.createElement('div');

class Carousel {
  // constructor(){

  // }
  static imagesArray = [];

  static addImagesToCarousel() {
    // #region configs

    const imageBank = [carouselImage1, carouselImage2];
    const numImagesToAdd = 5;
    // #endregion

    function styleImages(img) {
      const newImg = img.cloneNode(true);
      newImg.style.border = 'solid 1px black';
      newImg.style.flex = '1 1 0px';
      newImg.style.minWidth = '0px';
      newImg.style.minHeight = '0px';
      return newImg;
    }
    /** * create carousel to hold images */
    function createCarousel() {
      const carousel = document.createElement('div');
      carousel.classList.add('.carousel');
      carousel.style.display = 'flex';
      carousel.style.border = '1px solid red';
      return carousel;
    }
    const carousel = createCarousel();

    for (let i = 0; i < numImagesToAdd; i += 1) {
      let imgToAdd = new Image();
      const rand01 = Math.round(Math.random());
      imgToAdd.src = imageBank[rand01];

      imgToAdd = styleImages(imgToAdd);
      this.imagesArray.push(imgToAdd);
      carousel.appendChild(imgToAdd);
    }
    document.body.appendChild(carousel);
  }

  // static makeViewingWindow() {
  // }

  static measureImages() {}
}

Carousel.addImagesToCarousel();

// Carousel.addImagesToCarousel();

// div with display:flex

// initiate by setting carousel to first image

// generate array that contains amount of movement required

// function to move carousel
// read the current image's size
