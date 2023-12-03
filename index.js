// console.log("Code your solution!")

const todoForm = document.getElementById('todoForm');
const newTodoInput = document.getElementById('newTodo');
const todoList = document.getElementById('todoList');
const error = document.getElementById('error-message')

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const todoText = newTodoInput.value.trim();

  if (todoText !== '') {
    error.textContent = ''
    addTodoToList(todoText);
    newTodoInput.value = '';
  } else {
    error.textContent = 'Error. Todo cannot be empty'
  }
});

function addTodoToList(todoText) {
  const todoItem = document.createElement('li');
  todoItem.textContent = todoText;
  todoItem.addEventListener('click', function () {
    if (todoItem.style.textDecoration === 'line-through') {
        todoItem.style.textDecoration = '';
      } else {
        todoItem.style.textDecoration = 'line-through';
      }
  });

  todoList.appendChild(todoItem);
}
