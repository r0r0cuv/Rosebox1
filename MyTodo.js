
const form = document.querySelector('#newTodoForm');
const input = document.querySelector('#task');
const list = document.querySelector('#todoList');



form.addEventListener('submit', function(e){
e.preventDefault();
    console.log(input.value);
    const addTodo = document.createElement('li');
    const removeBtn = document.createElement('button')
    removeBtn.innerText = 'x'
    removeBtn.addEventListener('Click', function(e) {
        e.target.parentElement.remove();

    }
    addTodo.innerText = input.value ;

    input.value= '';
    list.appendChild(addTodo);

    )}
;
