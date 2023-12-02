const form = document.querySelector("form")

const ul = document.querySelector("ul")

form.addEventListener("submit", (event) => {
event.preventDefault();

if (event.target.text.value === "") {
    const p = document.createElement("p")
    p.textContent = "Error. To-do cannot be empty"
    p.before(ul)
}

const li = document.createElement("li")
    li.textContent = event.target.text.value
ul.append(li)

li.addEventListener("click", () => {
    li.style.textDecoration = "line-through"
}

)})


