const todoInput = document.getElementById("todo-input");

const addBtn = document.getElementById("add-btn");

const listItems = document.getElementById("todo-list-items");

addBtn.addEventListener("click", function () {
  const value = todoInput.value;

  const li = document.createElement("li"); // li
  li.innerText = value;

  const delButton = document.createElement("button"); // btn
  delButton.innerText = "X"; // btn>x
  li.appendChild(delButton);

  delButton.addEventListener("click", function () {
    li.remove()
  });

  listItems.appendChild(li);
  todoInput.value = "";
});
