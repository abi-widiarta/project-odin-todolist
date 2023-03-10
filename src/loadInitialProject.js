// import { selectProject } from "./Listeners";

import { removeListener, selectAllTodos, selectProject, selectTodos } from "./listeners";
import { appendTodo, todos } from "./createToDo";
import { projectSelectedIndex } from "./listeners";

// let projectObj = {};
let projectList = [];
let allTodoList = [];
let idCount = 0;
let idCountTodo = 0;

const content = document.querySelector(".projects");
const allTasksContainer = document.querySelector(".all-tasks");

const createProject = (projectName) => {
  let projectTask = [];
  return { projectName, projectTask };
};

// const loadAllTasks = () => {
//   allTasksContainer.innerHTML = "";
//   Array.from(projectList).forEach((element, index) => {
//     element.projectTask.forEach((task) => {
//       appendAllTodo(task, index);
//     });
//   });
// };

const loadInitialProject = (projectName) => {
  console.log("calling loadInitialProject");
  const newProject = createProject(projectName);
  projectList.push(newProject);
  appendProjectDom(projectName);

  selectProject();
};

const appendAllTodoToArray = (title, desc, index, todoIndexOnProject) => {
  allTodoList.push({ title, desc, index, todoIndexOnProject: todoIndexOnProject[index].projectTask.length - 1 });
  // console.log(todoIndexOnProject[index].projectTask.length - 1);
  // console.log("tes todo index on project : ", todoIndexOnProject);
  console.log(allTodoList);
  appendAllTodo();
};

const appendAllTodo = () => {
  allTasksContainer.innerHTML = "";
  allTodoList.forEach((element) => {
    const todosWrapper = document.createElement("div");
    const p = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    todosWrapper.setAttribute("data-project-index", element.index);
    todosWrapper.setAttribute("data-todos-index", element.todoIndexOnProject);

    p.textContent = `${element.title}, ${element.desc}, ${element.index}`;
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
    allTasksContainer.appendChild(todosWrapper);
    selectAllTodos();
  });
};

const appendProjectDom = (projectName) => {
  const projectWrapper = document.createElement("div");
  const p = document.createElement("p");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  projectWrapper.className = "project-wrapper";

  p.textContent = projectName;
  p.className = "project-item";
  p.style.display = "inline-block";
  p.style.pointerEvents = "none";
  p.setAttribute("id", idCount);

  deleteBtn.textContent = "Delete";
  deleteBtn.style.display = "inline-block";
  deleteBtn.className = "btn-delete-project";

  editBtn.textContent = "Edit";
  editBtn.style.display = "inline-block";
  editBtn.className = "btn-edit-project";

  projectWrapper.appendChild(p);
  projectWrapper.appendChild(editBtn);
  projectWrapper.appendChild(deleteBtn);

  content.appendChild(projectWrapper);
  idCount++;
};

const appendAllProjectFromArray = () => {
  idCount = 0;
  content.innerHTML = "";
  projectList.forEach((element) => {
    appendProjectDom(element.projectName);
  });
  todos.innerHTML = "";
  selectProject();
};

export { loadInitialProject, projectList, appendProjectDom, createProject, appendAllProjectFromArray, appendAllTodo, appendAllTodoToArray, allTasksContainer };
