const toDoContainer = document.querySelector('.todo-form');
const toDoInput = toDoContainer.querySelector('input');
const toDoList = document.querySelector('.todo-list');

function handleSubmit(e) {
    e.preventDefault();
    const toDoValue = toDoInput.value;
    saveToDo(toDoValue);
    //paintToDo(toDoValue);
}

function saveToDo(toDO) {
    console.log(localStorage);
    localStorage.setItem('todo_LS', toDO);
}

function paintToDo(toDO) {
    
}

function init() {
    toDoContainer.addEventListener('submit', handleSubmit);
}

init();