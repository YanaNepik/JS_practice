let buttonEnter = document.getElementById('enter');
let userInput = document.getElementById('userInput');
let ul = document.querySelector('ul'); 

function inputLength() {
    return userInput.value.length > 0
}

function createTodo() {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = '';

    let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('x'));
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteTodoItem)

    let doneButton = document.createElement('button');
    doneButton.appendChild(document.createTextNode('✓'));
    li.appendChild(doneButton);
    doneButton.addEventListener('click', doneTodoItem)
    
    function deleteTodoItem() {
        li.classList.add('delete');
    }

    function doneTodoItem () {
        li.classList.toggle('done');
    }
}

function changeListAfterButtonPress(event) {
    if (inputLength()) {
        createTodo();
    }
}

function changeListAfterKeypress(event) {
    if (inputLength() && event.which === 13) {
        createTodo();
    }
}

userInput.addEventListener('keypress', changeListAfterKeypress);
buttonEnter.addEventListener('click', changeListAfterButtonPress);