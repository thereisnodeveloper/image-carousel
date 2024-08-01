//TODO: import image
import carouselImage1 from './images/100x200.svg';
import carouselImage2 from './images/600x400.svg';

const testElem = document.createElement('div');

function addImagesToCarousel() {
  // #region configs
  const imageBank = [carouselImage1, carouselImage2];
  const numImagesToAdd = 5;
  // #endregion

  for (let i = 0; i < numImagesToAdd; i += 1) {
    const imgToAdd = new Image();
    const rand01 = Math.floor(Math.random());
    imgToAdd.src = imageBank[rand01];
    
    styleImages(imgToAdd);
    
    document.body.appendChild(imgToAdd);
  }

  function styleImages(img) {
    img.style.border = 'solid 1px black';
  }
}
addImagesToCarousel();

// div with display:flex

// initiate by setting carousel to first image

// generate array that contains amount of movement required

// function to move carousel
// read the current image's size
