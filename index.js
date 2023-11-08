function toDoList() {
    const formElement = document.querySelector("#form");
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const newToDo = formElement.newToDo.value;
        const errorMessage = document.querySelector("p");
        const getToDoList = document.querySelector("ul");

        if (newToDo === "") {
            errorMessage.textContent = "Please enter a task!"
        } else {

            const lines = newToDo.split("\n");

            formElement.reset();

            for (const line of lines) {

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";

                deleteButton.addEventListener("click", (event) => {
                    event.preventDefault();
                    entry.remove();
                });

                const entry = document.createElement("li");
                entry.textContent = line;
                entry.append(deleteButton);
                

                entry.addEventListener("click", (event) => {
                    event.preventDefault();
                    if (entry.style.textDecoration ===  "line-through") {
                        entry.style.textDecoration = "none";
                    } else {
                        entry.style.textDecoration = "line-through";
                    }
                });

                getToDoList.append(entry);
            }
        }
    });
};

toDoList();