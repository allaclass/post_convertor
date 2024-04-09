// 제    목 : alla-example-1.0.1.js
// 작 성 자 : 김현수
// 작 성 일 : 2022.09.07

/*
indexOf 사용법
https://wakestand.tistory.com/313
*/

// ------------------------------------------------------------------------------
// 변 수 영 역
// ------------------------------------------------------------------------------

var url_example = document.getElementById('txt_example'); // textarea #txt_example 의 위치를 넣어두는 변수 생성 → 위치값 넣기
var data_example = ''; // textarea #txt_example의 데이터를 넣어둘 변수 생성
var array_data = ''; // 변환한 데이터를 넣어둘 변수 생성 - 현재 기능 불능
var text_standard = ''; // 보기문 기준값 넣어둘 변수 생성
var text_standard_next = ''; // 보기문 다음단계 기준값 넣어둘 변수 생성
var input_tmp = '';
var standard_tmp = '';
var data_tmp = '/보기문'; // 변환한 데이터를 임시로 넣어둘 변수 생성

// ------------------------------------------------------------------------------
// 배 열 영 역
// ------------------------------------------------------------------------------

var arrStandard = []; // 보기문 리스트의 기준들을 넣어둘 배열 (예시: 가. 나. 다 또는 ⓐ, ⓑ, ⓒ)
var arrStandard_convertor = []; // 보기문 리스트 기준값을 다른 걸로 변경할 때 사용할 배열 (예시: ⒜ → (a))

// ------------------------------------------------------------------------------
// 함 수 영 역
// ------------------------------------------------------------------------------

function inputData() {
  // textarea #txt_example 의 값을 data_example 변수에 넣는 함수
  data_tmp = '/보기문';
  data_example = url_example.value;
}

function clearData() {
  // textarea #txt_example 의 값을 비우는 함수
  url_example.value = '';
}

function pushData_result() {
  url_example.value = data_tmp;
}

function pushData_Kor() {
  url_example.value = '   가.가가가가\n  나. 나나나나\n 다. 다다다다\n    라. 라라라라\n  마. 마마마마';
}

function pushData_KorJa() {
  url_example.value = '   ㄱ.가가가가\n  ㄴ. 나나나나\n ㄷ. 다다다다\n    ㄹ. 라라라라\n  ㅁ. 마마마마';
}

function pushData_EngSmall() {
  url_example.value = '   a.aaaa\n  b. bbbb\n c. cccc\n    d. dddd\n  e. eeee';
}

function pushData_EngBig() {
  url_example.value = '   A.AAAA\n  B. BBBB\n C. CCCC\n    D. DDDD\n  E. EEEEEEEEE';
}

function pushData_Bar() {
  url_example.value = '    - AAAA\n    - BBBB\n    - CCCC\n    - DDDD\n    - EEEEEEEEE';
}

function pushData_CircleKor() {
  url_example.value = '  ㉮가가가가\n     ㉯ 나나나나\n  ㉰ 다다다다\n ㉱ 라라라라';
}

function pushData_CircleKorJa() {
  url_example.value = '  ㉠가가가가\n     ㉡ 나나나나\n  ㉢ 다다다다\n ㉣ 라라라라';
}

function pushData_CircleEngSmall() {
  url_example.value = '  ⓐ가가가가\n     ⓑ 나나나나\n  ⓒ 다다다다\n ⓓ 라라라라';
}

function pushData_CircleEngBig() {
  url_example.value = '  Ⓐ가가가가\n     Ⓑ 나나나나\n  Ⓒ 다다다다\n Ⓓ 라라라라';
}

function pushData_Jul() {
  url_example.value = '    - AAAA/줄\n    - BBBB/줄\n    - CCCC/줄\n    - DDDD/줄\n    - EEEEEEEEE';
}

function pushData_WrapKor() {
  url_example.value = '  (가)가가가가\n     (나) 나나나나\n  (다) 다다다다\n (라) 라라라라';
}

function pushData_WrapKorJa() {
  url_example.value = '  (ㄱ)ㄱㄱㄱㄱ\n     (ㄴ) ㄴㄴㄴㄴ\n  (ㄷ) ㄷㄷㄷㄷ\n (ㄹ) ㄹㄹㄹㄹ';
}

function pushData_WrapEngSmall() {
  url_example.value = '  (a)aaaa\n     (b) bbbb\n  (c) cccc\n (d) dddd';
}

function pushData_WrapEngBig() {
  url_example.value = '  (A)AAAAA\n     (B) BBBBB\n  (C) CCCCC\n (D) DDDD';
}

function pushData_WrapNumber() {
  url_example.value = '  (1)AAAAA\n     (2) BBBBB\n  (3) CCCCC\n (4) DDDD';
}

function pushData_GihoWrapKor() {
  url_example.value = '  ㈎가가가가\n     ㈏ 나나나나\n  ㈐ 다다다다\n ㈑ 라라라라';
}

function pushData_GihoWrapKorJa() {
  url_example.value = '  ㈀ㄱㄱㄱㄱ\n     ㈁ ㄴㄴㄴㄴ\n  ㈂ ㄷㄷㄷㄷ\n ㈃ ㄹㄹㄹㄹ';
}

function pushData_GihoWrapEngSmall() {
  url_example.value = '  ⒜aaaa\n     ⒝ bbbb\n  ⒞ cccc\n ⒟ dddd';
}

function pushData_GihoWrapNumber() {
  url_example.value = '  ⑴AAAAA\n     ⑵ BBBBB\n  ⑶ CCCCC\n ⑷ DDDD';
}

function pushData_GihoNumber() {
  url_example.value = '  ①AAAAA\n     ② BBBBB\n  ③ CCCCC\n ④ DDDD\n  ⑤AAAAA\n     ⑥ BBBBB\n  ⑦ CCCCC\n ⑧ DDDD\n  ⑨ CCCCC\n ⑩ DDDD';
}

// ------------------------------------------------------------------------------
// 변환 함수 영역
// ------------------------------------------------------------------------------

// 일반 보기문 변환하기
function convertor_basic() {
  inputData(); // #txt_example 데이터 가져오기
  clearData(); // #txt_example 비우기

  data_tmp = '/보기문\n';
  data_tmp += '/단락 ' + data_example.replace(/(^\s*)|(\s*$)/gi, '') + '/.단락';

  // 연속된 괄호들을 /빈칸)으로 대체합니다.
  data_tmp = data_tmp.replace(/\(\s*\)/g, '(/빈칸)');

  // textarea #txt_example 에 출력하기
  pushData_result();
}

// 앞에 공백2개씩 넣는 기능
function convertor_frontSpace() {
  inputData(); // #txt_example 데이터 가져오기
  let arrDataExample = data_example.split('\n');
  clearData();
  for (let i = 1; i <= arrDataExample.length; i++) {
    let editItem = arrDataExample[i - 1].trim();
    if (i == arrDataExample.length) {
      url_example.value += `  ${editItem}`;
    } else {
      url_example.value += `  ${editItem}\n`;
    }
  }
}

// 보기문, 보기그림
function convertor_example(kind) {
  // 보기문 텍스트박스(txt_example)값 가져오기
  let txt_example = document.getElementById('txt_example');
  // 변경할 텍스트 담을 변수
  let replacement = '';
  let startTextIndex = txt_example.selectionStart; // 블록 시작 Index 가져오기
  let endTextIndex = txt_example.selectionEnd; // 블록 종료 Index 가져오기
  let selectedText = txt_example.value.substring(startTextIndex, endTextIndex); // 블록잡은 텍스트 가져오기
  // 마우스 블록을 잡은 부분이 있다면? (블록 시작부분과 끝부분이 0 이상이라면)
  if (startTextIndex >= 0 && endTextIndex >= 0) {
    if (selectedText.startsWith(`/${kind}`)) {
      replacement = selectedText.replace(`/${kind}`, ``);
    } else {
      replacement = `/${kind}`;
    }
  } else {
    replacement = `/${kind}`;
  }
  // 기존 텍스트에서 선택한 부분을 새로운 부정 표시로 교체
  txt_example.value = txt_example.value.substring(0, startTextIndex) + replacement + txt_example.value.substring(endTextIndex);
}

// 앞뒤공백 지우는 기능
function convertor_trim() {
  inputData(); // #txt_example 데이터 가져오기
  let arrDataExample = data_example.split('\n');
  clearData();
  for (let i = 1; i <= arrDataExample.length; i++) {
    let editItem = arrDataExample[i - 1].trim();
    if (i == arrDataExample.length) {
      url_example.value += `${editItem}`;
    } else {
      url_example.value += `${editItem}\n`;
    }
  }
}

// /한글 - 가. 나.
function convertor_Kor() {
  // 보기문 : 가.나.다. 변환 함수
  inputData(); // #txt_example 데이터 가져오기
  clearData(); // #txt_example 비우기

  arrStandard = [' 가.', ' 나.', ' 다.', ' 라.', ' 마.', ' 바.', ' 사.', ' 아.', ' 자.', ' 차.', ' 카.', ' 타.', ' 파.', ' 하.'];

  for (var i = 0; i < arrStandard.length; i++) {
    // 기준값 배열의 인덱스를 기반으로 기준값을 비교하는 반복문

    text_standard = arrStandard[i]; // text_standard 변수에 현재 기준값 넣기 (예시: /가.   /나.  등 )

    if (data_example.indexOf(text_standard) > -1) {
      // 보기문에서 기준값이 있다면
      var j = i + 1; // 기준값 배열의 다음단계 인덱스값을 담아둘 변수 j
      var indexStart = ''; // 시작 인덱스 담을 변수 생성
      var indexEnd = ''; // 종료 인덱스 담을 변수 생성

      indexStart = data_example.indexOf(text_standard); // 현재 기준값의 보기문 시작 인덱스값 넣기

      text_standard_next = arrStandard[j]; // text_standard_next 변수에 다음단계 기준값 넣기 (예시: 현재 /가. 라면 /나.를 담는 것)

      if (data_example.indexOf(text_standard_next) > -1) {
        // 다음단계 기준값이 보기문에 있다면
        indexEnd = data_example.indexOf(text_standard_next); // 다음단계 기준값의 보기문 시작 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      } else {
        // 다음단계 기준값이 보기문에 없다면
        indexEnd = data_example.length; // 보기문 맨끝값의 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 3, indexEnd).replace(/(^\s*)|(\s*$)/gi, ''); // 데이터 배열에 지금 가지고 온 데이터를 input_tmp 변수에 담아라

      data_tmp += '/한글' + arrStandard[i] + ' ' + input_tmp + '/.한글'; // 변환된 정보를 data_tmp 변수에 담아라

      input_tmp = ''; // input_tmp 변수 초기화

      pushData_result(); // textarea #txt_example 에 출력하기
    } else if (data_example.indexOf(text_standard) < 0) {
      // 보기문에서 다음단계 기준값이 없다면 반복 종료
      data_tmp = '/보기문';
      break;
    }
  }
}

// /한글 - ㄱ. ㄴ.
function convertor_KorJa() {
  // 보기문 : 가.나.다. 변환 함수
  inputData(); // #txt_example 데이터 가져오기
  clearData(); // #txt_example 비우기

  arrStandard = [' ㄱ.', ' ㄴ.', ' ㄷ.', ' ㄹ.', ' ㅁ.', ' ㅂ.', ' ㅅ.', ' ㅇ.', ' ㅈ.', ' ㅊ.', ' ㅋ.', ' ㅌ.', ' ㅍ.', ' ㅎ.'];

  for (var i = 0; i < arrStandard.length; i++) {
    // 기준값 배열의 인덱스를 기반으로 기준값을 비교하는 반복문

    text_standard = arrStandard[i]; // text_standard 변수에 현재 기준값 넣기 (예시: /가.   /나.  등 )

    if (data_example.indexOf(text_standard) > -1) {
      // 보기문에서 기준값이 있다면
      var j = i + 1; // 기준값 배열의 다음단계 인덱스값을 담아둘 변수 j
      var indexStart = ''; // 시작 인덱스 담을 변수 생성
      var indexEnd = ''; // 종료 인덱스 담을 변수 생성

      indexStart = data_example.indexOf(text_standard); // 현재 기준값의 보기문 시작 인덱스값 넣기

      text_standard_next = arrStandard[j]; // text_standard_next 변수에 다음단계 기준값 넣기 (예시: 현재 /가. 라면 /나.를 담는 것)

      if (data_example.indexOf(text_standard_next) > -1) {
        // 다음단계 기준값이 보기문에 있다면
        indexEnd = data_example.indexOf(text_standard_next); // 다음단계 기준값의 보기문 시작 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      } else {
        // 다음단계 기준값이 보기문에 없다면
        indexEnd = data_example.length; // 보기문 맨끝값의 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 3, indexEnd).replace(/(^\s*)|(\s*$)/gi, ''); // 데이터 배열에 지금 가지고 온 데이터를 input_tmp 변수에 담아라

      data_tmp += '/한글' + arrStandard[i] + ' ' + input_tmp + '/.한글'; // 변환된 정보를 data_tmp 변수에 담아라

      input_tmp = ''; // input_tmp 변수 초기화

      pushData_result(); // textarea #txt_example 에 출력하기
    } else if (data_example.indexOf(text_standard) < 0) {
      // 보기문에서 다음단계 기준값이 없다면 반복 종료
      data_tmp = '/보기문';
      break;
    }
  }
}

// /영소 - a. b. c.
function convertor_EngSmall() {
  // 보기문 : a.b.c. 변환 함수
  inputData(); // #txt_example 데이터 가져오기
  clearData(); // #txt_example 비우기

  arrStandard = [' a.', ' b.', ' c.', ' d.', ' e.', ' f.', ' g.', ' h.', ' i.', ' j.', ' k.', ' l.', ' m.', ' n.', ' o.', ' p.', ' q.', ' r.', ' s.', ' t.', ' u.', ' v.', ' w.', ' x.', ' y.', ' z.'];

  for (var i = 0; i < arrStandard.length; i++) {
    // 기준값 배열의 인덱스를 기반으로 기준값을 비교하는 반복문

    text_standard = arrStandard[i]; // text_standard 변수에 현재 기준값 넣기 (예시: /가.   /나.  등 )

    if (data_example.indexOf(text_standard) > -1) {
      // 보기문에서 기준값이 있다면
      var j = i + 1; // 기준값 배열의 다음단계 인덱스값을 담아둘 변수 j
      var indexStart = ''; // 시작 인덱스 담을 변수 생성
      var indexEnd = ''; // 종료 인덱스 담을 변수 생성

      indexStart = data_example.indexOf(text_standard); // 현재 기준값의 보기문 시작 인덱스값 넣기

      text_standard_next = arrStandard[j]; // text_standard_next 변수에 다음단계 기준값 넣기 (예시: 현재 /가. 라면 /나.를 담는 것)

      if (data_example.indexOf(text_standard_next) > -1) {
        // 다음단계 기준값이 보기문에 있다면
        indexEnd = data_example.indexOf(text_standard_next); // 다음단계 기준값의 보기문 시작 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      } else {
        // 다음단계 기준값이 보기문에 없다면
        indexEnd = data_example.length; // 보기문 맨끝값의 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 3, indexEnd).replace(/(^\s*)|(\s*$)/gi, ''); // 데이터 배열에 지금 가지고 온 데이터를 input_tmp 변수에 담아라

      data_tmp += '/영소' + arrStandard[i] + ' ' + input_tmp + '/.영소'; // 변환된 정보를 data_tmp 변수에 담아라           ★ 변수 기준 바꿀 때 여기 체크
      // data_tmp += '/영어'+arrStandard[i]+' '+input_tmp+'/.영어';       // 추후 변경 예정

      input_tmp = ''; // input_tmp 변수 초기화

      pushData_result(); // textarea #txt_example 에 출력하기
    } else if (data_example.indexOf(text_standard) < 0) {
      // 보기문에서 다음단계 기준값이 없다면 반복 종료
      data_tmp = '/보기문';
      break;
    }
  }
}

// /영소 - A. B. C (/영대)
function convertor_EngBig() {
  // 보기문 : a.b.c. 변환 함수
  inputData(); // #txt_example 데이터 가져오기
  clearData(); // #txt_example 비우기

  arrStandard = [' A.', ' B.', ' C.', ' D.', ' E.', ' F.', ' G.', ' H.', ' I.', ' J.', ' K.', ' L.', ' M.', ' N.', ' O.', ' P.', ' Q.', ' R.', ' S.', ' T.', ' U.', ' V.', ' W.', ' X.', ' Y.', ' Z.'];

  for (var i = 0; i < arrStandard.length; i++) {
    // 기준값 배열의 인덱스를 기반으로 기준값을 비교하는 반복문

    text_standard = arrStandard[i]; // text_standard 변수에 현재 기준값 넣기 (예시: /가.   /나.  등 )

    if (data_example.indexOf(text_standard) > -1) {
      // 보기문에서 기준값이 있다면
      var j = i + 1; // 기준값 배열의 다음단계 인덱스값을 담아둘 변수 j
      var indexStart = ''; // 시작 인덱스 담을 변수 생성
      var indexEnd = ''; // 종료 인덱스 담을 변수 생성

      indexStart = data_example.indexOf(text_standard); // 현재 기준값의 보기문 시작 인덱스값 넣기

      text_standard_next = arrStandard[j]; // text_standard_next 변수에 다음단계 기준값 넣기 (예시: 현재 /가. 라면 /나.를 담는 것)

      if (data_example.indexOf(text_standard_next) > -1) {
        // 다음단계 기준값이 보기문에 있다면
        indexEnd = data_example.indexOf(text_standard_next); // 다음단계 기준값의 보기문 시작 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      } else {
        // 다음단계 기준값이 보기문에 없다면
        indexEnd = data_example.length; // 보기문 맨끝값의 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 3, indexEnd).replace(/(^\s*)|(\s*$)/gi, ''); // 데이터 배열에 지금 가지고 온 데이터를 input_tmp 변수에 담아라

      data_tmp += '/영소' + arrStandard[i] + ' ' + input_tmp + '/.영소'; // 변환된 정보를 data_tmp 변수에 담아라           ★ 변수 기준 바꿀 때 여기 체크
      // data_tmp += '/영어'+arrStandard[i]+' '+input_tmp+'/.영어';       // 추후 변경 예정

      input_tmp = ''; // input_tmp 변수 초기화

      pushData_result(); // textarea #txt_example 에 출력하기
    } else if (data_example.indexOf(text_standard) < 0) {
      // 보기문에서 다음단계 기준값이 없다면 반복 종료
      data_tmp = '/보기문';
      break;
    }
  }
}

// /바 -
function convertor_Bar() {
  inputData();
  clearData();

  text_standard = '  - '; // text_standard 변수에 현재 기준값 넣기 (예시: "  - ")

  var indexStart = ''; // 시작 인덱스 담을 변수 생성
  var indexEnd = ''; // 종료 인덱스 담을 변수 생성

  var posStart = 0;
  var posStart2nd = '';

  while (true) {
    var foundPos = data_example.indexOf(text_standard, posStart);
    if (foundPos == -1) {
      break;
    }
    // console.log('if 후 foundPos: '+foundPos);
    indexStart = foundPos; // 시작 인덱스에 값 담기

    posStart = foundPos + text_standard.length;

    posStart2nd = posStart;
    while (true) {
      var foundPos = data_example.indexOf(text_standard, posStart2nd);
      if (foundPos == -1) {
        // console.log('if 후후 마지막: '+data_example.length);
        indexEnd = data_example.length; // 종료 인덱스에 마지막 인덱스값 담기
        break;
      } else {
        // console.log('if 후후 foundPos: '+foundPos);
        indexEnd = foundPos; // 종료 인덱스에 값 담기
        posStart2nd = foundPos + text_standard.length;
        break;
      }
    }

    if (data_example.indexOf(text_standard) > -1) {
      // 보기문에서 기준값이 있다면
      input_tmp = data_example.substring(indexStart + text_standard.length, indexEnd).replace(/(^\s*)|(\s*$)/gi, ''); // 데이터 배열에 지금 가지고 온 데이터를 input_tmp 변수에 담아라
      data_tmp += '\n';
      data_tmp += '/바 - ' + input_tmp + '/.바'; // 변환된 정보를 data_tmp 변수에 담아라
      input_tmp = ''; // input_tmp 변수 초기화
      pushData_result(); // textarea #txt_example 에 출력하기
    } else {
      // 보기문에서 다음단계 기준값이 없다면 반복 종료
      data_tmp = '/보기문';
      console.log('break');
      break;
    }
  }
}

// /서클 - ㉮ ㉯
function convertor_CircleKor() {
  // 보기문 : a.b.c. 변환 함수
  inputData(); // #txt_example 데이터 가져오기
  clearData(); // #txt_example 비우기

  arrStandard = [' ㉮', ' ㉯', ' ㉰', ' ㉱', ' ㉲', ' ㉳', ' ㉴', ' ㉵', ' ㉶', ' ㉷', ' ㉸', ' ㉹', ' ㉺', ' ㉻'];

  for (var i = 0; i < arrStandard.length; i++) {
    // 기준값 배열의 인덱스를 기반으로 기준값을 비교하는 반복문

    text_standard = arrStandard[i]; // text_standard 변수에 현재 기준값 넣기 (예시: /가.   /나.  등 )

    if (data_example.indexOf(text_standard) > -1) {
      // 보기문에서 기준값이 있다면
      var j = i + 1; // 기준값 배열의 다음단계 인덱스값을 담아둘 변수 j
      var indexStart = ''; // 시작 인덱스 담을 변수 생성
      var indexEnd = ''; // 종료 인덱스 담을 변수 생성

      indexStart = data_example.indexOf(text_standard); // 현재 기준값의 보기문 시작 인덱스값 넣기

      text_standard_next = arrStandard[j]; // text_standard_next 변수에 다음단계 기준값 넣기 (예시: 현재 /가. 라면 /나.를 담는 것)

      if (data_example.indexOf(text_standard_next) > -1) {
        // 다음단계 기준값이 보기문에 있다면
        indexEnd = data_example.indexOf(text_standard_next); // 다음단계 기준값의 보기문 시작 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      } else {
        // 다음단계 기준값이 보기문에 없다면
        indexEnd = data_example.length; // 보기문 맨끝값의 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 2, indexEnd).replace(/(^\s*)|(\s*$)/gi, ''); // 데이터 배열에 지금 가지고 온 데이터를 input_tmp 변수에 담아라

      data_tmp += '/서클' + arrStandard[i] + ' ' + input_tmp + '/.서클'; // 변환된 정보를 data_tmp 변수에 담아라           ★ 변수 기준 바꿀 때 여기 체크

      input_tmp = ''; // input_tmp 변수 초기화

      pushData_result(); // textarea #txt_example 에 출력하기
    } else if (data_example.indexOf(text_standard) < 0) {
      // 보기문에서 다음단계 기준값이 없다면 반복 종료
      data_tmp = '/보기문';
      break;
    }
  }
}

// /서클 - ㉠ ㉡
function convertor_CircleKorJa() {
  // 보기문 : a.b.c. 변환 함수
  inputData(); // #txt_example 데이터 가져오기
  clearData(); // #txt_example 비우기

  arrStandard = [' ㉠', ' ㉡', ' ㉢', ' ㉣', ' ㉤', ' ㉥', ' ㉦', ' ㉧', ' ㉨', ' ㉩', ' ㉪', ' ㉫', ' ㉬', ' ㉭'];

  for (var i = 0; i < arrStandard.length; i++) {
    // 기준값 배열의 인덱스를 기반으로 기준값을 비교하는 반복문

    text_standard = arrStandard[i]; // text_standard 변수에 현재 기준값 넣기 (예시: /가.   /나.  등 )

    if (data_example.indexOf(text_standard) > -1) {
      // 보기문에서 기준값이 있다면
      var j = i + 1; // 기준값 배열의 다음단계 인덱스값을 담아둘 변수 j
      var indexStart = ''; // 시작 인덱스 담을 변수 생성
      var indexEnd = ''; // 종료 인덱스 담을 변수 생성

      indexStart = data_example.indexOf(text_standard); // 현재 기준값의 보기문 시작 인덱스값 넣기

      text_standard_next = arrStandard[j]; // text_standard_next 변수에 다음단계 기준값 넣기 (예시: 현재 /가. 라면 /나.를 담는 것)

      if (data_example.indexOf(text_standard_next) > -1) {
        // 다음단계 기준값이 보기문에 있다면
        indexEnd = data_example.indexOf(text_standard_next); // 다음단계 기준값의 보기문 시작 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      } else {
        // 다음단계 기준값이 보기문에 없다면
        indexEnd = data_example.length; // 보기문 맨끝값의 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 2, indexEnd).replace(/(^\s*)|(\s*$)/gi, ''); // 데이터 배열에 지금 가지고 온 데이터를 input_tmp 변수에 담아라

      data_tmp += '/서클' + arrStandard[i] + ' ' + input_tmp + '/.서클'; // 변환된 정보를 data_tmp 변수에 담아라           ★ 변수 기준 바꿀 때 여기 체크

      input_tmp = ''; // input_tmp 변수 초기화

      pushData_result(); // textarea #txt_example 에 출력하기
    } else if (data_example.indexOf(text_standard) < 0) {
      // 보기문에서 다음단계 기준값이 없다면 반복 종료
      data_tmp = '/보기문';
      break;
    }
  }
}

// /서클 - ⓐ, ⓑ
function convertor_CircleEngSmall() {
  // 보기문 : a.b.c. 변환 함수
  inputData(); // #txt_example 데이터 가져오기
  clearData(); // #txt_example 비우기

  arrStandard = [' ⓐ', ' ⓑ', ' ⓒ', ' ⓓ', ' ⓔ', ' ⓕ', ' ⓖ', ' ⓗ', ' ⓘ', ' ⓙ', ' ⓚ', ' ⓛ', ' ⓜ', ' ⓝ', ' ⓞ', ' ⓟ', ' ⓠ', ' ⓡ', ' ⓢ', ' ⓣ', ' ⓤ', ' ⓥ', ' ⓦ', ' ⓧ', ' ⓨ', ' ⓩ'];

  for (var i = 0; i < arrStandard.length; i++) {
    // 기준값 배열의 인덱스를 기반으로 기준값을 비교하는 반복문

    text_standard = arrStandard[i]; // text_standard 변수에 현재 기준값 넣기 (예시: /가.   /나.  등 )

    if (data_example.indexOf(text_standard) > -1) {
      // 보기문에서 기준값이 있다면
      var j = i + 1; // 기준값 배열의 다음단계 인덱스값을 담아둘 변수 j
      var indexStart = ''; // 시작 인덱스 담을 변수 생성
      var indexEnd = ''; // 종료 인덱스 담을 변수 생성

      indexStart = data_example.indexOf(text_standard); // 현재 기준값의 보기문 시작 인덱스값 넣기

      text_standard_next = arrStandard[j]; // text_standard_next 변수에 다음단계 기준값 넣기 (예시: 현재 /가. 라면 /나.를 담는 것)

      if (data_example.indexOf(text_standard_next) > -1) {
        // 다음단계 기준값이 보기문에 있다면
        indexEnd = data_example.indexOf(text_standard_next); // 다음단계 기준값의 보기문 시작 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      } else {
        // 다음단계 기준값이 보기문에 없다면
        indexEnd = data_example.length; // 보기문 맨끝값의 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 2, indexEnd).replace(/(^\s*)|(\s*$)/gi, ''); // 데이터 배열에 지금 가지고 온 데이터를 input_tmp 변수에 담아라

      data_tmp += '/서클' + arrStandard[i] + ' ' + input_tmp + '/.서클'; // 변환된 정보를 data_tmp 변수에 담아라           ★ 변수 기준 바꿀 때 여기 체크

      input_tmp = ''; // input_tmp 변수 초기화

      pushData_result(); // textarea #txt_example 에 출력하기
    } else if (data_example.indexOf(text_standard) < 0) {
      // 보기문에서 다음단계 기준값이 없다면 반복 종료
      data_tmp = '/보기문';
      break;
    }
  }
}

// /서클 - Ⓐ Ⓑ Ⓒ Ⓓ
function convertor_CircleEngBig() {
  inputData(); // #txt_example 데이터 가져오기
  clearData(); // #txt_example 비우기

  arrStandard = [' Ⓐ', ' Ⓑ', ' Ⓒ', ' Ⓓ', ' Ⓔ', ' Ⓕ', ' Ⓖ', ' Ⓗ', ' Ⓘ', ' Ⓙ', ' Ⓚ', ' Ⓛ', ' Ⓜ', ' Ⓝ', ' Ⓞ', ' Ⓟ', ' Ⓠ', ' Ⓡ', ' Ⓢ', ' Ⓣ', ' Ⓤ', ' Ⓥ', ' Ⓦ', ' Ⓧ', ' Ⓨ', ' Ⓩ'];

  for (var i = 0; i < arrStandard.length; i++) {
    // 기준값 배열의 인덱스를 기반으로 기준값을 비교하는 반복문

    text_standard = arrStandard[i]; // text_standard 변수에 현재 기준값 넣기 (예시: /가.   /나.  등 )

    if (data_example.indexOf(text_standard) > -1) {
      // 보기문에서 기준값이 있다면
      var j = i + 1; // 기준값 배열의 다음단계 인덱스값을 담아둘 변수 j
      var indexStart = ''; // 시작 인덱스 담을 변수 생성
      var indexEnd = ''; // 종료 인덱스 담을 변수 생성

      indexStart = data_example.indexOf(text_standard); // 현재 기준값의 보기문 시작 인덱스값 넣기

      text_standard_next = arrStandard[j]; // text_standard_next 변수에 다음단계 기준값 넣기 (예시: 현재 /가. 라면 /나.를 담는 것)

      if (data_example.indexOf(text_standard_next) > -1) {
        // 다음단계 기준값이 보기문에 있다면
        indexEnd = data_example.indexOf(text_standard_next); // 다음단계 기준값의 보기문 시작 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      } else {
        // 다음단계 기준값이 보기문에 없다면
        indexEnd = data_example.length; // 보기문 맨끝값의 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 2, indexEnd).replace(/(^\s*)|(\s*$)/gi, ''); // 데이터 배열에 지금 가지고 온 데이터를 input_tmp 변수에 담아라

      data_tmp += '/서클' + arrStandard[i] + ' ' + input_tmp + '/.서클'; // 변환된 정보를 data_tmp 변수에 담아라           ★ 변수 기준 바꿀 때 여기 체크

      input_tmp = ''; // input_tmp 변수 초기화

      pushData_result(); // textarea #txt_example 에 출력하기
    } else if (data_example.indexOf(text_standard) < 0) {
      // 보기문에서 다음단계 기준값이 없다면 반복 종료
      data_tmp = '/보기문';
      break;
    }
  }
}

// /줄 제거하기
function convertor_Jul() {
  inputData(); // #txt_example 데이터 가져오기
  clearData(); // #txt_example 비우기

  data_example.replaceAll('/줄', '');

  data_tmp = data_example.replaceAll('/줄', '');

  pushData_result(); // textarea #txt_example 에 출력하기
}

// /괄호한글 - (가) (나)
function convertor_WrapKor() {
  inputData(); // #txt_example 데이터 가져오기
  clearData(); // #txt_example 비우기

  arrStandard = [' (가)', ' (나)', ' (다)', ' (라)', ' (마)', ' (바)', ' (사)', ' (아)', ' (자)', ' (차)', ' (카)', ' (타)', ' (파)', ' (하)'];

  for (var i = 0; i < arrStandard.length; i++) {
    // 기준값 배열의 인덱스를 기반으로 기준값을 비교하는 반복문

    text_standard = arrStandard[i]; // text_standard 변수에 현재 기준값 넣기 (예시: /가.   /나.  등 )

    if (data_example.indexOf(text_standard) > -1) {
      // 보기문에서 기준값이 있다면
      var j = i + 1; // 기준값 배열의 다음단계 인덱스값을 담아둘 변수 j
      var indexStart = ''; // 시작 인덱스 담을 변수 생성
      var indexEnd = ''; // 종료 인덱스 담을 변수 생성

      indexStart = data_example.indexOf(text_standard); // 현재 기준값의 보기문 시작 인덱스값 넣기

      text_standard_next = arrStandard[j]; // text_standard_next 변수에 다음단계 기준값 넣기 (예시: 현재 /가. 라면 /나.를 담는 것)

      if (data_example.indexOf(text_standard_next) > -1) {
        // 다음단계 기준값이 보기문에 있다면
        indexEnd = data_example.indexOf(text_standard_next); // 다음단계 기준값의 보기문 시작 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      } else {
        // 다음단계 기준값이 보기문에 없다면
        indexEnd = data_example.length; // 보기문 맨끝값의 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 4, indexEnd).replace(/(^\s*)|(\s*$)/gi, ''); // 데이터 배열에 지금 가지고 온 데이터를 input_tmp 변수에 담아라

      data_tmp += '/괄호한글' + arrStandard[i] + ' ' + input_tmp + '/.괄호한글'; // 변환된 정보를 data_tmp 변수에 담아라           ★ 변수 기준 바꿀 때 여기 체크

      input_tmp = ''; // input_tmp 변수 초기화

      pushData_result(); // textarea #txt_example 에 출력하기
    } else if (data_example.indexOf(text_standard) < 0) {
      // 보기문에서 다음단계 기준값이 없다면 반복 종료
      data_tmp = '/보기문';
      break;
    }
  }
}

// /괄호한글(자음) - (ㄱ) (ㄴ)
function convertor_WrapKorJa() {
  inputData(); // #txt_example 데이터 가져오기
  clearData(); // #txt_example 비우기

  arrStandard = [' (ㄱ)', ' (ㄴ)', ' (ㄷ)', ' (ㄹ)', ' (ㅁ)', ' (ㅂ)', ' (ㅅ)', ' (ㅇ)', ' (ㅈ)', ' (ㅊ)', ' (ㅋ)', ' (ㅌ)', ' (ㅍ)', ' (ㅎ)'];

  for (var i = 0; i < arrStandard.length; i++) {
    // 기준값 배열의 인덱스를 기반으로 기준값을 비교하는 반복문

    text_standard = arrStandard[i]; // text_standard 변수에 현재 기준값 넣기 (예시: /가.   /나.  등 )

    if (data_example.indexOf(text_standard) > -1) {
      // 보기문에서 기준값이 있다면
      var j = i + 1; // 기준값 배열의 다음단계 인덱스값을 담아둘 변수 j
      var indexStart = ''; // 시작 인덱스 담을 변수 생성
      var indexEnd = ''; // 종료 인덱스 담을 변수 생성

      indexStart = data_example.indexOf(text_standard); // 현재 기준값의 보기문 시작 인덱스값 넣기

      text_standard_next = arrStandard[j]; // text_standard_next 변수에 다음단계 기준값 넣기 (예시: 현재 /가. 라면 /나.를 담는 것)

      if (data_example.indexOf(text_standard_next) > -1) {
        // 다음단계 기준값이 보기문에 있다면
        indexEnd = data_example.indexOf(text_standard_next); // 다음단계 기준값의 보기문 시작 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      } else {
        // 다음단계 기준값이 보기문에 없다면
        indexEnd = data_example.length; // 보기문 맨끝값의 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 4, indexEnd).replace(/(^\s*)|(\s*$)/gi, ''); // 데이터 배열에 지금 가지고 온 데이터를 input_tmp 변수에 담아라

      data_tmp += '/괄호한글' + arrStandard[i] + ' ' + input_tmp + '/.괄호한글'; // 변환된 정보를 data_tmp 변수에 담아라           ★ 변수 기준 바꿀 때 여기 체크

      input_tmp = ''; // input_tmp 변수 초기화

      pushData_result(); // textarea #txt_example 에 출력하기
    } else if (data_example.indexOf(text_standard) < 0) {
      // 보기문에서 다음단계 기준값이 없다면 반복 종료
      data_tmp = '/보기문';
      break;
    }
  }
}

// /괄호영소 - (a) (b)
function convertor_WrapEngSmall() {
  inputData(); // #txt_example 데이터 가져오기
  clearData(); // #txt_example 비우기

  arrStandard = [' (a)', ' (b)', ' (c)', ' (d)', ' (e)', ' (f)', ' (g)', ' (h)', ' (i)', ' (j)', ' (k)', ' (l)', ' (m)', ' (n)', ' (o)', ' (p)', ' (q)', ' (r)', ' (s)', ' (t)', ' (u)', ' (v)', ' (w)', ' (x)', ' (y)', ' (z)'];

  for (var i = 0; i < arrStandard.length; i++) {
    // 기준값 배열의 인덱스를 기반으로 기준값을 비교하는 반복문

    text_standard = arrStandard[i]; // text_standard 변수에 현재 기준값 넣기 (예시: /가.   /나.  등 )

    if (data_example.indexOf(text_standard) > -1) {
      // 보기문에서 기준값이 있다면
      var j = i + 1; // 기준값 배열의 다음단계 인덱스값을 담아둘 변수 j
      var indexStart = ''; // 시작 인덱스 담을 변수 생성
      var indexEnd = ''; // 종료 인덱스 담을 변수 생성

      indexStart = data_example.indexOf(text_standard); // 현재 기준값의 보기문 시작 인덱스값 넣기

      text_standard_next = arrStandard[j]; // text_standard_next 변수에 다음단계 기준값 넣기 (예시: 현재 /가. 라면 /나.를 담는 것)

      if (data_example.indexOf(text_standard_next) > -1) {
        // 다음단계 기준값이 보기문에 있다면
        indexEnd = data_example.indexOf(text_standard_next); // 다음단계 기준값의 보기문 시작 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      } else {
        // 다음단계 기준값이 보기문에 없다면
        indexEnd = data_example.length; // 보기문 맨끝값의 인덱스값을 종료 인덱스값에 넣기
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 4, indexEnd).replace(/(^\s*)|(\s*$)/gi, ''); // 데이터 배열에 지금 가지고 온 데이터를 input_tmp 변수에 담아라

      data_tmp += '/괄호영소' + arrStandard[i] + ' ' + input_tmp + '/.괄호영소'; // 변환된 정보를 data_tmp 변수에 담아라           ★ 변수 기준 바꿀 때 여기 체크

      input_tmp = ''; // input_tmp 변수 초기화

      pushData_result(); // textarea #txt_example 에 출력하기
    } else if (data_example.indexOf(text_standard) < 0) {
      // 보기문에서 다음단계 기준값이 없다면 반복 종료
      data_tmp = '/보기문';
      break;
    }
  }
}

// /괄호영대 - (A) (B)
function convertor_WrapEngBig() {
  inputData();
  clearData();

  arrStandard = [' (A)', ' (B)', ' (C)', ' (D)', ' (E)', ' (F)', ' (G)', ' (H)', ' (I)', ' (J)', ' (K)', ' (L)', ' (M)', ' (N)', ' (O)', ' (P)', ' (Q)', ' (R)', ' (S)', ' (T)', ' (U)', ' (V)', ' (W)', ' (X)', ' (Y)', ' (Z)'];

  for (var i = 0; i < arrStandard.length; i++) {
    text_standard = arrStandard[i];

    if (data_example.indexOf(text_standard) > -1) {
      var j = i + 1;
      var indexStart = '';
      var indexEnd = '';

      indexStart = data_example.indexOf(text_standard);

      text_standard_next = arrStandard[j];

      if (data_example.indexOf(text_standard_next) > -1) {
        indexEnd = data_example.indexOf(text_standard_next);
        data_tmp += '\n';
      } else {
        indexEnd = data_example.length;
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 4, indexEnd).replace(/(^\s*)|(\s*$)/gi, '');

      data_tmp += '/괄호영대' + arrStandard[i] + ' ' + input_tmp + '/.괄호영대';

      input_tmp = '';

      pushData_result();
    } else if (data_example.indexOf(text_standard) < 0) {
      data_tmp = '/보기문';
      break;
    }
  }
}

// /괄호숫자 - (1) (2) (/괄호영소 동일)
function convertor_WrapNumber() {
  inputData();
  clearData();

  arrStandard = [' (1)', ' (2)', ' (3)', ' (4)', ' (5)', ' (6)', ' (7)', ' (8)', ' (9)', ' (10)', ' (11)', ' (12)', ' (13)', ' (14)', ' (15)', ' (16)', ' (17)', ' (18)', ' (19)', ' (20)'];

  for (var i = 0; i < arrStandard.length; i++) {
    text_standard = arrStandard[i];

    if (data_example.indexOf(text_standard) > -1) {
      var j = i + 1;
      var indexStart = '';
      var indexEnd = '';

      indexStart = data_example.indexOf(text_standard);

      text_standard_next = arrStandard[j];

      if (data_example.indexOf(text_standard_next) > -1) {
        indexEnd = data_example.indexOf(text_standard_next);
        data_tmp += '\n';
      } else {
        indexEnd = data_example.length;
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 4, indexEnd).replace(/(^\s*)|(\s*$)/gi, '');

      data_tmp += '/괄호영소' + arrStandard[i] + ' ' + input_tmp + '/.괄호영소';
      // data_tmp += '/괄호숫자'+arrStandard[i]+' '+input_tmp+'/.괄호숫자';   // 추후 변경

      input_tmp = '';

      pushData_result();
    } else if (data_example.indexOf(text_standard) < 0) {
      data_tmp = '/보기문';
      break;
    }
  }
}

// /괄호한글(기호) → /괄호한글 변환 (예시. ㈎ → (가))
function convertor_GihoWrapKor() {
  inputData();
  clearData();

  arrStandard = [' ㈎', ' ㈏', ' ㈐', ' ㈑', ' ㈒', ' ㈓', ' ㈔', ' ㈕', ' ㈖', ' ㈗', ' ㈘', ' ㈙', ' ㈚', ' ㈛'];
  arrStandard_convertor = [' (가)', ' (나)', ' (다)', ' (라)', ' (마)', ' (바)', ' (사)', ' (아)', ' (자)', ' (차)', ' (카)', ' (타)', ' (파)', ' (하)'];

  for (var i = 0; i < arrStandard.length; i++) {
    text_standard = arrStandard[i];

    if (data_example.indexOf(text_standard) > -1) {
      var j = i + 1;
      var indexStart = '';
      var indexEnd = '';

      indexStart = data_example.indexOf(text_standard);

      text_standard_next = arrStandard[j];

      if (data_example.indexOf(text_standard_next) > -1) {
        indexEnd = data_example.indexOf(text_standard_next);
        data_tmp += '\n';
      } else {
        indexEnd = data_example.length;
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 2, indexEnd).replace(/(^\s*)|(\s*$)/gi, '');

      data_tmp += '/괄호한글' + arrStandard_convertor[i] + ' ' + input_tmp + '/.괄호한글';

      input_tmp = '';

      pushData_result();
    } else if (data_example.indexOf(text_standard) < 0) {
      data_tmp = '/보기문';
      break;
    }
  }
}

// /괄호한글자음(기호) → /괄호한글자음 변환 (예시. ㈀ → (ㄱ))
function convertor_GihoWrapKorJa() {
  inputData();
  clearData();

  arrStandard = [' ㈀', ' ㈁', ' ㈂', ' ㈃', ' ㈄', ' ㈅', ' ㈆', ' ㈇', ' ㈈', ' ㈉', ' ㈊', ' ㈋', ' ㈌', ' ㈍'];
  arrStandard_convertor = [' (ㄱ)', ' (ㄴ)', ' (ㄷ)', ' (ㄹ)', ' (ㅁ)', ' (ㅂ)', ' (ㅅ)', ' (ㅇ)', ' (ㅈ)', ' (ㅊ)', ' (ㅋ)', ' (ㅌ)', ' (ㅍ)', ' (ㅎ)'];

  for (var i = 0; i < arrStandard.length; i++) {
    text_standard = arrStandard[i];

    if (data_example.indexOf(text_standard) > -1) {
      var j = i + 1;
      var indexStart = '';
      var indexEnd = '';

      indexStart = data_example.indexOf(text_standard);

      text_standard_next = arrStandard[j];

      if (data_example.indexOf(text_standard_next) > -1) {
        indexEnd = data_example.indexOf(text_standard_next);
        data_tmp += '\n';
      } else {
        indexEnd = data_example.length;
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 2, indexEnd).replace(/(^\s*)|(\s*$)/gi, '');

      data_tmp += '/괄호한글' + arrStandard_convertor[i] + ' ' + input_tmp + '/.괄호한글';

      input_tmp = '';

      pushData_result();
    } else if (data_example.indexOf(text_standard) < 0) {
      data_tmp = '/보기문';
      break;
    }
  }
}

// /괄호영소(기호) → /괄호영소 변환 (예시. ⒜ → (a))
function convertor_GihoWrapEngSmall() {
  inputData();
  clearData();

  arrStandard = [' ⒜', ' ⒝', ' ⒞', ' ⒟', ' ⒠', ' ⒡', ' ⒢', ' ⒣', ' ⒤', ' ⒥', ' ⒦', ' ⒧', ' ⒨', ' ⒩', ' ⒪', ' ⒫', ' ⒬', ' ⒭', ' ⒮', ' ⒯', ' ⒰', ' ⒱', ' ⒲', ' ⒳', ' ⒴', ' ⒵'];
  arrStandard_convertor = [' (a)', ' (b)', ' (c)', ' (d)', ' (e)', ' (f)', ' (g)', ' (h)', ' (i)', ' (j)', ' (k)', ' (l)', ' (m)', ' (n)', ' (o)', ' (p)', ' (q)', ' (r)', ' (s)', ' (t)', ' (u)', ' (v)', ' (w)', ' (x)', ' (y)', ' (z)'];

  for (var i = 0; i < arrStandard.length; i++) {
    text_standard = arrStandard[i];

    if (data_example.indexOf(text_standard) > -1) {
      var j = i + 1;
      var indexStart = '';
      var indexEnd = '';

      indexStart = data_example.indexOf(text_standard);

      text_standard_next = arrStandard[j];

      if (data_example.indexOf(text_standard_next) > -1) {
        indexEnd = data_example.indexOf(text_standard_next);
        data_tmp += '\n';
      } else {
        indexEnd = data_example.length;
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 2, indexEnd).replace(/(^\s*)|(\s*$)/gi, '');

      data_tmp += '/괄호영소' + arrStandard_convertor[i] + ' ' + input_tmp + '/.괄호영소';

      input_tmp = '';

      pushData_result();
    } else if (data_example.indexOf(text_standard) < 0) {
      data_tmp = '/보기문';
      break;
    }
  }
}

// /괄호숫자(기호) → /괄호숫자 변환 (예시. ⑴ → (1))
function convertor_GihoWrapNumber() {
  inputData();
  clearData();

  arrStandard = [' ⑴', ' ⑵', ' ⑶', ' ⑷', ' ⑸', ' ⑹', ' ⑺', ' ⑻', ' ⑼', ' ⑽', ' ⑾', ' ⑿', ' ⒀', ' ⒁', ' ⒂', ' ⒃', ' ⒄', ' ⒅', ' ⒆', ' ⒇'];
  arrStandard_convertor = [' (1)', ' (2)', ' (3)', ' (4)', ' (5)', ' (6)', ' (7)', ' (8)', ' (9)', ' (10)', ' (11)', ' (12)', ' (13)', ' (14)', ' (15)', ' (16)', ' (17)', ' (18)', ' (19)', ' (20)'];

  for (var i = 0; i < arrStandard.length; i++) {
    text_standard = arrStandard[i];

    if (data_example.indexOf(text_standard) > -1) {
      var j = i + 1;
      var indexStart = '';
      var indexEnd = '';

      indexStart = data_example.indexOf(text_standard);

      text_standard_next = arrStandard[j];

      if (data_example.indexOf(text_standard_next) > -1) {
        indexEnd = data_example.indexOf(text_standard_next);
        data_tmp += '\n';
      } else {
        indexEnd = data_example.length;
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 2, indexEnd).replace(/(^\s*)|(\s*$)/gi, '');

      data_tmp += '/괄호영소' + arrStandard_convertor[i] + ' ' + input_tmp + '/.괄호영소';
      // data_tmp += '/괄호숫자'+arrStandard_convertor[i]+' '+input_tmp+'/.괄호숫자';   // 추후 변경

      input_tmp = '';

      pushData_result();
    } else if (data_example.indexOf(text_standard) < 0) {
      data_tmp = '/보기문';
      break;
    }
  }
}

// /괄호숫자(원형기호) → /괄호숫자 변환 (예시. ① → (1))
function convertor_GihoNumber() {
  inputData();
  clearData();

  arrStandard = [' ①', ' ②', ' ③', ' ④', ' ⑤', ' ⑥', ' ⑦', ' ⑧', ' ⑨', ' ⑩'];
  arrStandard_convertor = [' ➀', ' ➁', ' ➂', ' ➃', ' ➄', ' ➅', ' ➆', ' ➇', ' ➈', ' ➉'];

  for (var i = 0; i < arrStandard.length; i++) {
    text_standard = arrStandard[i];

    if (data_example.indexOf(text_standard) > -1) {
      var j = i + 1;
      var indexStart = '';
      var indexEnd = '';

      indexStart = data_example.indexOf(text_standard);

      text_standard_next = arrStandard[j];

      if (data_example.indexOf(text_standard_next) > -1) {
        indexEnd = data_example.indexOf(text_standard_next);
        data_tmp += '\n';
      } else {
        indexEnd = data_example.length;
        data_tmp += '\n';
      }

      input_tmp = data_example.substring(indexStart + 2, indexEnd).replace(/(^\s*)|(\s*$)/gi, '');

      data_tmp += '/서클' + arrStandard_convertor[i] + ' ' + input_tmp + '/.서클';
      // data_tmp += '/괄호숫자'+arrStandard_convertor[i]+' '+input_tmp+'/.괄호숫자';   // 추후 변경

      input_tmp = '';

      pushData_result();
    } else if (data_example.indexOf(text_standard) < 0) {
      data_tmp = '/보기문';
      break;
    }
  }
}
