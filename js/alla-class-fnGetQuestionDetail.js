let fnGetQuestionDetail = (str, simbol, type) => {
  // --------------------------------------------------------------------------------------
  // ----------------------------------- INIT FUNCTION ------------------------------------
  // --------------------------------------------------------------------------------------

  // 패턴 셋팅 함수
  let setPatterns = (type, simbol) => {
    let arrPatterns = [];
    if (type == 'group') {
      arrPatterns = [`/보기문`, `/추가보기문`, `/보기그림`, `/추가보기그림`, `/보기소스`, `/추가지문`];
      arrPatterns.unshift(simbol);
    } else {
      // type == 'normal'
      arrPatterns = [`/보기문`, `/추가보기문`, `/보기그림`, `/추가보기그림`, `/보기소스`, `/추가지문`, `①`, `②`, `③`, `④`, `/해설`];
      arrPatterns.unshift(simbol);
    }
    return arrPatterns;
  };

  // 패턴들의 모든 인덱스를 가져오는 함수
  let getAllIndices = (str, patterns) => {
    let indices = [];
    patterns.forEach((pattern) => {
      const regex = new RegExp(`(${pattern === simbol ? '^' + simbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : pattern})`, 'g');
      let match;
      while ((match = regex.exec(str)) !== null) {
        switch (pattern) {
          case '/보기문':
          case '/추가보기문':
            indices.push({ type: 'example_txt', content: pattern, index: match.index });
            break;
          case '/보기그림':
          case '/추가보기그림':
            indices.push({ type: 'example_img', content: pattern, index: match.index });
            break;
          case '/보기소스':
            indices.push({ type: 'example_src', content: pattern, index: match.index });
            break;
          case '/추가지문':
            indices.push({ type: 'question_add', content: pattern, index: match.index });
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

  // 컨텐츠 불러오는 함수
  let getAllContents = (indices) => {
    let arrContents = [];

    for (let i = 1; i <= indices.length; i++) {
      let j = i - 1;
      let item_current_type = indices[j].type;
      let item_current_content = indices[j].content;
      let item_current_index = indices[j].index;
      let temp;

      if (i !== indices.length) {
        let item_next_type = indices[i].type;
        let item_next_index = indices[i].index;

        temp = str.substring(item_current_index + item_current_content.length, item_next_index).trim();
      } else {
        temp = str.substring(item_current_index + item_current_content.length, str.length).trim();
      }

      if (item_current_type == 'simbol') {
        let simbol = item_current_content;
        if (item_current_index == 0) {
          arrContents.push({ type: item_current_type, content: simbol });
          arrContents.push({ type: 'question', content: temp.replace(`${simbol}\n`, '') });
        }
      } else {
        arrContents.push({ type: item_current_type, content: temp });
      }
    }
    return arrContents;
  };

  // --------------------------------------------------------------------------------------
  // ------------------------------------ EXE FUNCTION ------------------------------------
  // --------------------------------------------------------------------------------------

  // 패턴 셋팅 함수 호출 (type, simbol, str 받아야함)
  let patterns = setPatterns(type, simbol);

  // str을 패턴으로 index 구분하는 함수 호출
  const indices = getAllIndices(str, patterns);

  // 내용 가져오는 함수 호출
  const contents = getAllContents(indices);
  return contents;
};

// --------------------------------------------------------------------------------------
// ---------------------------------------- TEST ----------------------------------------
// --------------------------------------------------------------------------------------

// 예시)
// [
//   { type: 'simbol', content: '1.' }
//   { type: 'question', content: '문제 질문 내용.' }
//   { type: 'example_txt', content: '첫번째 보기문' }
//   { type: 'example_img', content: '첫번째 보기그림' }
//   { type: 'example_txt', content: '두번째 보기문' }
//   { type: 'select_1', content: '㉠' }
//   { type: 'select_2', content: '㉡' }
//   { type: 'select_3', content: '㉢' }
//   { type: 'select_4', content: '㉣' }
//   { type: 'solve', content: '해설 내용입니다.' }
// ]

// ----- 그룹문제 테스트 ------------------------------------

// let type = 'group';
// let simbol = `※`;
// let str = `※
// 문제 질문 내용
// /보기문
// 첫번째 보기문
// /보기그림
// 첫번째 보기그림
// /보기문
// 첫번째 보기문
// /추가지문
// 문제 추가질문 내용
// `;

// let detail = fnGetQuestionDetail(str, simbol, type);

// detail.forEach((item) => {
//   console.log(item);
// });

// ----- 일반문제 테스트 ------------------------------------

// let type = 'normal';
// let simbol = `1.`;
// let str = `1.
// 지문내용
// /보기소스
// <div class='111'></div>
// ① ⓐ
// ② ⓑ
// ③ ⓒ
// ④ ⓓ
// `;

// let detail = fnGetQuestionDetail(str, simbol, type);

// detail.forEach((item) => {
//   console.log(item);
// });
