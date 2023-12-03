document.addEventListener("DOMContentLoaded", function () {
    const myTodoForm = document.getElementById("my-todo-form");
    const myTodoList = document.getElementById("my-todo-list");
    const errorMessage = document.getElementById("error-message");
    const myTodoInput = document.getElementById("todo-input");

    myTodoForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const todoText = myTodoInput.value;
        
        if (todoText === "" ) {
            errorMessage.textContent = "Please enter a todo.";
        } else {
            errorMessage.textContent = "";

            const listItem = document.createElement("li");
            listItem.textContent = todoText;

            listItem.addEventListener("click", function () {
                
                if (listItem.classList.contains("completed")) {
                    listItem.classList.add("completed");
                } else {
                    listItem.classList.remove("completed");  
                }
            });
            myTodoList.appendChild(listItem);
            myTodoInput.value = "";
        }
    });

});

