const navBar = document.querySelector('.navBar');
const wrapLeft = document.querySelector('.wrapLeft');
const wrapRight = document.querySelector('.wrapRight');
const resizeHandler = document.querySelector('.wrapLeft .resize-handler');

let isDragging = false;
let startX;
let startWidth;

resizeHandler.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startWidth = wrapLeft.offsetWidth;
});

window.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const delta = e.clientX - startX;
    const newWidth = Math.max(100, startWidth + delta);
    wrapLeft.style.width = `${newWidth}px`;

    const navBarWidth = navBar.offsetWidth;
    wrapRight.style.width = `calc(100% - ${navBarWidth}px - ${newWidth}px)`;
  }
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});
