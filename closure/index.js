function printValue(value) {
  alert(value);
}

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("mouseover", printValue(btn.textContent));
});
