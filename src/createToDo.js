import loadInitialProject, { projectList } from "./loadInitialProject";
import { projectSelectedIndex } from "./listeners";

const todos = document.querySelector(".todos");

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

  p.textContent = `${newTodo.title}, ${newTodo.desc}, ${projectSelectedIndex}`;
  p.style.display = "inline-block";

  editBtn.textContent = "Edit";
  deleteBtn.style.display = "inline-block";

  deleteBtn.textContent = "Delete";
  deleteBtn.style.display = "inline-block";

  todosWrapper.appendChild(p);
  todosWrapper.appendChild(editBtn);
  todosWrapper.appendChild(deleteBtn);
  todos.appendChild(todosWrapper);
};

const appendTodoOnProjectSelect = (projectSelectedIndex) => {
  todos.innerHTML = "";
  projectList[projectSelectedIndex].projectTask.forEach((element) => {
    appendTodo(element);
  });
};

const findProjectIndex = () => {
  for (let i = 0; i < projectList; i++) {
    console.log(projectList[i]);
  }
};

export { createTodo, addTodo, appendTodoOnProjectSelect, todos };
