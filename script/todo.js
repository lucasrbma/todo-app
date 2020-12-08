let listElement = document.querySelector('#todo ul');
let inputElement = document.querySelector('#input input');
let buttonElement = document.querySelector('#input button');

let todos = JSON.parse(localStorage.getItem('todo_list')) || [
    "Eat my breakfast", 
    "Study for a while", 
    "Lunch time", 
    "Keep studying", 
    "Dinner", 
    "TIME TO PLAY VIDEOGAMES!!!!!"
];

function renderTodos() {
    listElement.innerHTML = '';

    for(todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);
        let closeElement = document.createElement('img');

        let linkElement = document.createElement('a');

        let position = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo(' + position + ')');

        linkElement.setAttribute('href', '#');

        closeElement.src = "./images/close.svg";
        closeElement.alt = "Delete";

        linkElement.appendChild(closeElement);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    let todoText = inputElement.value;

    if(todoText=='') {
        return;
    } else {
        todos.push(todoText);
        inputElement.value = '';
        renderTodos();
        saveToStorage();
    }
}

buttonElement.onclick = addTodo;

function deleteTodo(position) {
    todos.splice(position, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todo_list', JSON.stringify(todos));
}