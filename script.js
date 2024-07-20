const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

function addTodoItem(todoText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${todoText}</span>
        <button onclick="removeTodoItem(this)">Delete</button>
    `;
    todoList.appendChild(li);
}

function removeTodoItem(button) {
    const li = button.parentElement;
    li.remove();
}
