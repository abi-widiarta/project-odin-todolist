import { addTodo, appendTodoOnProjectSelect, todos } from "./createToDo";
import { loadInitialProject } from "./loadInitialProject";
import { projectList } from "./loadInitialProject";
import { deleteProject, deleteTodos } from "./deleteFunction";
import editProject from "./editFunction";

let projectChildren = document.querySelector(".projects").children;
let projectSelectedIndex = 0;
let editProjectIndex = 0;
let isEdit = false;

const titleInput = document.getElementById("title");
// const descInput = document.getElementById("desc");
const btnSubmit = document.getElementById("btn-submit");
const btnSubmitTodos = document.getElementById("btn-submit-todos");

const titleTodosInput = document.getElementById("todos-title");
const descTodosInput = document.getElementById("todos-desc");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  if (!isEdit) {
    loadInitialProject(titleInput.value);
  } else {
    editProject(editProjectIndex, titleInput.value);
    isEdit = false;
    appendTodoOnProjectSelect(editProjectIndex);
    btnSubmit.textContent = "Submit";
  }
  titleInput.value = "";
});

// const submitForm = () => {
//   btnSubmit.addEventListener("click", (event) => {
//     event.preventDefault();
//     if (!isEdit) {
//       loadInitialProject(titleInput.value);
//     } else {
//       console.log(isEdit);
//     }
//     titleInput.value = "";
//   });
// };

// submitForm();

btnSubmitTodos.addEventListener("click", (event) => {
  event.preventDefault();
  addTodo(titleTodosInput.value, descTodosInput.value, projectSelectedIndex);
  appendTodoOnProjectSelect(projectSelectedIndex);
  selectTodos();
  titleTodosInput.value = "";
  descTodosInput.value = "";
});

const innerListener = (event) => {
  const currentSelected = document.querySelector(".selected");

  if (currentSelected != undefined) {
    currentSelected.classList.remove("selected");
  }

  if (event.target.classList.contains("btn-delete-project")) {
    deleteProject(event.target.parentElement.firstChild.id);
  } else if (event.target.classList.contains("btn-edit-project")) {
    isEdit = true;
    titleInput.value = projectList[event.target.parentElement.firstChild.id].projectName;
    editProjectIndex = event.target.parentElement.firstChild.id;
    btnSubmit.textContent = "Edit";
  } else {
    projectSelectedIndex = event.target.firstChild.id;
    event.target.classList.add("selected");
    console.log(event.target);
    appendTodoOnProjectSelect(projectSelectedIndex);
  }
};

const myListener = (e) => {
  innerListener(e);
};

// masih misteri kenapa jika bentuknya seperti ini, dia tidak ada
// duplikasi

// fungsi select project untuk memberikan eventlistener click ke semua project
const selectProject = () => {
  Array.from(projectChildren).forEach((element) => {
    element.addEventListener("click", myListener);
  });
};

const tesSelectTodos = (e) => {
  if (e.target.classList.contains("edit-btn-todos")) {
    console.log("edit");
  } else if (e.target.classList.contains("delete-btn-todos")) {
    deleteTodos(e.target.parentElement.id, projectSelectedIndex);
  } else {
    console.log("select all");
  }
};

const myListenerTodos = (e) => {
  tesSelectTodos(e);
};

const selectTodos = () => {
  console.log("masuk select todos");
  Array.from(todos.children).forEach((element) => {
    element.addEventListener("click", myListenerTodos);
  });
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

export { projectSelectedIndex, projectChildren, selectProject, selectTodos };
