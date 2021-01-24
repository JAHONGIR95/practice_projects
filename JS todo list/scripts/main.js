var todoForm = document.querySelector('#todo-form');
var todoInput = document.querySelector('#todo-input');
var todoListHolder = document.querySelector('#list-item-holder');
var todosCount = document.querySelector('#todos-count');

var todos = [];
var todoItemInitialId = 0;

function TodoListPrototype(title, id) {
    this.title = title;
    this.id = id;
}

function removeTodo(todoId) {
    document.querySelector(`#list-item-${todoId}`).remove();

    for (i = 0; i < todos.length; i++) {
        if (todos[i].id == todoId) {
            todos.splice(i, 1);
        }
    }

    todosCount.innerHTML = todos.length;
}

function createHtmlElement(todoTitle, todoId) {
    var todoListItem = document.createElement('li');
    var deleteButton = document.createElement('button');

    todoListItem.textContent = todoTitle;
    todoListItem.setAttribute('class', 'list-group-item d-flex align-items-center justify-content-between')
    todoListItem.setAttribute('id', `list-item-${todoId}`);
    deleteButton.textContent = `O'chirish`;
    deleteButton.setAttribute('class', 'btn btn-outline-danger')

    deleteButton.addEventListener('click', function (e) {
        e.preventDefault();

        removeTodo(todoId)
    })

    todoListItem.appendChild(deleteButton);
    todoListHolder.appendChild(todoListItem);
}

function createTodo(todoTitle) {
    todos.push(new TodoListPrototype(todoTitle, todoItemInitialId));

    createHtmlElement(todoTitle, todoItemInitialId);
    todoItemInitialId++;
}

todoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (todoInput.value.length > 0) {
        createTodo(todoInput.value);
    }
    todoForm.reset();
    todosCount.innerHTML = todos.length;

})