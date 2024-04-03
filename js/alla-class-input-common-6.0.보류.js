// 제    목 : alla-input-common-6.0.1.js
// 작 성 자 : 김현수
// 작 성 일 : 2024.04.02

// ------------------------------------------
// 가. 전역 변수 지정
// ------------------------------------------

// 1. 텍스트박스 주소값 지정
let txtBoxInputData = document.getElementById('txtBoxInputData');
let txtBoxOutputData = document.getElementById('txtBoxOutputData');
let txtBoxOutputHtml = document.getElementById('txtBoxOutputHtml');
let txtBoxInfo = document.getElementById('txt_info');
let txtBoxTitle = document.getElementById('txt_title');
let txtBoxTag = document.getElementById('txt_tag');

// 2. 일반 변수
let infoDataObject;
let infoDataKind;
let infoDataYear;
let infoDataSeme;
let infoDataGrade;
let infoDataProf;
let infoDataRange;
let infoDataStartNum;
let infoDataEndNum;
let infoDataCountNum;
let infoDataThumb;
let infoDataAnswer;

// 3. 변환 시, 사용할 배열 선언
let arrLv1 = [];
let arrLv2 = [];
let arrTitle = [];
let arrAnswer = [];

// 4. HTML 변환 시, 사용할 변수 선언
let toHTML_MobileUrlNo = '';
let toHTML_Thumb = '';
let toHTML_NoticeTop = '';
let toHTML_Guide = '';
let toHTML_Title = '';
let toHTML_ExampleTxt = '';
let toHTML_ExampleImg = '';
let toHTML_GroupQuestionQuiz = '';
let toHTML_GroupQuestionEnd = '';
let toHTML_QuestionQuiz = '';
let toHTML_QuestionAnswer = '';
let toHTML_QuestionCheck = '';
let toHTML_AnswerTable = '';
let toHTML_NoticeBottom = '';

// ------------------------------------------
// 다. 다이렉트 실행문
// ------------------------------------------

// 1. 함수 선언
// 1-1. 타이틀정보 가이드라인 초기값 입력
let fnTxtBoxTitle = () => {
  txtBoxInfo.value = '[과목명] \n[종  류] \n[연  도] \n[학  기] \n[학  년] \n[교수명] \n[셤범위] \n[시작넘] \n[종료넘] \n[썸네일] \n[정  답] ';
};

// 2. 함수 호출
fnTxtBoxTitle();

// ------------------------------------------
// 나. 호출 실행문
// ------------------------------------------

// 1. 타이틀 정보 변수에 할당 함수
let fnQuestionInfo = () => {
  // 1-1. 인포박스 내용 가져오기
  let infoDataAll = txtBoxInfo.value;
  // 1-2. 인덱스 라벨링
  let infoIndexObject = infoDataAll.indexOf('[과목명]');
  let infoIndexKind = infoDataAll.indexOf('[종  류]');
  let infoIndexYear = infoDataAll.indexOf('[연  도]');
  let infoIndexSeme = infoDataAll.indexOf('[학  기]');
  let infoIndexGrade = infoDataAll.indexOf('[학  년]');
  let infoIndexProf = infoDataAll.indexOf('[교수명]');
  let infoIndexRange = infoDataAll.indexOf('[셤범위]');
  let infoIndexStartNum = infoDataAll.indexOf('[시작넘]');
  let infoIndexEndNum = infoDataAll.indexOf('[종료넘]');
  let infoIndexThumb = infoDataAll.indexOf('[썸네일]');
  let infoIndexAnswer = infoDataAll.indexOf('[정  답]');
  let infoIndexLength = infoDataAll.length;
  // 1-3. 내용만 발라내서 변수에 할당
  infoDataObject = infoDataAll.substring(infoIndexObject + 5, infoIndexKind).replace(/(^\s*)|(\s*$)/gi, ''); // 1-3-1. 과목명
  infoDataKind = infoDataAll.substring(infoIndexKind + 6, infoIndexYear).replace(/(^\s*)|(\s*$)/gi, ''); // 1-3-2. 종류
  infoDataYear = infoDataAll.substring(infoIndexYear + 6, infoIndexSeme).replace(/(^\s*)|(\s*$)/gi, ''); // 1-3-3. 연도
  infoDataSeme = infoDataAll.substring(infoIndexSeme + 6, infoIndexGrade).replace(/(^\s*)|(\s*$)/gi, ''); // 1-3-4. 학기
  infoDataGrade = infoDataAll.substring(infoIndexGrade + 6, infoIndexProf).replace(/(^\s*)|(\s*$)/gi, ''); // 1-3-5. 학년
  infoDataProf = infoDataAll.substring(infoIndexProf + 5, infoIndexRange).replace(/(^\s*)|(\s*$)/gi, ''); // 1-3-6. 교수명
  infoDataRange = infoDataAll.substring(infoIndexRange + 5, infoIndexStartNum).replace(/(^\s*)|(\s*$)/gi, ''); // 1-3-7. 셤범위
  infoDataStartNum = Number(infoDataAll.substring(infoIndexStartNum + 5, infoIndexEndNum).replace(/(^\s*)|(\s*$)/gi, '')); // 1-3-8. 문제 시작 번호
  infoDataEndNum = Number(infoDataAll.substring(infoIndexEndNum + 5, infoIndexThumb).replace(/(^\s*)|(\s*$)/gi, '')); // 1-3-9. 문제 종료 번호
  infoDataCountNum = infoDataEndNum - infoDataStartNum + 1; // 1-3-10. 총문항수
  infoDataThumb = infoDataAll.substring(infoIndexThumb + 5, infoIndexAnswer).replace(/(^\s*)|(\s*$)/gi, ''); // 1-3-10. 썸네일
  infoDataAnswer = infoDataAll.substring(infoIndexAnswer + 6, infoIndexLength).replace(/(^\s*)|(\s*$)/gi, ''); // 1-3-11. 정답
};

// 2. 텍스트박스(타이틀) 자동 작성 함수
let fnInputTxtBoxTitle = () => {
  txtBoxTitle.value = `방송대 방통대 ${infoDataObject} ${infoDataKind}시험 20${infoDataYear}년도 ${infoDataSeme}학기 ${infoDataGrade}학년 / 올에이클래스 기출문제 모의고사`;
};

// 3. 텍스트박스(태그) 자동 작성 함수
let fnInputTxtBoxTag = () => {
  txtBoxTag.value = `${infoDataObject} ${infoDataKind}시험`;
};

// 4. 텍스트박스(인포) 작성 시 텍스트박스(타이틀, 태그) 자동 작성 함수
let fnInputTxtInfoTyping = () => {
  fnQuestionInfo(); // 인포데이터 내용 발라내기
  fnInputTxtBoxTitle(); // 텍스트박스(타이틀) 입력
  fnInputTxtBoxTag(); // 텍스트박스(태그) 입력
};

let consolelog = () => {
  console.log(`
  infoDataObject: ${infoDataObject}
  infoDataKind: ${infoDataKind}
  infoDataYear: ${infoDataYear}
  infoDataSeme: ${infoDataSeme}
  infoDataGrade: ${infoDataGrade}
  infoDataProf: ${infoDataProf}
  infoDataRange: ${infoDataRange}
  infoDataStartNum: ${infoDataStartNum}
  infoDataEndNum: ${infoDataEndNum}
  infoDataCountNum: ${infoDataCountNum}
  infoDataThumb: ${infoDataThumb}
  infoDataAnswer: ${infoDataAnswer}
  `);
};

let lv1 = () => {
  // let countGlobalNum = 0;
  let forEnd = 100;

  for (let i = 0; i < forEnd; i++) {
    let countStartNum = infoDataStartNum + i;
    let countNextNum = countStartNum + 1;
    let countEndNum = infoDataEndNum;

    // 문제영역 나누기용 Index 설정
    let groupQuestionStartIndex = txtBoxInputData.value.indexOf('/' + String(countStartNum) + '/');
    let groupQuestionNextIndex = txtBoxInputData.value.indexOf('/' + String(countNextNum) + '/');
    let questionStartIndex = txtBoxInputData.value.indexOf(String(countStartNum) + '.');
    let questionNextIndex = txtBoxInputData.value.indexOf(String(countNextNum) + '.');
    let questionEndIndex = txtBoxInputData.value.length;

    // 중간점검 콘솔로그
    // console.log(`
    // groupQuestionStartIndex: ${groupQuestionStartIndex}
    // groupQuestionNextIndex: ${groupQuestionNextIndex}
    // questionStartIndex: ${questionStartIndex}
    // questionNextIndex: ${questionNextIndex}
    // questionEndIndex: ${questionEndIndex}
    // `);

    // 실행문
    if (groupQuestionStartIndex >= 0) {
      // 그룹문제문 유효 시
    }
  }
};

let btn1 = () => {
  fnQuestionInfo(); // 인포데이터 내용 발라내기
};
