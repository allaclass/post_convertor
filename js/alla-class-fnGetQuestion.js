let fnGetQuestion = (str, eNum, enter) => {
  // --------------------------------------------------------------------------------------
  // ----------------------------------- INIT FUNCTION ------------------------------------
  // --------------------------------------------------------------------------------------

  // 패턴배열에 패턴 채우기 함수 (예시: [`※.`, `1.`, `2.`, `3.`, `4.`])
  let setPatterns = (eNum) => {
    // 패턴을 담을 배열 생성
    let arrPatterns = [];
    // 0부터 eNum까지 순회
    for (let i = 0; i <= eNum; i++) {
      // 0일 때는 arrPattern에 ※을 담기
      if (i === 0) {
        arrPatterns.push(`※`);
      } else {
        // 나머지일 때는 arrPattern에 i. 담기
        // arrPatterns.push(`${i}\\.`);
        arrPatterns.push(`${i}.`);
      }
    }
    return arrPatterns;
  };

  // 패턴들의 모든 인덱스를 가져오는 함수
  // let getAllIndices = (str, patterns, enter) => {
  //   // 인덱스들 담을 배열 선언
  //   let indices = [];

  //   // 패턴배열 순환문
  //   patterns.forEach((pattern) => {
  //     // enter = '\n'일 경우
  //     let regex = new RegExp(`\n${pattern}${enter}`, 'g');
  //     let match;
  //     while ((match = regex.exec(str)) !== null) {
  //       let type;
  //       pattern == '※' ? (type = 'group') : (type = 'normal');
  //       indices.push({ type, simbol: pattern, index: match.index + 1 });
  //     }
  //     // enter = '\u0020'일 경우
  //     regex = new RegExp(`\n${pattern}${'U0020'}`, 'g');
  //     while ((match = regex.exec(str)) !== null) {
  //       let type;
  //       pattern == '※' ? (type = 'group') : (type = 'normal');
  //       indices.push({ type, simbol: pattern, index: match.index + 1 });
  //     }
  //     // enter = ''일 경우
  //     regex = new RegExp(`\n${pattern}`, 'g');
  //     while ((match = regex.exec(str)) !== null) {
  //       let type;
  //       pattern == '※' ? (type = 'group') : (type = 'normal');
  //       indices.push({ type, simbol: pattern, index: match.index + 1 });
  //     }
  //   });
  //   indices.sort((a, b) => a.index - b.index);
  //   return indices;
  // };
  // let getAllIndices = (str, patterns, enter) => {
  //   let indices = [];

  //   patterns.forEach((pattern) => {
  //     let regex;
  //     let match;

  //     // enter = '\n'
  //     if (pattern === '※') {
  //       regex = new RegExp(`\\n${pattern}${enter}`, 'g');
  //     } else {
  //       regex = new RegExp(`\\n${pattern.replace(/\./g, '\\.')}${enter}`, 'g');
  //     }
  //     while ((match = regex.exec(str)) !== null) {
  //       let type = pattern === '※' ? 'group' : 'normal';
  //       indices.push({
  //         type: type,
  //         simbol: pattern,
  //         index: match.index + 1,
  //       });
  //     }
  //   });

  //   indices.sort((a, b) => a.index - b.index);
  //   return indices;
  // };

  let getAllIndices = (str, patterns, enter) => {
    let indices = [];

    patterns.forEach((pattern) => {
      let regex;
      let match;

      let currentEnter = enter;

      do {
        if (pattern === '※') {
          regex = new RegExp(`\\n${pattern}${currentEnter}`, 'g');
        } else {
          regex = new RegExp(`\\n${pattern.replace(/\./g, '\\.')}${currentEnter}`, 'g');
        }

        while ((match = regex.exec(str)) !== null) {
          let type = pattern === '※' ? 'group' : 'normal';
          indices.push({
            type: type,
            simbol: pattern,
            index: match.index + 1,
          });
        }

        // Adjust enter for the next iteration
        if (currentEnter === '\n') {
          currentEnter = '\u0020'; // Change to '\u0020'
        } else if (currentEnter === '\u0020') {
          currentEnter = ''; // Change to ''
        } else {
          break; // No more options to try
        }

        // Reset regex lastIndex for global search
        regex.lastIndex = 0;
      } while (currentEnter !== ''); // Continue until enter is ''
    });

    indices.sort((a, b) => a.index - b.index);
    // console.log(indices);
    return indices;
  };

  // index들을 토대로 내용 가져오기
  let getAllContents = (indices) => {
    let arrContents = [];
    for (let i = 1; i <= indices.length; i++) {
      let j = i - 1;
      let item_current_type = indices[j].type;
      let item_current_simbol = indices[j].simbol;
      let item_current_editSimbol = indices[j].simbol;
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
    // console.log(arrContents);
    return arrContents;
  };

  // --------------------------------------------------------------------------------------
  // ------------------------------------ EXE FUNCTION ------------------------------------
  // --------------------------------------------------------------------------------------

  // 패턴 자동으로 채우기 함수 호출
  let patterns = setPatterns(eNum);

  // 문제 index로 구분하는 함수 호출
  // 문제구분 시, 엔터(\n)이 필요하면 etc에 \n할당하여 호출
  const indices = getAllIndices(str, patterns, enter);

  // 구분된 index를 토대로 문제내용을 가져오는 함수 호출
  const contents = getAllContents(indices);

  // 최종적으로 구분된 문제내용 반환
  return contents;
};

// --------------------------------------------------------------------------------------
// ---------------------------------------- TEST ----------------------------------------
// --------------------------------------------------------------------------------------

// let str = `

// 1.1번
// /보기문
// 문제 지문
// ① ⓐ
// ② ⓑ
// ③ ⓒ
// ④ ⓓ

// 2.2번
// /보기문
// 문제 지문
// ① ⓐ
// ② ⓑ
// ③ ⓒ
// ④ ⓓ

// `;

// let eNum = 100;

// let enter = '';

// let contents = fnGetQuestion(str, eNum, enter);

// contents.forEach((item) => {
//   console.log(item);
// });

// `
// ※
// (11~12) 그룹 문제 지문
// /보기문
// 그룹 문제 보기문 내용

// 11. 11번
// /보기문
// 문제 지문
// ① ⓐ
// ② ⓑ
// ③ ⓒ
// ④ ⓓ

// 12.
// 12번 문제 지문
// /보기그림
// 그림
// ① ⓐ
// ② ⓑ
// ③ ⓒ
// ④ ⓓ
//  `;
