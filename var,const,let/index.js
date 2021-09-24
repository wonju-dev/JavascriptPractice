console.log(myVar); // undefined
var myVar = 100;

/* 
console.log(myLet); // error
let myLet = 100;

console.log(myConst); // error
const myConst = 100;
*/

let a;
console.log(a); // undeifined : hoisitng에 의해 lexical Environment에 등록 + 할당한 값이 없으므로 undefined

console.log(b); // error : hoisting에 의해 lexical Environment에 등록은 되었으나, let의 초기화는 할당과 함께 이뤄지므로 uninitialized 상태 -> 접근 불가능
let b = 100;
