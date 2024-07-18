const wrapButtonExe = document.querySelector('div.wrapButtonExe');
const wrapInfo = document.querySelector('div.wrapInfo');

function updateWrapInfoHeight() {
  const wrapButtonExe_height = window.getComputedStyle(wrapButtonExe).getPropertyValue('height');
  const viewportHeight = window.innerHeight;
  const wrapInfo_height = parseFloat(viewportHeight) - parseFloat(wrapButtonExe_height);
  wrapInfo.style.height = `${wrapInfo_height}px`;
}

updateWrapInfoHeight(); // 초기 설정

// window 크기 변경 이벤트 감지
window.addEventListener('resize', updateWrapInfoHeight);

// div.wrapButtonExe의 height 변경 이벤트 감지
// (예: CSS 미디어 쿼리에 의해 height가 변경되는 경우)
const observer = new ResizeObserver(updateWrapInfoHeight);
observer.observe(wrapButtonExe);
