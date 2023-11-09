const formElement = document.querySelector("form");

const toDoListInput = document.querySelector("ul");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const newToDoAddition = formElement.toDos.value;
  const errorMessage = document.querySelector(".error-message");

  const entry = document.createElement("li");
  entry.addEventListener("click", (ev) => {
    ev.preventDefault();
    if (ev.target.style.textDecoration === "line-through") {
      ev.target.style.textDecoration = "none";
    } else {
      ev.target.style.textDecoration = "line-through";
    }
  });
  entry.textContent = newToDoAddition;
  toDoListInput.appendChild(entry);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.margin = "4px";

  deleteButton.addEventListener("click", (ev) => {
    ev.preventDefault();
    entry.remove();
  });
  entry.append(deleteButton);
  formElement.reset();
});

for (li of toDoListInput.children) {
  li.append(deleteButton);
}
