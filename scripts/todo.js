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
darkLightBtn = document.querySelector(".dark-light-btn");
darkLightIcon = document.querySelector(".dark-light-mode");
let darkMode = false;
let overlayShow = false;

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
    listButton.classList.add("btn");

    //

    // Creates a trashbutton in the rightside of the todo list

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");
    trashButton.classList.add("list-icon-btn");
    trashButton.classList.add("btn");

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

// Toggles the pop up when user wants to add a todo list

const togglePopUp = function () {
  // Checks if the overlay is hidden
  if (!overlayShow) {
    overlayShow = true;
    Overlay.style.display = "block";
  } else {
    overlayShow = false;
    Overlay.style.display = "none";
  }

  // Toggles the form to show or not

  formContainer.classList.toggle("show-form");

  setTimeout(() => {
    Overlay.classList.toggle("show-overlay");
  }, 100);

  // Needs to set timeout here because without it the focus function wouldnt work

  setTimeout(() => {
    todoInput.focus();

    todoInputUnderline.classList.toggle("show-underline");
  }, 100);

  // Resets the input value to none

  todoInput.value = "";
};

// Dark Mode Function

const darkModeClicked = function () {
  // Checks if darkmode is enabled or not
  if (darkMode) {
    darkMode = false;

    // Animates the icon
    darkLightBtn.style.transform = "scale(0.5) rotate(360deg)";

    // Delays the second animation
    setTimeout(() => {
      darkLightIcon.name = "moon-outline";
      darkLightBtn.style.transform = "scale(1) rotate(0)";
    }, 200);
  }

  // if darkmode is false then this codeblock runs
  else {
    darkMode = true;

    // Animates the icon
    darkLightBtn.style.transform = "scale(0.5) rotate(180deg)";

    // Delays the second animation
    setTimeout(() => {
      darkLightIcon.name = "sunny-outline";
      darkLightBtn.style.transform = "scale(1) rotate(0)";
    }, 200);
  }
};

// Keypress function

const keyPressed = function (keyVal) {
  // Removes the form when the user pressed escape

  if (
    keyVal.key === "Escape" &&
    formContainer.classList.contains("show-form")
  ) {
    togglePopUp();
  }

  // Creates the list when user pressed enter
  else if (
    keyVal.key === "Enter" &&
    formContainer.classList.contains("show-form") &&
    todoInput.value
  ) {
    // Creates list when the user pressed enter and theres a value in the input

    createList();
  }
};

// Event Listeners

darkLightBtn.addEventListener("click", darkModeClicked);
document.addEventListener("keydown", keyPressed);

todoAddBtn.addEventListener("click", createList);
todoCancelBtn.addEventListener("click", togglePopUp);

Overlay.addEventListener("click", togglePopUp);
plusIconBtn.addEventListener("click", togglePopUp);
