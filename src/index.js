// [x]TODO: import image
// [x]TODO: css reset/normalize
// [ ]TODO: refactor code
// [ ]TODO: carousel shift
// [ ]TODO: FIX viewing window not resizing with browser

// [X]TODO: create viewing window
// CURRENT: figure out how to make viewing window same size as 1 image
// [X]TODO: measure length of each image

import './css-reset.css';
import './style.css';

import carouselImage1 from './images/300x200.svg';
import carouselImage2 from './images/600x400.svg';

const testElem = document.createElement('div');

// const testImg = new Image();
// testImg.src = carouselImage1;
// testImg.classList.add('test');
// testImg.style.border = '3px solid red';
// document.body.appendChild(testImg);

// function calcSize() {
//   const size = document.querySelector('.test').clientWidth;
//   console.log('image loaded');
//   console.log('size:' + size);
// }
// // testImg.onload = calcSize();
// testImg.addEventListener('load', calcSize);
// document.querySelector('.test').addEventListener('load', calcSize);

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
      carousel.classList.add('carousel');
      carousel.style.display = 'flex';
      // carousel.style.border = '1px solid red';
      return carousel;
    }
    this.carouselElemRef = createCarousel();

    for (let i = 0; i < numImagesToAdd; i += 1) {
      let imgToAdd = new Image();
      const rand01 = Math.round(Math.random());
      imgToAdd.src = imageBank[rand01];
      imgToAdd = styleCarouselItems(imgToAdd);

      // FIXME: trying div wrapper around img to see if offsetHeight is reflected correctly

      imgToAdd = document.createElement('div').appendChild(imgToAdd);
      imgToAdd.classList.add('carousel-item');
      imgToAdd.setAttribute('id', i);

      // let imgWrapper = document.createElement('div');
      // imgWrapper.style.display = 'flex';
      // imgWrapper.appendChild(imgToAdd);
      // imgWrapper = styleCarouselItems(imgWrapper);

      this.carouselElemRef.appendChild(imgToAdd);
    }
    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'carousel-wrapper';
    carouselWrapper.appendChild(this.carouselElemRef);
    document.body.appendChild(carouselWrapper);
  }


}

Carousel.addImagesToCarousel();



function makeViewingWindow(evt) {
  const viewingWindow = document.createElement('div');
  const vwStyle = viewingWindow.style;
  vwStyle.width = `${evt.target.clientWidth}px`;
  vwStyle.height = `${evt.target.clientHeight}px`;
  // [vwStyle.width, vwStyle.height] = [evt.target.clientWidth, evt.target.clientHeight];
  // [vwStyle.width, vwStyle.height] = ['520px', '350px'];
  vwStyle.border = 'solid 5px green';
  viewingWindow.className = 'viewing-window';
  document.querySelector('.carousel-wrapper').appendChild(viewingWindow);
}

// function positionViewingWindow(){
//   document.querySelector('.viewing-window')
// }

document
  .querySelector('.carousel-item')
  .addEventListener('load', makeViewingWindow);

// Carousel.carouselElemRef.style.border = '10px solid gold';

// function moveCarousel(direction) {
//   const carousel = document.querySelector('.carousel');
//   carousel.style.left = '100px';
// }
// moveCarousel()
