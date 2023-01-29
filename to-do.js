const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const doneList = document.querySelector('.done-list');

const TODOS_KEY = 'todos'
const DONE_KEY = 'dones'

let toDos = [];
let dones = [];


function delToDo(e) {
    const li = e.target.parentElement.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); 
    dones = dones.filter(done => done.id !== parseInt(li.id)); 
    li.remove();
    saveToDo(); 
    saveDone();
}

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function saveDone() {
    localStorage.setItem(DONE_KEY, JSON.stringify(dones))
}

function checkDos(e) {
    const target = e.target;
    const li = target.parentElement;
    const delBtn = li.querySelector('.btn__del');

    let done;
    if(li.id) {
        li.classList.toggle('checked');
        doneList.appendChild(li);
        done = toDos.filter(toDo => toDo.id === parseInt(li.id));
        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
        saveToDo(); 
        dones.push(done[0]);
    } else if (e.target === delBtn) {
        delToDo(e);
    }
    saveDone();
}

function painToDo(newToDo) {
    const li = document.createElement('li');
    li.id = newToDo.id;
    const span = document.createElement('span');
    span.innerText = newToDo.text;
    const button = document.createElement('button');
    button.setAttribute('class','btn__del')
    button.innerHTML = "❌"
    button.addEventListener('click', delToDo)
    toDoList.appendChild(li);
    li.appendChild(span);
    span.appendChild(button);
}

function paintDone(done) {
    const li = document.createElement('li');
    li.id = done.id;
    li.setAttribute('class','checked')
    const span = document.createElement('span');
    span.innerText = done.text;
    const button = document.createElement('button');
    button.setAttribute('class','btn__del')
    button.innerHTML = "❌"
    button.addEventListener('click', delToDo)
    doneList.appendChild(li);
    li.appendChild(span);
    span.appendChild(button);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newToDoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newToDoObj);
    painToDo(newToDoObj);
    saveToDo();
}


toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
const savedDones = localStorage.getItem(DONE_KEY);

if (savedToDos || savedDones) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; 
    parsedToDos.forEach(painToDo);

    const parsedDones = JSON.parse(savedDones);
    dones = parsedDones; 
    parsedDones.forEach(paintDone);
}


toDoList.addEventListener('click', checkDos)