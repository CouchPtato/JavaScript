const todoList = [];

function renderTodolist () {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.duedate;
    const {name, dueDate} = todoObject;

    const html = `
      
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodolist();
      " class="delete-button">Delete</button>      
    `;
    todoListHTML += html;
  }
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTask() {
  const inputElement = document.querySelector('.name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.date-input');
  const dueDate = dateInputElement.value;

  todoList.push(
    {
      name,
      dueDate
    }
  );

  inputElement.value = '';

  renderTodolist();
}