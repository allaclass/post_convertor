// 보기문, 보기그림 찾을 때 사용
// let str = `
// 1.
// 문제 질문 내용
// /보기문
// 첫번째 보기문
// /보기그림
// 첫번째 보기그림
// ① ㉠
// ② ㉡
// ③ ㉢
// ④ ㉣
// /해설
// 해설 내용입니다.
// `;

let str = `
※.
(1~2) 그룹 문제 지문
/보기문
그룹 문제 보기문 내용

1. 1번 문제 지문
① ⓐ
② ⓑ
③ ⓒ
④ ⓓ

2. 2번 문제 지문
/보기그림
그림
① ⓐ
② ⓑ
③ ⓒ
④ ⓓ

※. (3~4) 그룹 문제 지문
/보기문
그룹 문제 보기문 내용

3.
3번 문제 지문
① ⓐ
② ⓑ
③ ⓒ
④ ⓓ

4. 4번 문제 지문
/보기그림
그림
① ⓐ  
② ⓑ
③ ⓒ  
④ ⓓ

5. 5번 문제 지문
/보기그림
그림
① ⓐ  
② ⓑ
③ ⓒ  
④ ⓓ

`;

// 패턴들의 모든 인덱스를 가져오는 함수
let findAllIndices = (str, patterns) => {
  let indices = [];
  patterns.forEach((pattern) => {
    const regex = new RegExp(`${pattern}`, 'g');
    let match;
    while ((match = regex.exec(str)) !== null) {
      let inputPattern = pattern.replace('\\.', '.');
      indices.push({ content: inputPattern, index: match.index });
    }
  });
  indices.sort((a, b) => a.index - b.index);
  return indices;
};

// 패턴배열에 패턴 채우기 함수
// 예시 : [`※\\.`, `1\\.`, `2\\.`, `3\\.`, `4\\.`];
let setPatterns = (eNum) => {
  let arrPatterns = [];
  for (let i = 0; i <= eNum; i++) {
    if (i === 0) {
      arrPatterns.push(`※\\.`);
    } else {
      arrPatterns.push(`${i}\\.`);
    }
  }
  return arrPatterns;
};

// findAllIndices()의 index들을 토대로 내용 가져오기
let findAllContents = (indices) => {
  let arrContents = [];
  for (let i = 1; i <= indices.length; i++) {
    let j = i - 1;
    let item_current_index = indices[j].index;
    let item_current_content = indices[j].content;
    if (i !== indices.length) {
      let item_rear_index = indices[i].index;
      let temp = str.substring(item_current_index + item_current_content.length, item_rear_index).trim();
      // console.log(`${item_current_content}\n${temp}\n`);
      arrContents.push(`${item_current_content}\n${temp}\n`);
    } else {
      let temp = str.substring(item_current_index + item_current_content.length, str.length).trim();
      // console.log(`${item_current_content}\n${temp}\n`);
      arrContents.push(`${item_current_content}\n${temp}\n`);
    }
  }
  return arrContents;
};

// 패턴 자동으로 채우기 함수 호출
let patterns = setPatterns(100);

// str 문제 index로 구분하는 함수 호출
const indices = findAllIndices(str, patterns);
console.log(indices);

// 내용 가져오는 함수 호출
const contents = findAllContents(indices);
console.log(contents);
// contents.forEach((item) => {
//   console.log(item);
// });
