/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
export default class ViewingWindow {
  static updateViewingWindowSize(viewingWindow, carouselItem) {
    viewingWindow.style.width = `${carouselItem.clientWidth}px`;
    viewingWindow.style.height = `${carouselItem.clientHeight}px`;
  }

  static createViewingWindow() {
    const viewingWindow = document.createElement('div');
    viewingWindow.style.border = 'solid 5px green';
    viewingWindow.style.outline = 'solid 5px green';
    viewingWindow.style.boxSizing = 'border-box';
    viewingWindow.className = 'viewing-window';

    // eslint-disable-next-line no-unused-vars
    const viewingWindowCover = viewingWindow.cloneNode(false);

    const carouselItemElem = document.querySelector('.carousel-item');

    ViewingWindow.updateViewingWindowSize(viewingWindow, carouselItemElem);
    const resizeObserver = new ResizeObserver((resizeEntries) => {
      for (const entry of resizeEntries) {
        if (entry.contentBoxSize) {
          ViewingWindow.updateViewingWindowSize(
            document.querySelector('.viewing-window'),
            document.querySelector('.carousel-item'),
          );
        }
      }
    });

    resizeObserver.observe(document.querySelector('.carousel'));
    document.querySelector('.carousel-wrapper').append(viewingWindow);
  }
}
