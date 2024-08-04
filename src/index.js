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

import leftArrow from './images/arrow-left.svg';
import rightArrow from './images/arrow-right.svg';

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

function updateViewingWindowSize(viewingWindow, carouselItem) {
  viewingWindow.style.width = `${carouselItem.clientWidth}px`;
  viewingWindow.style.height = `${carouselItem.clientHeight}px`;
}
// document.querySelector('.viewing-window').addEventListener('resize', updateViewingWindowSize)

function makeViewingWindow(evt) {
  const viewingWindow = document.createElement('div');
  const carouselItem = document.querySelector('.carousel-item');
  // vwStyle.width = `${evt.target.clientWidth}px`;
  // vwStyle.height = `${evt.target.clientHeight}px`;

  updateViewingWindowSize(viewingWindow, carouselItem);

  viewingWindow.style.border = 'solid 5px green';
  viewingWindow.style.boxSizing = 'border-box';
  viewingWindow.className = 'viewing-window';

  // FIXME:
  // viewingWindow.addEventListener('resize', updateViewingWindowSize)
  document.querySelector('.carousel-wrapper').appendChild(viewingWindow);
}

document
  .querySelector('.carousel-item')
  .addEventListener('load', makeViewingWindow);

// Carousel.carouselElemRef.style.border = '10px solid gold';

/**
 * Moves the carousel in the specified direction.
 *
 * @param {number} carouselItemWidth - The width of a single carousel item.
 * @param {string} direction - The direction to move the carousel.
 *                             Expected values: 'left', 'right'.
 *
 * @example
 * // Move the carousel to the left
 * moveCarousel(200, 'left');
 *
 * @example
 * // Move the carousel to the right
 * moveCarousel(200, 'right');
 */
function moveCarousel(carouselItemWidth, direction) {
  // console.log('carouselItemWidth:', carouselItemWidth)
  const carousel = document.querySelector('.carousel');
  const currentPosition = +carousel.style.left.replace('px', '');
  // console.log('currentPosition:', currentPosition);

  let shiftAmount;
  if (direction === 'left') {
    shiftAmount = currentPosition - carouselItemWidth;
  } else if (direction === 'right') {
    shiftAmount = currentPosition + carouselItemWidth;
  }
  // console.log('shiftAmount:', shiftAmount);
  carousel.style.left = `${shiftAmount}px`;
}
const carouselItemWidth = document.querySelector('.carousel-item').clientWidth;

// FIXME: adding nav buttons to carousel wrapper (which also has carousel) might
// cause carousel to offset weirdly

function addNavButtons() {
  // TODO:get img to serve as button
  const goLeft = document.createElement('button');
  const goRight = document.createElement('button');

  function styleElement(element, backgroundImage) {
    element.style.backgroundImage = `url(${backgroundImage})`;
    element.style.backgroundSize = 'contain';
    element.style.width = '30px';
    element.style.height = '30px';
  }
  styleElement(goLeft, leftArrow);
  styleElement(goRight, rightArrow);

  [goLeft, goRight].forEach((button) => {
    const width = document.querySelector('.carousel-item').clientWidth;
    let direction;
    if (button === goLeft) direction = 'left';
    if (button === goRight) direction = 'right';
    button.addEventListener('click', () => {
      moveCarousel(width, direction);
    });
  });

  document.querySelector('.carousel-wrapper').append(goLeft, goRight);
}
addNavButtons();
