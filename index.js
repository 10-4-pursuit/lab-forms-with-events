// this creates a A single `ul` tag, empty when the page is first loaded.

window.onload = function () {
  const ul = document.createElement("ul");
  ul.id = "ul";
  ul.setAttribute("name", "ul");
  document.body.appendChild(ul);

  const ulElement = document.querySelectorAll("#ul");

  };

  //this creates an error message element
  const errorMessage = document.createElement("p");
  errorMessage.id = "error-message";
  errorMessage.innerText = "Error. Todo cannot be empty";
  document.body.appendChild(errorMessage);

  /** When the user writes something in the `form`'s text input area and
clicks `submit`, the `ul` should update with a new `li` item at the bottom of the list. */
  function addListItem(form) {
    // get the value of the text input area
    const inputValue = form.querySelector('input[type="text"]').value;

    // Get the error message element
    const errorMessage = document.querySelector("#error-message");

    // If the input value is empty, display the error message and prevent the form from submitting
    if (!inputValue) {
      errorMessage.style.display = "block";
      event.preventDefault();
    } else {
      errorMessage.style.display = "none";
    }

    if (inputValue) {
      // appends inputValue to li
      const li = document.createElement("li");
      li.textContent = inputValue;

      //adds li to UL
      const ul = document.querySelector("#ul");
      ul.appendChild(li);

      li.addEventListener("dblclick", removeListItem(ul))
    }
    // Reset the value of the text input area
    document.querySelector("input[type='text']").value = "";
  }



  //this calls the above function when the submit button is pressed on the form
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    addListItem(event.target);
  });


  function removeListItem(ul){
    //select item you want removed
   ul.addEventListener("dblclick", (event) => {
    const li = event.target;

    li.style.textDecoration = "line-through"
   
      // ul.removeChild(li)
      
   })
  }



 