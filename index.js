const formE1 = document.querySelector(".form");
const inputE1 = document.querySelector(".input");
let ulE1 = document.querySelector(".list");

formE1.addEventListener("submit", (event) => {
  event.preventDefault();
  todoList();
});

function todoList() {
  let newTask = inputE1.value;

  const liE1 = document.createElement("li");
  liE1.innerText = newTask;
  ulE1.appendChild(liE1);
  inputE1.value = "";
  const checkBtnE1 = document.createElement("div");
  checkBtnE1.innerHTML = ` <i class="fa-solid fa-square-check">`;
  liE1.appendChild(checkBtnE1);
  const trashBtnE1 = document.createElement("div");
  trashBtnE1.innerHTML = ` <i class="bi bi-trash-fill">`;
  liE1.appendChild(trashBtnE1);
  checkBtnE1.addEventListener("click", () => {
    liE1.classList.toggle("checked");
  });

  trashBtnE1.addEventListener("click", (e) => {
    liE1.remove();
  });
}

function myStorage() {
  localStorage.setItem("items", ulE1);
}

function getStorage() {
  localStorage.getItem("item");
}
