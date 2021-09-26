const menu = document.querySelector(".menu");
let index = 0;

menu.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;
  const regEx = /menu__btn-(?<button_type>[\w]*)/;
  const buttonType = regEx.exec(event.target.classList[1]).groups["button_type"];
  const input = document.querySelector(".menu__input");
  const inputValue = input.value;
  console.log(inputValue);
  const inputIndex = input.classList[0];
  console.log(inputIndex);
  const list = document.querySelector(".list");
  switch (buttonType) {
    case "add":
      addNewList(list, inputValue, index);
      break;
    case "delete":
      deleteList(list, inputIndex);
      break;
    case "update":
      updateList(inputValue, inputIndex);
      break;
  }
});

const addNewList = (list, inputValue) => {
  const newListElement = getNewListElement(inputValue, index);
  list.appendChild(newListElement);
  index += 1;
};
const deleteList = (list, inputIndex) => {
  const targetElement = document.querySelector(`.${inputIndex}`);
  list.removeChild(targetElement);
};
const updateList = (inputValue, inputIndex) => {
  const targetElement = document.querySelector(`.${inputIndex}`);
  targetElement.textContent = inputValue;
};

const getNewListElement = (inputValue, index) => {
  const li = `<li class="${index}">${inputValue}<li>`;
  return new DOMParser().parseFromString(li, "text/html").documentElement.querySelector("html>body").children[0];
};
