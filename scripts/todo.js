("use strict");

todoButton = document.querySelectorAll(".todo-list-button");
todoList = document.querySelectorAll(".todo-list");
todoBorder = document.querySelectorAll(".list-border");

for (let i = 0; i < todoButton.length; i++) {
  todoButton[i].addEventListener("click", function () {
    console.log("shoot");
    todoBorder[i].classList.toggle("active");
  });
}
