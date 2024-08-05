/* eslint-disable max-classes-per-file */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
// [x]TODO: import image
// [x]TODO: css reset/normalize
// [x]TODO: refactor code
//     [x] create viewingWindow class
// [x]TODO: carousel shift
// [x]TODO: FIX viewing window not resizing with browser


// [ ]TODO: impnlement "shift" method of moving carousel 



// [X]TODO: create viewing window
// CURRENT: figure out how to make viewing window same size as 1 image
// [X]TODO: measure length of each image

import './css-reset.css';
import './style.css';
import Carousel from './carousel-class';
import Navigator from './navigator';
import ViewingWindow from './viewing-window';

const testElem = document.createElement('div');

Carousel.addImagesToCarousel();

document
  .querySelector('.carousel-item')
  .addEventListener('load', ViewingWindow.createViewingWindow);

Navigator.addNavButtons();

Carousel.currentNavIndex = Navigator.initializeNavDots();

// TODO: make viewing window cover rest of carousel
// TODO: center carousel
