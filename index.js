console.log("Code your solution")
document.addEventListener('DOMContentLoaded',
function() {
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const ul = document.querySelector ('ul');
    const errorParagraph = document.createElement('p');
    form.parentNode.insertBefore(errorParagraph, ul);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputValue = input.value.trim();

        if(inputValue === '') {
            errorParagraph.textContent = 'Error. Todo cannot be empty';
        }
        else {
            errorParagraph.textContent = '';

            const li = document.createElement('li');
            li.textContent = inputValue;
            ul.appendChild(li);

            input.value = '';
        }
    });

    ul.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            if (event.target.style.textDecoration === 'line-through') {
                event.target.stayle.textDecoration = 'none'; 
            }
            else {
                event.target.style.textDecoration = 'line-through';
            }
        }
    });
});
