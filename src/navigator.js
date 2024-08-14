/* eslint-disable no-restricted-syntax */
import leftArrow from './images/arrow-left.svg';
import rightArrow from './images/arrow-right.svg';
import Carousel from './carousel-class';

const testElem = document.createElement('div');
/* eslint-disable no-param-reassign */
export default class Navigator {

  static navDotArray = [];

  static addNavigationButtons() {
    const goLeftButton = document.createElement('button');
    const goRightButton = document.createElement('button');
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    const navContainer = document.createElement('div');
    navContainer.className = 'nav-container';

    function styleElement(element, backgroundImage) {
      // navigator.js
      element.style.backgroundImage = `url(${backgroundImage})`;
      element.classList.add('button-style');
    }
    styleElement(goLeftButton, leftArrow);
    styleElement(goRightButton, rightArrow);

    function addEventListenersToButtons() {
      [goLeftButton, goRightButton].forEach((button) => {
        let direction;
        if (button === goLeftButton) direction = 'left';
        if (button === goRightButton) direction = 'right';
        button.addEventListener('click', () => {
          Navigator.moveCarouselAndNav(direction);
        });
      });
    }
    addEventListenersToButtons();

    const navMinimap = this.createNavMinimap();
    buttonContainer.append(goLeftButton, goRightButton);
    navContainer.append(navMinimap, buttonContainer);
    document.querySelector('.carousel-wrapper').append(navContainer);
  }

  /**
   * jump to clicked navdot
   * @param {*} evt
   */
  static jumpToIndexOnClick(evt) {
    const index = evt.target.getAttribute('id');
    Navigator.toggleSelectedClassNav(Navigator.navDotArray[Carousel.navIndex]);

    Carousel.navIndex = +index;
    Navigator.removeSelectedClassFromAll();
    Navigator.toggleSelectedClassNav(Navigator.navDotArray[Carousel.navIndex]);
    Carousel.imagesArray[Carousel.navIndex].classList.toggle('selected');
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

      liElem.addEventListener('click', Navigator.jumpToIndexOnClick);
    }
    return navMinimap;
  }

  static setInitialVisibleImage() {
    Navigator.toggleSelectedClassNav(Carousel.imagesArray[0]);
  }

  static setInitialNavDot() {
    const currentNavIndex = 0;
    Navigator.toggleSelectedClassNav(Navigator.navDotArray[0]);
    return currentNavIndex;
  }

  static moveCarouselAndNav(direction) {

    Navigator.toggleSelectedClassNav(Navigator.navDotArray[Carousel.navIndex]);
    Navigator.removeSelectedClassFromAll();

    function howMuchToMove(navIndex) {
      let index = navIndex;
      if (direction === 'left') {
        if (index === 0) {
          index = Carousel.imagesArray.length - 1;
        } else index -= 1;
      } else if (direction === 'right') {
        if (index === Carousel.imagesArray.length - 1) {
          index = 0;
        } else index += 1;
      }
      return index;
    }
    Carousel.navIndex = howMuchToMove(Carousel.navIndex);

    Navigator.toggleSelectedClassNav(Navigator.navDotArray[Carousel.navIndex]);
    Carousel.imagesArray[Carousel.navIndex].classList.add('selected');
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
