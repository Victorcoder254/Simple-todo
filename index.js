let submit = document.getElementById("submit");
let inputtodo = document.getElementById("floatingInput");
let orderForm = document.getElementById("orderForm");

submit.addEventListener("click", todo);

function todo(event) {
  event.preventDefault();
  let parent = document.getElementById("todos");
  let todo = document.createElement("p");
  todo.innerHTML = inputtodo.value;
  parent.appendChild(todo);
  orderForm.reset();
}
