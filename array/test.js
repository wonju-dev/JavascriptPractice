const hasNoPair = (string) => {
  const dictionary = {};
  for (let i = 0; i < string.length; i++) {
    if (dictionary[string[i]] !== undefined) dictionary[string[i]] += 1;
    else dictionary[string[i]] = 1;
  }
  const numbers = Object.values(dictionary);
  const hasOdd = numbers.findIndex((number) => number % 2 === 1);
  if (hasOdd !== -1) return true;
  else return false;
};

function solution(s) {
  if (s.length % 2 === 1) return 0;
  if (hasNoPair(s)) return 0;

  let index = 0;
  while (index < s.length) {
    if (s[index + 1] === undefined) return 0;
    if (s[index] === s[index + 1]) {
      s = s.slice(0, index) + s.slice(index + 2);
      if (index !== 0) index -= 1;
    } else index += 1;
  }
  return 1;
}
