const toDos = document.querySelector("form")
toDos.addEventListener("submit", (event) => {
    event.preventDefault()
const error = document.querySelector("p")

    const filler = document.querySelector("input[type='text']")
    if (filler.value === "") {
        error.textContent =  'Error. Todo cannot be empty'
        return 
    }
    error.textContent = ""
    const newContent = document.createElement("li")
    newContent.textContent = filler.value
    filler.value = ""
    newContent.addEventListener("click", () => {
        if (newContent.style.textDecoration === "line-through") {
            newContent.style.textDecoration = "none";
        } 
        else {
            newContent.style.textDecoration = "line-through";
        }
    }) 

    list = document.querySelector("ul")
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete"
    newContent.append(deleteButton)
    deleteButton.addEventListener("click", () => {
        newContent.remove()
    })
    list.append(newContent)
})
