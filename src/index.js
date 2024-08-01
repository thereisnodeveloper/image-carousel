//TODO: import image
import carouselImage1 from './images/100x200.svg';
import carouselImage2 from './images/600x400.svg';

const testElem = document.createElement('div');

function addImagesToCarousel() {
  // #region configs
  const imageBank = [carouselImage1, carouselImage2];
  const numImagesToAdd = 5;
  // #endregion

  function styleImages(img) {
    const newImg = img.cloneNode(true);
    newImg.style.border = 'solid 1px black';
    return newImg;
  }

  for (let i = 0; i < numImagesToAdd; i += 1) {
    let imgToAdd = new Image();
    const rand01 = Math.floor(Math.random());
    imgToAdd.src = imageBank[rand01];

    imgToAdd = styleImages(imgToAdd);

    document.body.appendChild(imgToAdd);
  }
}
addImagesToCarousel();

// div with display:flex

// initiate by setting carousel to first image

// generate array that contains amount of movement required

// function to move carousel
// read the current image's size
