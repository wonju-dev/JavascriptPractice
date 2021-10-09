const delay = (time) => new Promise((resolve) => setTimeout(() => resolve("hi"), time));

const delayMillisecond = 1000;

delay(delayMillisecond)
  .then((data) => {
    console.log("data : ", data);
    return delayMillisecond / 1000;
  })
  .then((second) => console.log(`${second}초가 지났습니다`));


  /* 
  1. delay 호출
  2. promise 반환
  3. promise 내부에 있는 비동기는 웹 api에게 전달
  4. 웹 api에서 반환
  5. 
  
  */