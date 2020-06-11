// DOM Elements
const inputField = document.getElementById('inputValue');
const btnAddNew = document.getElementById('addButton');
const todoApp = document.querySelector('.todo-app');
const totalCount = document.querySelector('.count-total');

// Events
btnAddNew.addEventListener('click', createTodo);

let totalItem = 0;

// Function
function createTodo() {

    if (inputField.value === '') {
        return false;
    }

    else {
        totalItem++;
        // console.log(totalItem);

        const todoList = document.createElement('div');
        todoList.classList.add('todo-list');
        todoApp.appendChild(todoList);

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.onclick = updatetodoStatus;
        checkBox.id = 'cb' + totalItem;
        todoList.appendChild(checkBox);

        const textContent = document.createElement('div');
        textContent.classList.add('text-content');
        textContent.id = 'text' + totalItem;
        textContent.innerHTML = inputField.value;
        inputField.value = '';
        todoList.appendChild(textContent);

        const removeItem = document.createElement('button');
        removeItem.classList.add('remove-item');
        removeItem.innerHTML = '<i class="fa fa-trash-alt"></i>';
        removeItem.onclick = removeTodo;
        todoList.appendChild(removeItem);

        //Counter
        totalCount.innerHTML = totalItem;
    }
}

// Finish Task
function updatetodoStatus() {

    let checkId = this.id.replace('cb', '');
    let isChecked = document.getElementById(this.id);
    let textContentValue = document.getElementById('text' + checkId);

    if (isChecked.checked) {
        textContentValue.classList.add('stripe');
    }
    else {
        textContentValue.classList.remove('stripe');
    }
}
// Remove Task
function removeTodo() {

    let selectedList = event.target;
    if (selectedList.classList[0] === 'remove-item') {

        totalItem--;
        selectedList.parentElement.remove();
        //Counter
        totalCount.innerHTML = totalItem;

    }

}