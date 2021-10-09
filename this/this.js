const myObj = {
  myFunc: function () {
    console.log(this);
  },
  yourFunc: () => console.log(this),
};

const btn = document.querySelector(".myBtn");
btn.addEventListener("click", myObj.myFunc);

const yourBtn = document.querySelector(".yourBtn");
yourBtn.addEventListener("click", myObj.yourFunc);
