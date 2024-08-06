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

  static addNavButtons() {
    // [x] TODO:get img to serve as button
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

  static initializeVisibleImage() {
    // Carousel.imagesArray[0].classList.add('selected')
    this.toggleSelectedClass(Carousel.imagesArray[0]);
  }

  static initializeNavDots() {
    const currentNavIndex = 0;
    this.toggleSelectedClass(Navigator.navDotArray[0]);
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
  static moveCarouselAndNav(direction) {
    const carouselElem = document.querySelector('.carousel');
    // [x] TODO: make navigators change index, and apply styles BASED
    // [x]  TODO: make carousel loop (if it reaches the end, start from
    // beginning again)

    this.toggleSelectedClass(Navigator.navDotArray[Carousel.currentNavIndex]);
    this.removeSelectedClassFromAll();

    if (direction === 'left') {
      if (Carousel.currentNavIndex === 0) {
        Carousel.currentNavIndex = Carousel.imagesArray.length - 1;
      } else Carousel.currentNavIndex -= 1;
    } else if (direction === 'right') {
      if (Carousel.currentNavIndex === Carousel.imagesArray.length - 1) {
        Carousel.currentNavIndex = 0;
      } else Carousel.currentNavIndex += 1;
    }

    this.toggleSelectedClass(Navigator.navDotArray[Carousel.currentNavIndex]);
    Carousel.imagesArray[Carousel.currentNavIndex].classList.add('selected');
  }

  static removeSelectedClassFromAll() {
    for (const img of Carousel.imagesArray) {
      if (img.classList.contains('selected')) img.classList.remove('selected');
    }
    // Carousel.imagesArray.forEach(img=>{
    //   if(img.classList.contains('selected')){img.classList.remove('selected')}
    // })
  }

  static toggleSelectedClass(elem) {
    // console.log(navDotElem);
    elem.classList.toggle('selected');
    return elem;
  }
}
