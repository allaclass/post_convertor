const data = `
※.
(1~2) 그룹 문제 지문
/보기문
그룹 문제 보기문 내용

1.
1번 문제 지문
① ⓐ
② ⓑ
③ ⓒ
④ ⓓ

2.
2번 문제 지문
/보기문
2번 첫번째 보기문 내용
① ㉠
② ㉡
③ ㉢
④ ㉣

※.
(3~4) 그룹 문제 지문
/보기문
그룹 문제 보기문 내용

3.
3번 문제 지문
/보기그림
/이미지https://static.vecteezy.com/system/resources/thumbnails/004/641/880/small/illustration-of-high-school-building-school-building-free-vector.jpg/.이미지
① ㉠
② ㉡
③ ㉢
④ ㉣

4.
4번 문제 지문
/보기그림
/이미지https://static.vecteezy.com/system/resources/thumbnails/004/641/880/small/illustration-of-high-school-building-school-building-free-vector.jpg/.이미지
① ㉠
② ㉡
③ ㉢
④ ㉣
`;

// // 정규식을 사용하여 패턴에 맞는 부분을 찾아내는 함수
function findIndexes() {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === '※') {
      if (data[i + 1] === '.') {
        let dataTemp = data.substring(i, data.length).trim();
        let dataIndex = dataTemp.indexOf(`※.`);
        arr.push({ index: dataIndex + i, content: `※.` });
      }
    } else {
      for (let j = 1; j < data.length; j++) {
        if (data[i] == j) {
          if (data[i + 1] === '.') {
            let dataTemp = data.substring(i, data.length).trim();
            let dataIndex = dataTemp.indexOf(`${j}.`);
            arr.push({ content: `${j}.`, index: dataIndex + i });
          }
        }
      }
    }
  }
  return arr;
}

// 시작 번호와 끝 번호에 해당하는 인덱스를 찾음
const indexes = findIndexes();

// 찾은 인덱스 출력
indexes.forEach((item) => {
  console.log(`내용: ${item.content}, 인덱스: ${item.index}`);
});

// let temp = data.substring(67, 115);
// console.log(temp);

// 내용: ※., 인덱스: 1
// 내용: 1., 인덱스: 38
// 내용: 2., 인덱스: 67
// 내용: ※., 인덱스: 115
// 내용: 3., 인덱스: 152
// 내용: 4., 인덱스: 339

// 정규식을 사용하여 패턴에 맞는 부분을 찾아내는 함수
// function findIndexes(startNum, endNum) {
//   const regex = new RegExp(`(\\d+|※)(?=\\.\\s)`, 'g');
//   let indexes = [];
//   let match;
//   while ((match = regex.exec(data)) !== null) {
//     const index = match[0] === '※' ? match.index : parseInt(match[0]);
//     if (index >= startNum && index <= endNum) {
//       indexes.push({ index: match.index, content: match[0] });
//     }
//   }
//   return indexes;
// }
