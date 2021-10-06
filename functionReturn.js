function tmp() {
  return {
    a: 1,
    b: 2,
  };
}

const a = tmp();
const b = tmp();

console.log(a);
console.log(b);
console.log(a == b);
console.log(a === b);
