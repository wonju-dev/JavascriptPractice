const delay = (time) => new Promise((resolve) => setTimeout(() => resolve("hi"), time));

const delayMillisecond = 1000;

delay(delayMillisecond)
  .then((data) => {
    console.log("data : ", data);
    return delayMillisecond / 1000;
  })
  .then((second) => console.log(`${second}초가 지났습니다`));
