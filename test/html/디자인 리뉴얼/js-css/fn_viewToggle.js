let fn_viewToggle_wrapInfo = () => {
  const wrapInfo = document.getElementById('wrapInfo');
  if (wrapInfo.style.display === 'none') {
    // wrapInfo가 미노출이면
    wrapInfo.style.display = 'block'; // 보이도록 변경
  } else {
    // wrapInfo가 노출이면
    wrapInfo.style.display = 'none'; // 숨기도록 변경
  }
};
