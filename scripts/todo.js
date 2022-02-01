// Enables strict mode

("use strict");

// Variables declarations

todoButton = document.querySelectorAll(".todo-list-button");
todoBorder = document.querySelectorAll(".list-border");
todoList = document.querySelector(".todo-list");
todoListParent = document.querySelector(".todo-lists");
todoAddBtn = document.querySelector(".todo-add");
todoInput = document.querySelector(".todo-input");
arrowBtn = document.querySelector(".arrow-button");
plusIconBtn = document.querySelector(".plus-icon-btn");
formContainer = document.querySelector(".form-container");
Overlay = document.querySelector(".todo-overlay");
todoCancelBtn = document.querySelector(".todo-cancel");
todoInputUnderline = document.querySelector(".todo-input-underline");

// The todo's array

let toDoArray = [];

// List template

function createList() {
  if (todoInput.value) {
    let currentValue = todoInput.value;
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

    //

    // Creates a trashbutton in the rightside of the todo list

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");
    trashButton.classList.add("list-icon-btn");

    const trashIcon = document.createElement("ion-icon");
    trashIcon.classList.add("todo-icon");
    trashIcon.classList.add("trash-icon");
    trashIcon.name = "trash-outline";

    // puts the trashButton inside the trashIcon

    trashButton.appendChild(trashIcon);

    // Adds an event listener to trashbutton

    trashButton.addEventListener("click", function () {
      setTimeout(() => {
        list.remove();
      }, 300);

      list.classList.toggle("show");
    });

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
    list.appendChild(trashButton);

    // Puts the list element inside the toDoList Parent
    // The unordered list which groups everything that the user types

    todoListParent.appendChild(list);

    // Toggles the popup when user saves

    togglePopUp();

    setTimeout(() => {
      list.classList.toggle("show");
    }, 10);
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

// Toggles the pop up when user wants to add a todo list

const togglePopUp = function () {
  formContainer.classList.toggle("show-form");
  Overlay.classList.toggle("show-overlay");
  todoInput.value = "";
  setTimeout(() => {
    todoInput.focus();

    todoInputUnderline.classList.toggle("show-underline");
  }, 100);
};

init();

// Event Listeners

todoAddBtn.addEventListener("click", createList);
plusIconBtn.addEventListener("click", togglePopUp);
todoCancelBtn.addEventListener("click", togglePopUp);
Overlay.addEventListener("click", togglePopUp);

document.addEventListener("keydown", function (keyPressed) {
  if (
    keyPressed.key === "Escape" &&
    formContainer.classList.contains("show-form")
  ) {
    togglePopUp();
  }

  // Creates the list when user pressed enter
  else if (
    keyPressed.key === "Enter" &&
    formContainer.classList.contains("show-form") &&
    todoInput.value
  ) {
    createList();
  }
});
