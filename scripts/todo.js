// Enables strict mode

("use strict");

// Variables declarations

todoButton = document.querySelectorAll(".todo-list-button");
todoBorder = document.querySelectorAll(".list-border");
todoList = document.querySelector(".todo-list");
todoListParent = document.querySelector(".todo-lists");
todoAddBtn = document.querySelector(".todo-add");
todoInput = document.querySelector(".todo-input");

todoMax = todoButton.length;

// List template

function createList() {
  if (todoInput.value) {
    // Creates a list element

    const list = document.createElement("li");
    list.classList.add("todo-list");

    // Creates the List Borders the one that we are
    // animating when button is clicked

    const listBorder = document.createElement("div");
    listBorder.classList.add("list-border");
    listBorder.classList.add("active");

    // This creates an empty space in the listborder like &nbsp; in html

    listBorder.appendChild(document.createTextNode("\u00A0"));

    // Creates the list the the user typed

    const listButton = document.createElement("button");
    listButton.classList.add("todo-list-button");
    listButton.classList.add("active-btn");
    listButton.textContent = "eee";

    // Changes the textcontent of the ListButton to
    // What the usertyped in the form or in the input

    listButton.textContent = todoInput.value;

    // Adds an event listener on the listButton
    // or on the list that the user type

    listButton.addEventListener("click", function () {
      listButton.classList.toggle("active-btn");
      listBorder.classList.toggle("active");
    });

    // Puts the listBorder and listButton
    // inside the Parent element which is the list

    list.appendChild(listBorder);
    list.appendChild(listButton);

    // Puts the list element inside the toDoList Parent
    // The unordered list which groups everything that the user types

    todoListParent.appendChild(list);
  }
}

// Toggler function

// Loop to add an event listener to each classes that is selected above

const init = function () {
  for (let i = 0; i < todoButton.length; i++) {
    // Adds an Event listener for the list button

    todoButton[i].addEventListener("click", function () {
      // Toggles the class when the button is clicked

      todoBorder[i].classList.toggle("active");
      todoButton[i].classList.toggle("active-btn");
    });
  }
};

init();

// Creates an click event listener for the button

todoAddBtn.addEventListener("click", createList);
