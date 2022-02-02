// Enables strict mode

("use strict");

// Variables declarations

const darkLightBtn = document.querySelector(".dark-light-btn");
const darkLightIcon = document.querySelector(".dark-light-mode");
const darkModeTrans = document.querySelector(".dark-transition");

const todoAddBtn = document.querySelector(".todo-add");
const todoCancelBtn = document.querySelector(".todo-cancel");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const todoListParent = document.querySelector(".todo-lists");
const todoInputUnderline = document.querySelector(".todo-input-underline");

const formContainer = document.querySelector(".form-container");
const overlay = document.querySelector(".todo-overlay");
const plusIconBtn = document.querySelector(".plus-icon-btn");
// For dark mode

let darkMode = false;
let overlayShow = false;

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
    overlay.style.display = "block";
  } else {
    overlayShow = false;
    overlay.style.display = "none";
  }

  // Toggles the form to show or not

  formContainer.classList.toggle("show-form");

  setTimeout(() => {
    overlay.classList.toggle("show-overlay");
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
    darkLightBtn.style.transform = "translateX(-50%) scale(0.5) rotate(360deg)";

    darkModeTrans.classList.toggle("show-transition");

    document.body.classList.toggle("dark-mode-toggle");

    // Delays the second animation
    setTimeout(() => {
      darkLightIcon.name = "moon-outline";
      darkLightIcon.classList.add("moon-icon");
      darkLightIcon.classList.remove("sun-icon");
      darkLightBtn.style.transform = "translateX(-50%) scale(1) rotate(0)";
    }, 200);
  }

  // if darkmode is false then this codeblock runs
  else {
    darkMode = true;

    darkModeTrans.classList.toggle("show-transition");

    document.body.classList.toggle("dark-mode-toggle");

    // Animates the icon
    darkLightBtn.style.transform = "translateX(-50%) scale(0.5) rotate(180deg)";

    // Delays the second animation
    setTimeout(() => {
      darkLightIcon.name = "sunny-outline";
      darkLightIcon.classList.remove("moon-icon");
      darkLightIcon.classList.add("sun-icon");
      darkLightBtn.style.transform = "translateX(-50%) scale(1) rotate(0)";
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

overlay.addEventListener("click", togglePopUp);
plusIconBtn.addEventListener("click", togglePopUp);
