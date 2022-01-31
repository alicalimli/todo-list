// Enables strict mode

("use strict");

// Variables declarations

todoButton = document.querySelectorAll(".todo-list-button");
todoList = document.querySelectorAll(".todo-list");
todoBorder = document.querySelectorAll(".list-border");

// Loop to add an event listener to each classes that is selected above

for (let i = 0; i < todoButton.length; i++) {
  // Adds an Event listener for the list button

  todoButton[i].addEventListener("click", function () {
    console.log("shoot");

    // Toggles the class when the button is clicked

    todoBorder[i].classList.toggle("active");
    todoButton[i].classList.toggle("active-btn");
  });
}
