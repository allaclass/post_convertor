let fn_viewToggle_wrapInfo = (type) => {
  const wrapInfo = document.querySelector('div.wrapInfo');
  const wrapInput = document.querySelector('div.wrapInput');
  const wrapSource = document.querySelector('div.wrapSource');

  switch (type) {
    case 'info':
      if (wrapInfo.style.display === 'none') {
        // wrapInfo가 미노출이면
        wrapInfo.style.display = 'block'; // 보이도록 변경
        wrapInput.style.display = 'none'; // 숨기도록 변경
        wrapSource.style.display = 'none'; // 숨기도록 변경
      } else {
        // wrapInfo가 노출이면
        wrapInfo.style.display = 'none'; // 숨기도록 변경
        wrapInput.style.display = 'none'; // 숨기도록 변경
        wrapSource.style.display = 'none'; // 숨기도록 변경
      }
      break;
    case 'input':
      if (wrapInput.style.display === 'none') {
        // wrapInput가 미노출이면
        wrapInput.style.display = 'block'; // 보이도록 변경
        wrapInfo.style.display = 'none'; // 숨기도록 변경
        wrapSource.style.display = 'none'; // 숨기도록 변경
      } else {
        // wrapInput가 노출이면
        wrapInput.style.display = 'none'; // 숨기도록 변경
        wrapInfo.style.display = 'none'; // 숨기도록 변경
        wrapSource.style.display = 'none'; // 숨기도록 변경
      }
      break;
    case 'source':
      if (wrapSource.style.display === 'none') {
        // wrapSource가 미노출이면
        wrapSource.style.display = 'block'; // 보이도록 변경
        wrapInfo.style.display = 'none'; // 숨기도록 변경
        wrapInput.style.display = 'none'; // 숨기도록 변경
      } else {
        // wrapSource가 노출이면
        wrapSource.style.display = 'none'; // 숨기도록 변경
        wrapInfo.style.display = 'none'; // 숨기도록 변경
        wrapInput.style.display = 'none'; // 숨기도록 변경
      }
      break;
    default:
      break;
  }
};
