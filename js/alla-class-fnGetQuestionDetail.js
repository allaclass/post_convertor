let fnGetQuestionDetail = (str, simbol, type) => {
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
    // 예시)
    // [
    //   { type: 'simbol', content: '1\\.', index: 1 },
    //   { type: 'example_txt', content: '/보기문', index: 13 },
    //   { type: 'example_img', content: '/보기그림', index: 28 },
    //   { type: 'example_txt', content: '/보기문', index: 43 },
    //   { type: 'select_1', content: '①', index: 58 },
    //   { type: 'select_2', content: '②', index: 62 },
    //   { type: 'select_3', content: '③', index: 66 },
    //   { type: 'select_4', content: '④', index: 70 },
    //   { type: 'solve', content: '/해설', index: 74 }
    // ]
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
    // 예시)
    // { type: 'simbol', content: '1.' }
    // { type: 'question', content: '문제 질문 내용' }
    // { type: 'example_txt', content: '/보기문\n첫번째 보기문' }
    // { type: 'example_img', content: '/보기그림\n첫번째 보기그림' }
    // { type: 'example_txt', content: '/보기문\n두번째 보기문' }
    // { type: 'select_1', content: '① ㉠' }
    // { type: 'select_2', content: '② ㉡' }
    // { type: 'select_3', content: '③ ㉢' }
    // { type: 'select_4', content: '④ ㉣' }
    // { type: 'solve', content: '/해설\n해설 내용입니다.' }
  };

  // --------------------------------------------------------------------------------------
  // ------------------------------------ EXE FUNCTION ------------------------------------
  // --------------------------------------------------------------------------------------

  // 패턴 셋팅 함수 호출 (type, simbol, str 받아야함)
  let patterns = setPatterns(type, simbol);

  // str을 패턴으로 index 구분하는 함수 호출
  const indices = findAllIndices(str, patterns);
  // console.log(indices);

  // 내용 가져오는 함수 호출
  const contents = findAllContents(indices);
  return contents;
};

// --------------------------------------------------------------------------------------
// ---------------------------------------- TEST ----------------------------------------
// --------------------------------------------------------------------------------------

// 예시)
// [
//   { type: 'simbol', content: '1.' }
//   { type: 'question', content: '문제 질문 내용' }
//   { type: 'example_txt', content: '/보기문\n첫번째 보기문' }
//   { type: 'example_img', content: '/보기그림\n첫번째 보기그림' }
//   { type: 'example_txt', content: '/보기문\n두번째 보기문' }
//   { type: 'select_1', content: '① ㉠' }
//   { type: 'select_2', content: '② ㉡' }
//   { type: 'select_3', content: '③ ㉢' }
//   { type: 'select_4', content: '④ ㉣' }
//   { type: 'solve', content: '/해설\n해설 내용입니다.' }
// ]

// let type = 'group';
// let simbol = `※\\.`;
// let str = `
// ※.
// 문제 질문 내용
// /보기문
// 첫번째 보기문
// /보기그림
// 첫번째 보기그림
// `;

// let type = 'normal';
// let simbol = `1\\.`;
// let str = `
// 1.
// 문제 질문 내용
// /보기문
// 첫번째 보기문
// /보기그림
// 첫번째 보기그림
// /보기문
// 두번째 보기문
// ① ㉠
// ② ㉡
// ③ ㉢
// ④ ㉣
// /해설
// 해설 내용입니다.
// `;

// let detail = fnGetQuestionDetail(str, simbol, type);

// detail.forEach((item) => {
//   console.log(item);
// });
