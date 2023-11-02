// this creates a A single `ul` tag, empty when the page is first loaded.

window.onload = function () {
  var ul = document.createElement("ul");
  ul.id = "my-ul";
  ul.setAttribute("name", "first-ul");
  document.body.appendChild(ul);
};

/** When the user writes something in the `form`'s text input area and
clicks `submit`, the `ul` should update with a new `li` item at the bottom of the list. */


function addListItem(form) {
    // get the value of the text input area
    const inputValue = form.querySelector('input[type="text"]').value;

     // appends inputValue to li
  const li = document.createElement("li");
  li.textContent = inputValue;

  //adds li to UL
  const ul = document.querySelector("#my-ul");
  ul.append(li);
}

//this calls the above function when the submit button is pressed on the form
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    addListItem(event.target);
 });


