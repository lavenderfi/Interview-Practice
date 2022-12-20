function solution(S) {
  // Implement your solution here

  lowerS = S.toLowerCase().split(' ');

  let result = {};
  for (let word of lowerS) {
    for (let i = 0; i < word.length; i++) {
      for (let j = i + 1; j < word.length + 1; j++) {
        let string = word.slice(i, j);
        if (result[string]) {
          result[string] += 1;
        } else {
          result[string] = 1;
        }
      }
    }
  }

  let configure = Object.entries(result);
  configure.sort((a, b) => b[1] - a[1]).sort();
  let string = '';
  configure.forEach((elem) => {
    string += elem[1] + ': ' + elem[0] + '\n';
  });

  return string;
}

solution('Banana Boat');
