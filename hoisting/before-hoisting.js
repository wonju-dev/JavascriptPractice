declaration(); // no error : 선언식은 함수의 몸체 전부 hoisitng
explanation(); // error : 표현식은 함수의 선언 부분만 hoisting

// 함수 선언식
function declaration() {
  console.log("this is declaration");
}
// 함수 표현식
const explanation = function () {
  console.log("thisis explanation");
};
