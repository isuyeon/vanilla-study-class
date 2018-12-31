const toDoContainer = document.querySelector('.todo-list');
const btnResetTodo = toDoContainer.querySelector('.btn-delete');

function handleReset() {
    localStorage.removeItem(TODOS);
    const li = todoList.querySelectorAll('li')
    todoList.remove(li);
}

function resetTodo() {
    btnResetTodo.addEventListener('click', handleReset);
}

function init() {
    resetTodo();
};

init();