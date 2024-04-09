// let str = '가나 ';

// if (str[str.length - 1] == ' ') {
//   console.log('true');
// } else {
//   console.log('false');
// }

let arr = [{ key: 'a' }, { key: 'b' }];
let foundC = false;

arr.forEach((item) => {
  if (item.key === 'c') {
    foundC = true;
  }
});

if (!foundC) {
  console.log('c없음');
}
