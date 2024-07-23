// wrapRight > wrapPostView > 티스토리 썸네일 치환자 이미지로 변환하는 기능

// 일본어문장연습 19-1-2
// https://blog.kakaocdn.net/dn/cE8euR/btsIDNwuNsH/loD6lKL2FFrk3iFtYvVugk/img.png
// [##_Image|kage@cE8euR/btsIDNwuNsH/loD6lKL2FFrk3iFtYvVugk/img.png|CDM|1.3|{"originWidth":600,"originHeight":600,"style":"alignCenter","alt":"0-썸네일-일본어문장연습-기말-19-1-2","caption":"0-썸네일-일본어문장연습-기말-19-1-2","filename":"0-썸네일-일본어문장연습-기말-19-1-2.png"}_##]

// 일본어문장연습 18-1-2
// https://blog.kakaocdn.net/dn/H1GaR/btsICUC7VSl/DpOqYZFKlnuEDkFrT0bRk0/img.png
// [##_Image|kage@H1GaR/btsICUC7VSl/DpOqYZFKlnuEDkFrT0bRk0/img.png|CDM|1.3|{"originWidth":600,"originHeight":600,"style":"alignCenter","alt":"0-썸네일-일본어문장연습-기말-18-1-2","caption":"0-썸네일-일본어문장연습-기말-18-1-2","filename":"0-썸네일-일본어문장연습-기말-18-1-2.png"}_##]

let fn_ToTistoryImageSource_FromTistoryImageCommand = (postViewHtmlSrc) => {
  let hasPostViewHtmlSrc = postViewHtmlSrc.indexOf('[##_Image|kage@');
  if (typeof hasPostViewHtmlSrc === 'undefined') {
    return postViewHtmlSrc;
  } else {
    let newPostViewHtmlSrc = postViewHtmlSrc.replaceAll('[##_Image|kage@', '<img src="https://blog.kakaocdn.net/dn/');
    newPostViewHtmlSrc = newPostViewHtmlSrc.replaceAll(/\|CDM\|.*?_##\]/, '">');
    return newPostViewHtmlSrc;
  }
};
