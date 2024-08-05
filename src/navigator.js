import leftArrow from './images/arrow-left.svg';
import rightArrow from './images/arrow-right.svg';
import Carousel from './carousel-class';

/* eslint-disable no-param-reassign */
export default class Navigator {
  static navDotArray = [];

  static addNavButtons() {
    // TODO:get img to serve as button
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
      const width = document.querySelector('.carousel-item').clientWidth;
      let direction;
      if (button === goLeft) direction = 'left';
      if (button === goRight) direction = 'right';
      button.addEventListener('click', () => {
        this.moveCarouselAndNav(width, direction);
      });
    });

    const navMinimap = this.createNavMinimap();
    buttonContainer.append(goLeft, goRight);
    navContainer.append(navMinimap, buttonContainer);
    document.querySelector('.carousel-wrapper').append(navContainer);
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
    }
    return navMinimap;
  }

  static initializeNavDots() {
    const currentNavIndex = 0;
    this.styleNavDot(Navigator.navDotArray[0]);
    // document.body.appendChild()
    return currentNavIndex;
  }

  /**
   *
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
  static moveCarouselAndNav(carouselItemWidth, direction) {
    const carousel = document.querySelector('.carousel');

    if (direction === 'left') {
      if (Carousel.currentNavIndex > 0) {
        // shifting children
        const orphan = carousel.removeChild(carousel.firstChild);
        carousel.appendChild(orphan);

        this.styleNavDot(Navigator.navDotArray[Carousel.currentNavIndex]);
        Carousel.currentNavIndex -= 1;
        this.styleNavDot(Navigator.navDotArray[Carousel.currentNavIndex]);
      }
    } else if (direction === 'right') {
      if (Carousel.currentNavIndex < Navigator.navDotArray.length - 1) {
        // reverse direction
        const orphan = carousel.removeChild(carousel.lastChild);
        carousel.insertBefore(orphan, carousel.firstChild);

        this.styleNavDot(Navigator.navDotArray[Carousel.currentNavIndex]);
        Carousel.currentNavIndex += 1;
        this.styleNavDot(Navigator.navDotArray[Carousel.currentNavIndex]);
      }
    }
  }

  static styleNavDot(navDotElem) {
    // console.log(navDotElem);
    navDotElem.classList.toggle('selected');
    return navDotElem;
  }
}
