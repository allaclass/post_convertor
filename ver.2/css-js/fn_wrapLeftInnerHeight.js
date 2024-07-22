const wrapButtonExe = document.querySelector('div.wrapButtonExe');
const wrapInfo = document.querySelector('div.wrapInfo');
const wrapInput = document.querySelector('div.wrapInput');
const wrapSource = document.querySelector('div.wrapSource');

function updateWrapLeftInnerHeight() {
  const wrapButtonExe_height = window.getComputedStyle(wrapButtonExe).getPropertyValue('height');
  const viewportHeight = window.innerHeight;
  const wrapInfo_height = parseFloat(viewportHeight) - parseFloat(wrapButtonExe_height);
  const wrapInput_height = parseFloat(viewportHeight) - parseFloat(wrapButtonExe_height);
  const wrapSource_height = parseFloat(viewportHeight) - parseFloat(wrapButtonExe_height);
  wrapInfo.style.height = `${wrapInfo_height}px`;
  wrapInput.style.height = `${wrapInput_height}px`;
  wrapSource.style.height = `${wrapSource_height}px`;
}

updateWrapLeftInnerHeight(); // 초기 설정

// window 크기 변경 이벤트 감지
window.addEventListener('resize', updateWrapLeftInnerHeight);

// div.wrapButtonExe의 height 변경 이벤트 감지
// (예: CSS 미디어 쿼리에 의해 height가 변경되는 경우)
const wrapInfoObserver = new ResizeObserver(updateWrapLeftInnerHeight);
const wrapInputObserver = new ResizeObserver(updateWrapLeftInnerHeight);
wrapInfoObserver.observe(wrapButtonExe);
wrapInputObserver.observe(wrapButtonExe);
