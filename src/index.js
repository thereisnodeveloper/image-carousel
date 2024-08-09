/* eslint-disable max-classes-per-file */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
// [x]TODO: import image
// [x]TODO: css reset/normalize
// [x]TODO: refactor code
//     [x] create viewingWindow class
// [x]TODO: carousel shift
// [x]TODO: FIX viewing window not resizing with browser

// [x]TODO: impnlement "shift" method of moving carousel
// TODO: fix carousel size to the largest image within carousel
// [x]TODO: make: clicking on navdot switches to that image
// [x]TODO: timer
// [ ]TODO: customize # of images shown, customize timer delay
// [ ]TODO: refactorSyntax errors or bugs?



// [X]TODO: create viewing window
// CURRENT: figure out how to make viewing window same size as 1 image
// [X]TODO: measure length of each image

import './css-reset.css';
import './style.css';
import Carousel from './carousel-class';
import Navigator from './navigator';
// import ViewingWindow from './viewing-window';

const testElem = document.createElement('div');

Carousel.addImagesToCarousel();
Navigator.addNavButtons();

Carousel.currentNavIndex = Navigator.initializeNavDots();
Navigator.initializeVisibleImage();

// [ ] TODO: center carousel

const moveCarouselRightBound = Navigator.moveCarouselAndNav.bind(Navigator, 'right');
setInterval(moveCarouselRightBound, 5000);
