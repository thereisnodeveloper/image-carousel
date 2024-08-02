// [x]TODO: import image
// [x]TODO: css reset/normalize

// [ ]TODO: create viewing window
//CURRENT: figure out how to make viewing window same size as 1 image
// [ ]TODO: measure length of each image
// [ ]TODO: initiate carousel by going to first image

// commit: no longer look Carousel's array to calculate width/height, since
// image size may change after appending to carousel, and array has reference to
// image AT its creation

import './css-reset.css';
import './style.css';

import carouselImage1 from './images/300x200.svg';
import carouselImage2 from './images/600x400.svg';

const testElem = document.createElement('div');

class Carousel {
  // constructor(){

  // }

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
      carousel.classList.add('.carousel');
      carousel.style.display = 'flex';
      carousel.style.border = '1px solid red';
      return carousel;
    }
    this.carousel = createCarousel();
    for (let i = 0; i < numImagesToAdd; i += 1) {
      let imgToAdd = new Image();
      const rand01 = Math.round(Math.random());
      imgToAdd.src = imageBank[rand01];
      imgToAdd = styleCarouselItems(imgToAdd);


      //FIXME: trying div wrapper around img to see if offsetHeight is reflected correctly

      imgToAdd = document.createElement('div').appendChild(imgToAdd);
      imgToAdd.classList.add(`carousel-item`);
      imgToAdd.setAttribute('id', i);

      // let imgWrapper = document.createElement('div');
      // imgWrapper.style.display = 'flex';
      // imgWrapper.appendChild(imgToAdd);
      // imgWrapper = styleCarouselItems(imgWrapper);

      this.carousel.appendChild(imgToAdd);
    }
    document.body.appendChild(this.carousel);
  }

  static get widthHeight() {
    console.log(this.carousel.firstChild);

    const [height, width] = [
      this.carousel.firstChild.offsetHeight,
      this.carousel.firstChild.offsetWidth,
    ];
    return [width, height];
  }

  static makeViewingWindow() {
    const viewingWindow = document.createElement('div');
    const vwStyle = viewingWindow.style;
    [vwStyle.width, vwStyle.height] = this.widthHeight;
    // vwStyle.height = `${this.imagesArray[0].height}px`;
    vwStyle.border = 'solid 5px green';
    // viewingWindow.textContent = ' ';
    // viewingWindow.style.zIndex = 2;
    // this.carousel.appendChild(viewingWindow);
    document.body.appendChild(viewingWindow);
  }

  static get imgWidth() {
    return this.imagesArray[0].style.width;
  }

  static get imgHeight() {
    return this.imagesArray[0].style.height;
  }
}

Carousel.addImagesToCarousel();
Carousel.makeViewingWindow();

const thing = document.querySelector('.carousel-item').getBoundingClientRect().height;
console.log(thing);

// Carousel.addImagesToCarousel();

// div with display:flex

// initiate by setting carousel to first image

// generate array that contains amount of movement required

// function to move carousel
// read the current image's size
