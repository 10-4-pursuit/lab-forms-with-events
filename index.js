document.addEventListener(`DOMContentLoaded`, function () {
	const todoForm =document.getElementById(`todoForm`);
	const newTodoInput = document.getElementById(`newTodo`);
	const todoList = document.getElementById(`todoList`);
	
	todoForm.addEventListener(`submit`, function (e) {
		e.preventDefault();
		addTodo();
	});
	function addTodo() {
		const todoText = newTodoInput.value;
		if (todoText.trim() !== '') {
			const li = document.createElement(`li`);
			li.textContent = todoText;

			li.addEventListener('click', function () {
			completed(li);
			});

			const deleteButton = document.createElement(`button`);
			deleteButton.textContent = `Delete`;
			deleteButton.addEventListener('click', function (){
				li.remove();
			});

			li.appendChild(deleteButton);
			todoList.appendChild(li);
			newTodoInput.value = '';
		
		}
	}
});
	