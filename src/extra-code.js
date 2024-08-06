// // wait for DOM to load, get dimensions, then set display to none
// function initImageCarousel() {
//   document.addEventListener('DOMContentLoaded', () => {
//     // Carousel.findLargest();
//     document.querySelectorAll('.carousel-item').forEach((item, index) => {
//       console.log([item, item.getAttribute('index')]);
//     });

//     const result = Array.from(document.querySelectorAll('.carousel-item')).reduce((prev, curr) => {
//       // console.log('[prev,current]:', [prev.getAttribute('index'), curr.getAttribute('index')]);
//       let larger;
//       // console.log('[prev.style.display, curr.style.display]:', [prev.style.display, curr.style.display])
//       // console.log('[prev.naturalWidth, curr.naturalWidth]:', [prev.naturalWidth, curr.naturalWidth])
//       if (curr.naturalWidth > prev.naturalWidth) {
//         larger = curr;
//       } else {
//         larger = prev;
//       }
//       return larger;
//     },document.querySelector('.carousel-item'));
//     // console.log(result);
//     return result;
//   });