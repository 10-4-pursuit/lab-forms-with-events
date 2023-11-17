function createToDoList() {
  const formElement = document.getElementById("form");
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTask = formElement.newTask.value;
    const errorMessage = document.querySelector("p");
    const getTaskList = document.querySelector("ul");

    if (newTask === "") {
      errorMessage.textContent = "Task entry cannot be empty";
    } else {
      const lines = newTask.split("\n");

      formElement.reset();

      for (const line of lines) {
        const entry = document.createElement("li");
        entry.textContent = line;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
          event.preventDefault();
          entry.remove();
        });

        entry.append(deleteButton);

        entry.addEventListener("click", (event) => {
          event.preventDefault();
          if (entry.style.textDecoration === "line-through") {
            entry.style.textDecoration = "none";
          } else {
            entry.style.textDecoration = "line-through";
          }
        });

        getTaskList.append(entry);
      }
    }
  });
};

createToDoList();
