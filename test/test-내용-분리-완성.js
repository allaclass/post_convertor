// --------------------------------------------------------------------------------------
// ----------------------------------- INIT FUNCTION ------------------------------------
// --------------------------------------------------------------------------------------

// 패턴 셋팅 함수
let setPatterns = (type, simbol) => {
  let arrPatterns = [];
  if (type == 'group') {
    arrPatterns = [`/보기문`, `/보기그림`];
    arrPatterns.unshift(simbol);
  } else {
    // type == 'normal'
    arrPatterns = [`/보기문`, `/보기그림`, `①`, `②`, `③`, `④`, `/해설`];
    arrPatterns.unshift(simbol);
  }
  return arrPatterns;
};

// 패턴들의 모든 인덱스를 가져오는 함수
let findAllIndices = (str, patterns) => {
  let indices = [];
  patterns.forEach((pattern) => {
    const regex = new RegExp(`${pattern}`, 'g');
    let match;
    while ((match = regex.exec(str)) !== null) {
      switch (pattern) {
        case '/보기문':
          indices.push({ type: 'example_txt', content: pattern, index: match.index });
          break;
        case '/보기그림':
          indices.push({ type: 'example_img', content: pattern, index: match.index });
          break;
        case '①':
          indices.push({ type: 'select_1', content: pattern, index: match.index });
          break;
        case '②':
          indices.push({ type: 'select_2', content: pattern, index: match.index });
          break;
        case '③':
          indices.push({ type: 'select_3', content: pattern, index: match.index });
          break;
        case '④':
          indices.push({ type: 'select_4', content: pattern, index: match.index });
          break;
        case '/해설':
          indices.push({ type: 'solve', content: pattern, index: match.index });
          break;
        default:
          indices.push({ type: 'simbol', content: pattern, index: match.index });
      }
    }
  });
  indices.sort((a, b) => a.index - b.index);
  return indices;
};

let findAllContents = (indices) => {
  let arrContents = [];

  for (let i = 1; i <= indices.length; i++) {
    let j = i - 1;
    let item_current_type = indices[j].type;
    let item_current_content = indices[j].content;
    let item_current_index = indices[j].index;
    let temp;

    if (i !== indices.length) {
      let item_next_index = indices[i].index;
      temp = str.substring(item_current_index, item_next_index).trim();
    } else {
      temp = str.substring(item_current_index, str.length).trim();
    }

    if (item_current_type == 'simbol') {
      let editSimbol = item_current_content.replace('\\.', '.');
      arrContents.push({ type: item_current_type, content: editSimbol });
      arrContents.push({ type: 'question', content: temp.replace(`${editSimbol}\n`, '') });
    } else {
      arrContents.push({ type: item_current_type, content: temp });
    }

    // arrContents.push({ type: item_current_type, content: temp });
  }
  return arrContents;
};

// --------------------------------------------------------------------------------------
// ------------------------------------ EXE FUNCTION ------------------------------------
// --------------------------------------------------------------------------------------

// 패턴 셋팅 함수 호출 (type, simbol, str 받아야함)
// let type = 'group';
// let simbol = `※\\.`;
let type = 'normal';
let simbol = `1\\.`;
let str = `
1.
문제 질문 내용
/보기문
첫번째 보기문  
/보기그림
첫번째 보기그림
/보기문
두번째 보기문  
① ㉠
② ㉡
③ ㉢
④ ㉣
/해설
해설 내용입니다.
`;

let patterns = setPatterns(type, simbol);

// str을 패턴으로 index 구분하는 함수 호출
const indices = findAllIndices(str, patterns);
console.log(indices);

// 내용 가져오는 함수 호출
const contents = findAllContents(indices);
// console.log(contents);
contents.forEach((item) => {
  console.log(item);
});
