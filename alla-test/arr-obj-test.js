// let arrDetail = [];
// let objDetail = {};

// arrDetail.push({ index: 1, question: '지문내용' });
// arrDetail.push({ index: 0, simbol: '1.' });

// // console.log(arrDetail);

// arrDetail.sort((a, b) => a.index - b.index);

// arrDetail.forEach((item) => {
//   for (let key in item) {
//     if (key !== 'index') {
//       objDetail[key] = item[key];
//     }
//   }
// });

// console.log(objDetail);

let arrDetail = [
  { simbol: 1 },
  { question: '지문내용' },
  { example_img: '[보기그림 주소]' },
  { example_txt: '보기문 내용' },
  { example_img: '[보기그림2 주소]' },
  { example_src: '[보기소스 내용]' },
  { question_add: '추가지문 내용' },
  { select_1: 'ⓐ' },
  { select_2: 'ⓑ' },
  { select_3: 'ⓒ' },
  { select_4: 'ⓓ' },
  // { solve: '' },
];

let srcHtml;
let simbol = arrDetail[0].simbol;
let select_1, select_2, select_3, select_4, solve;

if (simbol === '※') {
  // console.log('그룹문제');
} else {
  // console.log('일반문제');
  for (let i = 1; i < arrDetail.length; i++) {
    let key = Object.keys(arrDetail[i])[0];
    switch (key) {
      case 'question':
        let question = arrDetail[i].question;
        // srcHtml = fnToHTML_normalQuestionQuiz(simbol, question);
        break;
      case 'example_txt':
        let example_txt = arrDetail[i].example_txt;
        // srcHtml += fnToHTML_exampleTxt(example_txt);
        break;
      case 'example_img':
        let example_img = arrDetail[i].example_img;
        // srcHtml += fnToHTML_exampleImg(example_img);
        break;
      case 'example_src':
        let example_src = arrDetail[i].example_src;
        // srcHtml += fnToHTML_exampleSrc(example_src);
        break;
      case 'question_add':
        let question_add = arrDetail[i].question_add;
        // srcHtml += fnToHTML_normalQuestionQuizAdd(question_add);
        break;
      case 'select_1':
        select_1 = arrDetail[i].select_1;
        break;
      case 'select_2':
        select_2 = arrDetail[i].select_2;
        break;
      case 'select_3':
        select_3 = arrDetail[i].select_3;
        break;
      case 'select_4':
        select_4 = arrDetail[i].select_4;
        if (i + 1 == arrDetail.length) {
          solve = '';
          srcHtml += fnToHTML_normalQuestionSelect(simbol, select_1, select_2, select_3, select_4, solve);
        }
        break;
      case 'solve':
        solve = arrDetail[i].solve;
        srcHtml += fnToHTML_normalQuestionSelect(simbol, select_1, select_2, select_3, select_4, solve);
        break;
      default:
    }
  }
}

// - 그룹문제 / 일반문제 구분
if (simbol == '※') {
  // 그룹문제
  // - 그룹문제 시작부
  srcHtml = fnToHTML_groupQuestionTop(question);
  // - 보기문
  if (arrExample_txt.length !== 0) {
    arrExample_txt.forEach((example) => {
      srcHtml += fnToHTML_exampleTxt(example);
    });
  }
  // - 보기그림
  if (arrExample_img.length !== 0) {
    arrExample_img.forEach((example) => {
      srcHtml += fnToHTML_exampleImg(example);
    });
  }
  // - 보기소스
  if (arrExample_src) {
    arrExample_src.forEach((example) => {
      srcHtml += fnToHTML_exampleSrc(example);
    });
  }
  // - 추가지문
  if (question_add) {
    srcHtml += fnToHTML_normalQuestionQuizAdd(question_add);
  }
  // - 그룹문제 종료부
  srcHtml += fnToHTML_groupQuestionBottom();
} else {
  // 일반문제
  // - 일반문제 시작
  srcHtml = fnToHTML_normalQuestionQuiz(simbol, question);
  // - 보기문
  if (arrExample_txt.length !== 0) {
    arrExample_txt.forEach((example) => {
      srcHtml += fnToHTML_exampleTxt(example);
    });
  }
  // - 보기그림
  if (arrExample_img.length !== 0) {
    arrExample_img.forEach((example) => {
      srcHtml += fnToHTML_exampleImg(example);
    });
  }
  // - 보기소스
  if (arrExample_src) {
    arrExample_src.forEach((example) => {
      srcHtml += fnToHTML_exampleSrc(example);
    });
  }
  // - 추가지문
  if (question_add) {
    srcHtml += fnToHTML_normalQuestionQuizAdd(question_add);
  }
  // - 객관식
  srcHtml += fnToHTML_normalQuestionSelect(simbol, select_1, select_2, select_3, select_4, solve);
}
