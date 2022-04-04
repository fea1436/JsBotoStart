const addToDo = document.querySelector(".todo-button");
addToDo.addEventListener('click', function(event) {
    event.preventDefault();
    const todoInput = document.querySelector('.todo-input');
    const todoContent = todoInput.value;

    const todoUl = document.querySelector(".todo-list");

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoUl.appendChild(todoDiv);

    const newToDoLi = document.createElement("li");
    newToDoLi.classList.add("todo-item");
    newToDoLi.innerHTML = todoContent;
    saveLocalToDo(todoContent);
    todoDiv.appendChild(newToDoLi);
    
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("todo-button");
    todoDiv.appendChild(completeBtn);
    const faCheckElement = document.createElement("i");
    faCheckElement.classList.add("fa");
    faCheckElement.classList.add("fa-check");
    faCheckElement.classList.add("complete-btn");
    completeBtn.appendChild(faCheckElement);
    completeBtn.addEventListener('click', function(){
        newToDoLi.classList.toggle("completed");
        // in the above line if you use Add a Class to Class Lists, 
        // you only can enable "completed" class
        // but when you use TOGGLE method, if "completed" class exists, toggle disabled it
        // and if not, add it to newToDoLi
    });


    const trashBtn = document.createElement("button");
    trashBtn.classList.add("todo-button");
    todoDiv.appendChild(trashBtn);
    const faTrashElement = document.createElement("i");
    faTrashElement.classList.add("fa");
    faTrashElement.classList.add("fa-trash");
    faTrashElement.classList.add("trash-btn");
    trashBtn.appendChild(faTrashElement);
    trashBtn.addEventListener('click', function() {
        todoDiv.remove();
    });
});

function saveLocalToDo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalToDo(todo) {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // Get todo title
    const todoTitle = todo.children[0].innerText;

    // Remove founded title from todos array
    todos.splice(todos.indexOf(todoTitle), 1);

    // Update TODOS array
    localStorage.setItem("todos", JSON.stringify(todos));
}