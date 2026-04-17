const form = document.querySelector('#newTodoForm');
const input = document.querySelector('#task');
const list = document.querySelector('#todoList');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  list.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    if (todo.completed) {
      li.classList.add('completed');
    }

    const span = document.createElement('span');
    span.classList.add('todo-text');
    span.innerText = todo.text;

    const actions = document.createElement('div');
    actions.classList.add('todo-actions');

    const completeBtn = document.createElement('button');
    completeBtn.innerText = todo.completed ? 'Undo' : 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', () => {
      todos[index].completed = !todos[index].completed;
      saveTodos();
      renderTodos();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    list.appendChild(li);
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === '') return;

  todos.push({
    text: taskText,
    completed: false
  });

  saveTodos();
  renderTodos();
  input.value = '';
});

renderTodos();
