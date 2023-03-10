import { addTodo, appendTodoOnProjectSelect, todos } from "./createToDo";
import { allTasksContainer, appendAllTodo, appendAllTodoToArray, loadInitialProject } from "./loadInitialProject";
import { projectList } from "./loadInitialProject";
import { deleteProject, deleteTodos } from "./deleteFunction";
import { editProject, editTodo } from "./editFunction";

let projectChildren = document.querySelector(".projects").children;
let projectSelectedIndex = 0;
let editProjectIndex = 0;
let editTodoIndex = 0;
let isEditProject = false;
let isEditTodo = false;

const titleInput = document.getElementById("title");
// const descInput = document.getElementById("desc");
const btnSubmit = document.getElementById("btn-submit");
const btnSubmitTodos = document.getElementById("btn-submit-todos");

const titleTodosInput = document.getElementById("todos-title");
const descTodosInput = document.getElementById("todos-desc");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  if (!isEditProject) {
    loadInitialProject(titleInput.value);
  } else {
    editProject(editProjectIndex, titleInput.value);
    isEditProject = false;
    appendTodoOnProjectSelect(editProjectIndex);
    btnSubmit.textContent = "Submit";
  }
  titleInput.value = "";
});

btnSubmitTodos.addEventListener("click", (event) => {
  event.preventDefault();
  if (!isEditTodo) {
    addTodo(titleTodosInput.value, descTodosInput.value, projectSelectedIndex);
    appendTodoOnProjectSelect(projectSelectedIndex);
    selectTodos(projectSelectedIndex);
    appendAllTodoToArray(titleTodosInput.value, descTodosInput.value, projectSelectedIndex, projectList);
  } else {
    editTodo(editTodoIndex, projectSelectedIndex, titleTodosInput.value, descTodosInput.value);
    btnSubmitTodos.textContent = "Submit";
    isEditTodo = false;
  }
  titleTodosInput.value = "";
  descTodosInput.value = "";
});

// masih misteri kenapa jika bentuknya seperti ini, dia tidak ada
// duplikasi

// fungsi select project untuk memberikan eventlistener click ke semua project
const selectProject = () => {
  Array.from(projectChildren).forEach((element) => {
    element.addEventListener("click", myListener);
  });
};

const myListener = (e) => {
  innerListener(e);
};

const innerListener = (event) => {
  const currentSelected = document.querySelector(".selected");
  if (currentSelected != undefined) {
    currentSelected.classList.remove("selected");
  }

  if (event.target.classList.contains("btn-delete-project")) {
    deleteProject(event.target.parentElement.firstChild.id);
  } else if (event.target.classList.contains("btn-edit-project")) {
    isEditProject = true;
    titleInput.value = projectList[event.target.parentElement.firstChild.id].projectName;
    editProjectIndex = event.target.parentElement.firstChild.id;
    appendTodoOnProjectSelect(editProjectIndex);
    btnSubmit.textContent = "Edit";
  } else {
    projectSelectedIndex = event.target.firstChild.id;
    event.target.classList.add("selected");
    console.log(event.target);
    appendTodoOnProjectSelect(projectSelectedIndex);
  }
};

// fungsi select project untuk memberikan eventlistener click ke semua todos yang ditampilkan
const selectTodos = () => {
  console.log("masuk select todos");
  Array.from(todos.children).forEach((element) => {
    element.addEventListener("click", myListenerTodos);
  });
};

const myListenerTodos = (e) => {
  tesSelectTodos(e);
};

const tesSelectTodos = (e) => {
  if (e.target.classList.contains("edit-btn-todos")) {
    // console.log(projectList[projectSelectedIndex].projectTask[e.target.parentElement.id].title);
    titleTodosInput.value = projectList[projectSelectedIndex].projectTask[e.target.parentElement.id].title;
    descTodosInput.value = projectList[projectSelectedIndex].projectTask[e.target.parentElement.id].desc;
    editTodoIndex = e.target.parentElement.id;
    btnSubmitTodos.textContent = "Edit";
    isEditTodo = true;
  } else if (e.target.classList.contains("delete-btn-todos")) {
    deleteTodos(e.target.parentElement.id, projectSelectedIndex);
  } else {
    console.log("select all");
  }
};

// fungsi select project untuk memberikan eventlistener click ke all task yang ditampilkan
const selectAllTodos = () => {
  // console.log("masuk select all todos");
  Array.from(allTasksContainer.children).forEach((element) => {
    element.addEventListener("click", myListenerAllTodos);
  });
};

const myListenerAllTodos = (e) => {
  tesSelectAllTodos(e);
};

const tesSelectAllTodos = (e) => {
  if (e.target.classList.contains("edit-btn-todos")) {
    // console.log(projectList[projectSelectedIndex].projectTask[e.target.parentElement.id].title);
    // titleTodosInput.value = projectList[projectSelectedIndex].projectTask[e.target.parentElement.id].title;
    // descTodosInput.value = projectList[projectSelectedIndex].projectTask[e.target.parentElement.id].desc;
    // editTodoIndex = e.target.parentElement.id;
    // btnSubmitTodos.textContent = "Edit";
    // isEditTodo = true;
    console.log("edit all todos");
    // setAttribute();
    console.log(e.target.parentElement.getAttribute("data-project-index"));
  } else if (e.target.classList.contains("delete-btn-todos")) {
    // deleteTodos(e.target.parentElement.id, projectSelectedIndex);
    console.log("delete all todos");
  } else {
    console.log("select all todos");
  }
};

// Untuk tes metode conventional
// function print(element) {
//   console.log("tes", element.id);
// }

// const selectProject = () => {
//   Array.from(projectChildren).forEach((element) => {
//     element.addEventListener("click", () => {
//       print(element);
//     });
//   });
// };

export { projectSelectedIndex, projectChildren, selectProject, selectTodos, selectAllTodos };
