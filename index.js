document.addEventListener('DOMContentLoaded', () => {
    const myTodoForm = document.getElementById('my-todo-form');
    const todoInput = document.getElementById('todo-input');
    const errorMessage = document.getElementById('error-message');
    const myTodoList = document.getElementById('my-todo-list');
  
  
    myTodoForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const todoSubject = todoInput.value;
    
        if (todoSubject === '') {
          errorMessage.innerText = 'Error: Todo cannot be empty';
        } else {
          errorMessage.textContent = '';
    
          const todoDescription = document.createElement('li');
          todoDescription.textContent = todoSubject;
    
          todoDescription.addEventListener('click', () => {
            if (!todoDescription.classList.contains('completed')) {
              todoDescription.classList.add('completed');
            } else {
              todoDescription.classList.remove('completed');
            }
          });
    
          myTodoList.appendChild(todoDescription);
    
          todoInput.value = '';
        }
      });
    });
  
