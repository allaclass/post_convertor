let object = '과목명';
let kind = '기말';
let year = '14';
let seme = '1';
let grade = '2';
let exampleImgToSimbol = '※';
let simbol = exampleImgToSimbol;

let url = '[##_Image|kage@yQON1/btq5FhwkDlv/amPvFJqL88RfJRP4uerv6k/img.jpg|alignCenter|width="100%"|_##]';

// let url =
//   '[##_Image|kage@yQON1/btq5FhwkDlv/amPvFJqL88RfJRP4uerv6k/img.jpg|CDM|1.3|{"style":"alignCenter","alt":"1-보기그림-테스트과목명-기말-14-1-2-01","caption":"1-보기그림-테스트과목명-기말-14-1-2-01","filename":"1-보기그림-테스트과목명-기말-14-1-2-01.jpg"}_##]';

// "alt" 문자열이 있는지 확인
let hasAlt = url.includes('"alt":');
// console.log(hasAlt);

if (hasAlt) {
  // hasAlt true = 있어
} else {
  // hasAlt false = 없어
  // 1. 보기그림 종류 나누기 (그룹보기그림/보기그림)
  let simbol_kind;
  simbol == '※' ? (simbol_kind = '1-그룹보기그림') : (simbol_kind = '1-보기그림');
  // 2. 문제번호 만들기
  simbol.length > 1 ? (simbol = simbol) : (simbol = '0' + simbol);
  // 3. alt or caption 내용 만들기
  let txtAlt = `${simbol_kind}-${object}-${kind}-${year}-${seme}-${grade}-${simbol}`;
  console.log(txtAlt);
  // 4. 구URL에서 |alignCenter| 앞까지만 추출하기
  let frontUrl = url.substring(0, url.indexOf('|alignCenter|'));
  // 5. 이미지 확장자 추출하기
  let imgExtension = frontUrl.substring(frontUrl.length - 4);
}
