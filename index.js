// this creates a A single `ul` tag, empty when the page is first loaded.

window.onload = function() {
    var ul = document.createElement('ul');
    ul.id = 'my-ul';
    ul.setAttribute ('name', 'first-ul');
    document.body.appendChild(ul);
};

console.log("Code your solution!")
