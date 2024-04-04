// 보기문, 보기그림 찾을 때 사용
let str = `
1.
문제 질문 내용
/보기문
첫번째 보기문  
/보기그림
첫번째 보기그림
① ㉠
② ㉡
③ ㉢
④ ㉣
/해설
해설 내용입니다.
`;

// 정규 표현식을 사용하여 패턴의 모든 인덱스를 가져오는 함수
function findAllIndices(str, patterns) {
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
}

// 패턴의 모든 인덱스를 가져옴
let patterns = [`1.`, `/보기문`, `/보기그림`, `①`, `②`, `③`, `④`, `/해설`];
const indices = findAllIndices(str, patterns);
console.log(indices);

// 내용 가져오는 함수
for (let i = 1; i <= indices.length; i++) {
  let j = i - 1;
  let item_current_index = indices[j].index;
  let item_current_content = indices[j].content;
  if (i !== indices.length) {
    let item_rear_index = indices[i].index;
    let temp = str.substring(item_current_index + item_current_content.length, item_rear_index).trim();
    console.log(temp);
  } else {
    let temp = str.substring(item_current_index + item_current_content.length, str.length).trim();
    console.log(temp);
  }
}
