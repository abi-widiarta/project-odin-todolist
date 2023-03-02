import loadInitialProject, { projectList } from "./loadInitialProject";
import { projectSelectedIndex } from "./listeners";
import { selectTodos } from "./listeners";

const todos = document.querySelector(".todos");
let idCount = 0;
// factory function for to do
const createTodo = (title, desc) => {
  return { title, desc };
};

// function to process factory function and append to DOM
const addTodo = (todosTitle, todosDesc, projectSelectedIndex) => {
  const newTodo = createTodo(todosTitle, todosDesc);
  projectList[projectSelectedIndex]["projectTask"].push(newTodo);
  console.log("masuk add todo");
  appendTodo(newTodo);
};

const appendTodo = (newTodo) => {
  const todosWrapper = document.createElement("div");
  const p = document.createElement("p");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  todosWrapper.setAttribute("id", idCount);

  p.textContent = `${newTodo.title}, ${newTodo.desc}, ${projectSelectedIndex}`;
  p.style.display = "inline-block";

  editBtn.textContent = "Edit";
  editBtn.style.display = "inline-block";
  editBtn.className = "edit-btn-todos";

  deleteBtn.textContent = "Delete";
  deleteBtn.style.display = "inline-block";
  deleteBtn.className = "delete-btn-todos";

  todosWrapper.appendChild(p);
  todosWrapper.appendChild(editBtn);
  todosWrapper.appendChild(deleteBtn);
  todos.appendChild(todosWrapper);

  idCount++;
};

const appendTodoOnProjectSelect = (projectSelectedIndex) => {
  idCount = 0;
  todos.innerHTML = "";
  projectList[projectSelectedIndex].projectTask.forEach((element) => {
    appendTodo(element);
  });
  selectTodos();
};

const findProjectIndex = () => {
  for (let i = 0; i < projectList; i++) {
    console.log(projectList[i]);
  }
};

export { createTodo, addTodo, appendTodo, appendTodoOnProjectSelect, todos };
