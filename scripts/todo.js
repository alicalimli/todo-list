("use strict");

todoButton = document.querySelectorAll(".todo-list-button");
todoList = document.querySelectorAll(".todo-list");

for (let i = 0; i < todoButton.length; i++) {
  todoButton[i].addEventListener("click", function () {
    console.log("shoot");
    todoList[i].classList.toggle("active");
  });
}
