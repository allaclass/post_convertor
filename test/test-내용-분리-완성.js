// 보기문, 보기그림 찾을 때 사용
let str = `
1.
문제 질문 내용
/보기문
첫번째 보기문  
/보기그림
첫번째 보기그림
/보기문
첫번째 보기문  
① ㉠
② ㉡
③ ㉢
④ ㉣
/해설
해설 내용입니다.
`;

// 패턴들의 모든 인덱스를 가져오는 함수
let findAllIndices = (str, patterns) => {
  let indices = [];
  patterns.forEach((pattern) => {
    const regex = new RegExp(`${pattern}`, 'g');
    let match;
    while ((match = regex.exec(str)) !== null) {
      indices.push({ content: pattern, index: match.index });
    }
  });
  indices.sort((a, b) => a.index - b.index);
  return indices;
};

let findAllContents = (indices, simbol) => {
  let editSimbol = simbol.replace('\\.', '.');
  let arrContents = [editSimbol];
  for (let i = 1; i <= indices.length; i++) {
    let j = i - 1;
    let item_current_index = indices[j].index;
    let item_current_content = indices[j].content;
    if (i !== indices.length) {
      let item_rear_index = indices[i].index;
      let temp = str.substring(item_current_index + item_current_content.length, item_rear_index).trim();
      // console.log(temp);
      arrContents.push(temp);
    } else {
      let temp = str.substring(item_current_index + item_current_content.length, str.length).trim();
      // console.log(temp);
      arrContents.push(temp);
    }
  }
  return arrContents;
};

// 패턴 셋팅 함수
let setPatterns = (simbol) => {
  let arrPatterns = [`/보기문`, `/보기그림`, `①`, `②`, `③`, `④`, `/해설`];
  arrPatterns.unshift(simbol);
  return arrPatterns;
};

// 패턴 셋팅 함수 호출
let simbol = `1\\.`;
let patterns = setPatterns(simbol);
// let patterns = [`1\\.`, `/보기문`, `/보기그림`, `①`, `②`, `③`, `④`, `/해설`];

// str을 패턴으로 index 구분하는 함수 호출
const indices = findAllIndices(str, patterns);
console.log(indices);

// 내용 가져오는 함수 호출
const contents = findAllContents(indices, simbol);
console.log(contents);
// contents.forEach((item) => {
//   console.log(item);
// });
