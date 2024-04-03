let infoDataStartNum = 1;
let infoDataEndNum = 3;
// const input = `
// /#/ 첫번째 그룹 문제 지문
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

// /#/ 두번째 그룹 문제 지문
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

const input = `/#/ 첫번째 그룹 문제 지문
/보기문
첫번째 그룹문제 보기문 내용
`;

let parseQuestions = (txtBoxInputData) => {
  let inputData = txtBoxInputData.split('\n');
  let startNumber = infoDataStartNum;
  let endNumber = infoDataEndNum;
  let arrQuestions = [];

  let currentGroup = {};
  let currentQuestion = {};

  for (let i = 0; i < inputData.length; i++) {
    let line = inputData[i].trim();
    console.log(line);
    // if (line.startsWith('/#/')) {
    // let objQuestion = {};
    // let objExample = {};
    // objQuestion = {
    //   kind: 'group',
    //   question: line.substring(4).trim(),
    //   example: [],
    // };
    // arrQuestions.push(objQuestion);
  }
};

parseQuestions(input);

// for (let i = 0; i < inputData.length; i++) {
//   let line = inputData[i].trim();

//   if (line.startsWith('/#/')) {
//     if (Object.keys(currentGroup).length !== 0) {
//       arrQuestions.push(currentGroup);
//     }
//     currentGroup = {
//       kind: 'group',
//       question: line.substring(4).trim(),
//       example: [],
//     };
//   } else if (line.startsWith('/보기그림')) {
//     currentQuestion['example'].push({
//       kind: 'image',
//       content: inputData[i + 1].trim(),
//     });
//     i++;
//   } else if (line.startsWith('/보기문')) {
//     currentQuestion['example'].push({
//       kind: 'text',
//       content: inputData[i + 1].trim(),
//     });
//     i++;
//   } else if (line.startsWith('/해설')) {
//     currentQuestion['solve'] = inputData[i + 1].trim();
//     i++;
//   } else if (line.startsWith(String(startNumber))) {
//     if (Object.keys(currentQuestion).length !== 0) {
//       currentGroup['example'].push(currentQuestion);
//     }
//     currentQuestion = {
//       kind: 'normal',
//       question: line.substring(3).trim(),
//       example: [], // 빈 배열로 초기화
//     };
//   } else if (line.startsWith('①') || line.startsWith('②') || line.startsWith('③') || line.startsWith('④')) {
//     let answerNum = parseInt(line.charAt(1)) - 1;
//     currentQuestion['answer-' + (answerNum + 1)] = line.substring(2).trim();
//   }
// }

// if (Object.keys(currentGroup).length !== 0) {
//   arrQuestions.push(currentGroup);
// }
// if (Object.keys(currentQuestion).length !== 0) {
//   currentGroup['example'].push(currentQuestion);
// }

// return arrQuestions.slice(startNumber - 1, endNumber);
// };
