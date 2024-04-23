let fnGetQuestion = (str, eNum, etc) => {
  // --------------------------------------------------------------------------------------
  // ----------------------------------- INIT FUNCTION ------------------------------------
  // --------------------------------------------------------------------------------------

  // 패턴배열에 패턴 채우기 함수
  // 예시)
  // [`※\\.`, `1\\.`, `2\\.`, `3\\.`, `4\\.`];
  let setPatterns = (eNum) => {
    let arrPatterns = [];
    for (let i = 0; i <= eNum; i++) {
      if (i === 0) {
        // arrPatterns.push(`※\\.`);
        arrPatterns.push(`※`);
      } else {
        arrPatterns.push(`${i}\\.`);
      }
    }
    return arrPatterns;
  };

  // 패턴들의 모든 인덱스를 가져오는 함수
  let findAllIndices = (str, patterns, etc) => {
    let indices = [];
    patterns.forEach((pattern) => {
      const regex = new RegExp(`\n${pattern}${etc}`, 'g');
      let match;
      while ((match = regex.exec(str)) !== null) {
        let inputPattern = pattern.replace(`\\.`, '.');
        let type;
        inputPattern == '※' ? (type = 'group') : (type = 'normal');
        indices.push({ type, simbol: inputPattern, index: match.index + 1 });
      }
    });
    indices.sort((a, b) => a.index - b.index);
    return indices;
    // 예시)
    // [
    //   { type: 'group', simbol: '※.', index: 1 },
    //   { type: 'normal', simbol: '1.', index: 38 },
    //   { type: 'normal', simbol: '2.', index: 67 },
    //   { type: 'group', simbol: '※.', index: 107 },
    //   { type: 'normal', simbol: '3.', index: 144 },
    //   { type: 'normal', simbol: '4.', index: 173 },
    //   { type: 'normal', simbol: '5.', index: 217 }
    // ]
  };

  // index들을 토대로 내용 가져오기
  let findAllContents = (indices) => {
    let arrContents = [];
    for (let i = 1; i <= indices.length; i++) {
      let j = i - 1;
      let item_current_type = indices[j].type;
      let item_current_simbol = indices[j].simbol;
      let item_current_editSimbol = indices[j].simbol.replace('.', '\\.');
      let item_current_index = indices[j].index;
      if (i !== indices.length) {
        let item_rear_index = indices[i].index;
        let temp = str.substring(item_current_index + item_current_simbol.length, item_rear_index).trim();
        arrContents.push({ type: item_current_type, simbol: item_current_editSimbol, str: `${item_current_simbol}\n${temp}` });
      } else {
        let temp = str.substring(item_current_index + item_current_simbol.length, str.length).trim();
        arrContents.push({ type: item_current_type, simbol: item_current_editSimbol, str: `${item_current_simbol}\n${temp}` });
      }
    }
    return arrContents;
  };

  // --------------------------------------------------------------------------------------
  // ------------------------------------ EXE FUNCTION ------------------------------------
  // --------------------------------------------------------------------------------------

  // 패턴 자동으로 채우기 함수 호출
  let patterns = setPatterns(eNum);

  // 문제 index로 구분하는 함수 호출
  // 문제구분 시, 엔터(\n)이 필요하면 etc에 \n할당하여 호출
  const indices = findAllIndices(str, patterns, etc);
  // test
  // console.log('indices: ', indices);

  // 구분된 index를 토대로 문제내용을 가져오는 함수 호출
  const contents = findAllContents(indices);

  // 최종적으로 구분된 문제내용 반환
  return contents;
};

// --------------------------------------------------------------------------------------
// ---------------------------------------- TEST ----------------------------------------
// --------------------------------------------------------------------------------------

// 예시)
// [
//   {
//     type: 'group',
//     simbol: '※\\.',
//     str: '※.\n(1~2) 그룹 문제 지문\n/보기문\n그룹 문제 보기문 내용'
//   },
//   {
//     type: 'group',
//     simbol: '※\\.',
//     str: '※.\n(1~2) 그룹 문제 지문\n/보기문\n그룹 문제 보기문 내용'
//   }
// ]

// let str = `
// ※.
// (1~2) 그룹 문제 지문
// /보기문
// 그룹 문제 보기문 내용

// 1.
// 1번 문제 지문
// ① ⓐ
// ② ⓑ
// ③ ⓒ
// ④ ⓓ

// 2.
// 2번 문제 지문
// /보기그림
// 그림
// ① ⓐ
// ② ⓑ
// ③ ⓒ
// ④ 3.1

// ※.
// (3~4) 그룹 문제 지문
// /보기문
// 그룹 문제 보기문 내용

// 3.
// 3번 문제 지문
// ① ⓐ
// ② ⓑ
// ③ ⓒ
// ④ ⓓ

// 4.
// 4번 문제 지문
// /보기그림
// 그림
// ① ⓐ
// ② ⓑ
// ③ 3.1
// ④ ⓓ

// 5.
// 5번 문제 지문
// /보기그림
// 그림
// ① ⓐ
// ② ⓑ
// ③ ⓒ
// ④ ⓓ

// `;

// let eNum = 100;

// let etc = '\n';

// let contents = fnGetQuestion(str, eNum, etc);

// contents.forEach((item) => {
//   console.log(item);
// });
