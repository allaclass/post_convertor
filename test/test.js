// const result = `
// [
//   {
//     'kind' : 'group',
//     'question' : '첫번째 그룹 문제 지문',
//     'example' : [
//       {
//         'kind' : 'text',
//         'content' : '첫번째 그룹문제 보기문 내용'
//       },
//     ],
//     'answer-1' : '',
//     'answer-2' : '',
//     'answer-3' : '',
//     'answer-4' : '',
//     'solve' : ''
//   },
//   {
//     'kind' : 'normal',
//     'question' : '1번 문제 지문',
//     'example' : [],
//     'answer-1' : 'ⓐ',
//     'answer-2' : 'ⓑ',
//     'answer-3' : 'ⓒ',
//     'answer-4' : 'ⓓ',
//     'solve' : '1번 문제에 대한 답은 이래서 이렇다'
//   },
//   {
//     'kind' : 'normal',
//     'question' : '2번 문제 지문',
//     'example' : [
//       {
//         'kind' : 'text',
//         'content' : '2번 첫번째 보기문 내용'
//       },
//       {
//         'kind' : 'text',
//         'content' : '2번 두번째 보기문 내용'
//       },
//     ],
//     'answer-1' : '㉠',
//     'answer-2' : '㉡',
//     'answer-3' : '㉢',
//     'answer-4' : '㉣',
//     'solve' : '2번 문제에 대한 답은 이래서 이렇다'
//   },
//   {
//     'kind' : 'group',
//     'question' : '두번째 그룹 문제 지문',
//     'example' : [
//       {
//         'kind' : 'image',
//         'content' : 'https://static.vecteezy.com/system/resources/thumbnails/004/641/880/small/illustration-of-high-school-building-school-building-free-vector.jpg'
//       },
//     ],
//     'answer-1' : '',
//     'answer-2' : '',
//     'answer-3' : '',
//     'answer-4' : '',
//     'solve' : ''
//   },
//   {
//     'kind' : 'normal',
//     'question' : '3번 문제 지문',
//     'example' : [
//       {
//         'kind' : 'image',
//         'content' : 'https://static.vecteezy.com/system/resources/thumbnails/004/641/880/small/illustration-of-high-school-building-school-building-free-vector.jpg'
//       },
//       {
//         'kind' : 'text',
//         'content' : '3번 두번째 보기문 내용'
//       },
//     ],
//     'answer-1' : '㉠',
//     'answer-2' : '㉡',
//     'answer-3' : '㉢',
//     'answer-4' : '㉣',
//     'solve' : '3번 문제에 대한 답은 이래서 이렇다'
//   },
// ]`

// const input = `
// ※. 첫번째 그룹 문제 지문
// /보기문
// 첫번째 그룹문제 보기문 내용

// 1. 1번 문제 지문
// ① ⓐ
// ② ⓑ
// ③ ⓒ
// ④ ⓓ
// /해설
// 1번 문제에 대한 답은 이래서 이렇다

// 2. 2번 문제 지문
// /보기문
// 2번 첫번째 보기문 내용
// /보기문
// 2번 두번째 보기문 내용
// ① ㉠
// ② ㉡
// ③ ㉢
// ④ ㉣
// /해설
// 2번 문제에 대한 답은 이래서 이렇다

// ※. 두번째 그룹 문제 지문
// /보기그림
// https://static.vecteezy.com/system/resources/thumbnails/004/641/880/small/illustration-of-high-school-building-school-building-free-vector.jpg

// 3. 3번 문제 지문
// /보기그림
// https://static.vecteezy.com/system/resources/thumbnails/004/641/880/small/illustration-of-high-school-building-school-building-free-vector.jpg
// /보기문
// 3번 두번째 보기문 내용
// ① ㉠
// ② ㉡
// ③ ㉢
// ④ ㉣
// /해설
// 3번 문제에 대한 답은 이래서 이렇다`;

const txtBoxInputData = `

2. 2번 문제 지문
① ⓐ
② ⓑ
③ ⓒ
④ ⓓ

3. 3번 문제 지문
① ⓐ
② ⓑ
③ ⓒ
④ ⓓ
`;

let parseQuestions = (txtBoxInputData) => {
  const infoDataStartNum = 1;
  const infoDataEndNum = 3;
  let findStartNumberIndexText;
  let findNextNumberIndexText;
  const findGroupSimbolIndexText = `※.`;

  let fnTemp = (frontIndex, rearIndex) => {
    return txtBoxInputData.substring(frontIndex, rearIndex).trim();
  };

  let fnFindGroupIndex = (temp) => {
    return temp.indexOf(findGroupSimbolIndexText);
  };

  // ------------

  let endIndex = txtBoxInputData.length;

  findStartNumberIndexText = `${infoDataStartNum}.`;
  findNextNumberIndexText = `${infoDataStartNum + 1}.`;
  let startNumberIndex = txtBoxInputData.indexOf(findStartNumberIndexText);
  let nextNumberIndex = txtBoxInputData.indexOf(findNextNumberIndexText);

  let temp;
  let questionBeforeGroupQuestionIndex;

  temp = fnTemp(0, nextNumberIndex);
  // temp = fnTemp(startNumberIndex, nextNumberIndex);
  questionBeforeGroupQuestionIndex = fnFindGroupIndex(temp); // 그룹문제 기호 찾아

  console.log(`
  startNumberIndex: ${startNumberIndex}
  nextNumberIndex: ${nextNumberIndex}
  questionBeforeGroupQuestionIndex: ${questionBeforeGroupQuestionIndex}
  `);

  if (questionBeforeGroupQuestionIndex >= 0 && questionBeforeGroupQuestionIndex < startNumberIndex) {
    // 첫번째 문제 앞 그룹문제 있을 경우
    temp = fnTemp(questionBeforeGroupQuestionIndex, startNumberIndex);
  } else if (startNumberIndex === 0) {
    if (questionBeforeGroupQuestionIndex > startNumberIndex && questionBeforeGroupQuestionIndex < nextNumberIndex) {
      temp = fnTemp(startNumberIndex, questionBeforeGroupQuestionIndex);
    } else {
      temp = fnTemp(startNumberIndex, nextNumberIndex);
    }
  } else {
    // 그룹문제가 없을 경우
    temp = fnTemp(startNumberIndex, nextNumberIndex);
  }

  console.log(temp);

  // ------------

  // for (let i = 0; i < infoDataEndNum * 2; i++) {
  //   let frontIndex;
  //   let rearIndex;
  //   let endIndex = txtBoxInputData.length;

  //   findStartNumberIndexText = `${infoDataStartNum + i}.`;
  //   findNextNumberIndexText = `${infoDataStartNum + 1 + i}.`;
  //   let startNumberIndex = txtBoxInputData.indexOf(findStartNumberIndexText);
  //   let nextNumberIndex = txtBoxInputData.indexOf(findNextNumberIndexText);

  //   let temp;
  //   let questionBeforeGroupQuestionIndex;

  //   if (i === 0) {
  //     temp = fnTemp(0, nextNumberIndex);
  //     questionBeforeGroupQuestionIndex = fnFindGroupIndex(temp); // 그룹문제 기호 찾아

  //     if (questionBeforeGroupQuestionIndex < startNumberIndex) {
  //       // 첫번째 문제 앞 그룹문제 있을 경우
  //       temp = fnTemp(questionBeforeGroupQuestionIndex, startNumberIndex);
  //     } else if (startNumberIndex === 0) {
  //       if (questionBeforeGroupQuestionIndex > startNumberIndex && questionBeforeGroupQuestionIndex < nextNumberIndex) {
  //         temp = fnTemp(startNumberIndex, questionBeforeGroupQuestionIndex);
  //       } else {
  //         temp = fnTemp(startNumberIndex, nextNumberIndex);
  //       }
  //     } else {
  //       // 그룹문제가 없을 경우
  //       temp = fnTemp(startNumberIndex, nextNumberIndex);
  //     }
  //   } else {
  //     temp = fnTemp(startNumberIndex, nextNumberIndex);
  //     questionBeforeGroupQuestionIndex = fnFindGroupIndex(temp); // 그룹문제 기호 찾아

  //     if (questionBeforeGroupQuestionIndex < startNumberIndex) {
  //       // 첫번째 문제 앞 그룹문제 있을 경우
  //       temp = fnTemp(questionBeforeGroupQuestionIndex, startNumberIndex);
  //     } else if (startNumberIndex === 0) {
  //       if (questionBeforeGroupQuestionIndex > startNumberIndex && questionBeforeGroupQuestionIndex < nextNumberIndex) {
  //         temp = fnTemp(startNumberIndex, questionBeforeGroupQuestionIndex);
  //       } else {
  //         temp = fnTemp(startNumberIndex, nextNumberIndex);
  //       }
  //     } else {
  //       // 그룹문제가 없을 경우
  //       temp = fnTemp(startNumberIndex, nextNumberIndex);
  //     }
  //   }
  //   console.log(i);
  //   console.log(temp);
  // }
};

parseQuestions(txtBoxInputData);
