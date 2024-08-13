/* eslint-disable no-restricted-syntax */
import leftArrow from './images/arrow-left.svg';
import rightArrow from './images/arrow-right.svg';
import Carousel from './carousel-class';

const testElem = document.createElement('div');
/* eslint-disable no-param-reassign */
export default class Navigator {
  // constructor() {
  //   Navigator.initializeVisibleImage()
  // }
  static navDotArray = [];

  static addNavigationButtons() {
    const goLeft = document.createElement('button');
    const goRight = document.createElement('button');
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    const navContainer = document.createElement('div');
    navContainer.className = 'nav-container';

    function styleElement(element, backgroundImage) {
      element.style.backgroundImage = `url(${backgroundImage})`;
      element.style.backgroundSize = 'contain';
      element.style.width = '30px';
      element.style.height = '30px';
    }
    styleElement(goLeft, leftArrow);
    styleElement(goRight, rightArrow);

    [goLeft, goRight].forEach((button) => {
      let direction;
      if (button === goLeft) direction = 'left';
      if (button === goRight) direction = 'right';
      button.addEventListener('click', () => {
        Navigator.moveCarouselAndNav(direction);
      });
    });

    const navMinimap = this.createNavMinimap();
    buttonContainer.append(goLeft, goRight);
    navContainer.append(navMinimap, buttonContainer);
    document.querySelector('.carousel-wrapper').append(navContainer);
  }

  /**
   * jump to clicked navdot
   * @param {*} evt
   */
  static jumpToIndex(evt) {
    const index = evt.target.getAttribute('id');
    Navigator.toggleSelectedClassNav(Navigator.navDotArray[Carousel.currentNavIndex]);

    Carousel.currentNavIndex = +index;
    Navigator.removeSelectedClassFromAll();
    Navigator.toggleSelectedClassNav(Navigator.navDotArray[Carousel.currentNavIndex]);
    Carousel.imagesArray[Carousel.currentNavIndex].classList.toggle('selected');

  }

  static createNavMinimap() {
    const navMinimap = document.createElement('ul');
    navMinimap.className = 'nav-minimap';

    for (let i = 0; i < Carousel.numImages; i += 1) {
      const liElem = document.createElement('li');
      liElem.className = 'nav-dot';
      liElem.setAttribute('id', i);
      navMinimap.appendChild(liElem);
      Navigator.navDotArray.push(liElem);

      liElem.addEventListener('click', Navigator.jumpToIndex);
    }
    return navMinimap;
  }

  static initializeVisibleImage() {
    Navigator.toggleSelectedClassNav(Carousel.imagesArray[0]);
  }

  static initializeNavDots() {
    const currentNavIndex = 0;
    Navigator.toggleSelectedClassNav(Navigator.navDotArray[0]);
    return currentNavIndex;
  }

  static moveCarouselAndNav(direction) {
    const carouselElem = document.querySelector('.carousel');
    Navigator.toggleSelectedClassNav(Navigator.navDotArray[Carousel.currentNavIndex]);
    Navigator.removeSelectedClassFromAll();

    if (direction === 'left') {
      if (Carousel.currentNavIndex === 0) {
        Carousel.currentNavIndex = Carousel.imagesArray.length - 1;
      } else Carousel.currentNavIndex -= 1;
    } else if (direction === 'right') {
      if (Carousel.currentNavIndex === Carousel.imagesArray.length - 1) {
        Carousel.currentNavIndex = 0;
      } else Carousel.currentNavIndex += 1;
    }

    Navigator.toggleSelectedClassNav(Navigator.navDotArray[Carousel.currentNavIndex]);
    Carousel.imagesArray[Carousel.currentNavIndex].classList.add('selected');
  }

  static removeSelectedClassFromAll() {
    for (const img of Carousel.imagesArray) {
      if (img.classList.contains('selected')) img.classList.remove('selected');
    }
  }

  static toggleSelectedClassNav(elem) {
    elem.classList.toggle('selected');
    return elem;
  }
}
