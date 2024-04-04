let str = `
1. adfasdfasfaf
※. asfasfafasf
2. asfdasfdasfaf
3. afdasdfasfaf
※. asfasfafasf
`;

// 정규 표현식을 사용하여 '※.' 패턴의 모든 인덱스를 가져오는 함수
function findAllIndices(str, pattern) {
  let indices = [];
  const regex = new RegExp(pattern, 'g');
  let match;
  while ((match = regex.exec(str)) !== null) {
    indices.push({ content: pattern, index: match.index });
  }
  return indices;
}

// '※.' 패턴의 모든 인덱스를 가져옴
const indices = findAllIndices(str, '※.');
indices.forEach((item) => {
  console.log(`패턴: ${item.content} / 인덱스: ${item.index}`);
});

console.log(str.substring(17, 30));
