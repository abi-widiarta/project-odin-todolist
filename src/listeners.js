import { addTodo, appendTodoOnProjectSelect } from "./createToDo";
import { loadInitialProject } from "./loadInitialProject";
import { projectList } from "./loadInitialProject";
import deleteProject from "./deleteFunction";

let projectChildren = document.querySelector(".projects").children;
let projectSelectedIndex = 0;

const titleInput = document.getElementById("title");
// const descInput = document.getElementById("desc");
const btnSubmit = document.getElementById("btn-submit");
const btnSubmitTodos = document.getElementById("btn-submit-todos");

const titleTodosInput = document.getElementById("todos-title");
const descTodosInput = document.getElementById("todos-desc");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  loadInitialProject(titleInput.value);
  titleInput.value = "";
});

btnSubmitTodos.addEventListener("click", (event) => {
  event.preventDefault();
  addTodo(titleTodosInput.value, descTodosInput.value, projectSelectedIndex);
  appendTodoOnProjectSelect(projectSelectedIndex);
  titleTodosInput.value = "";
  descTodosInput.value = "";
});

const innerListener = (event) => {
  const currentSelected = document.querySelector(".selected");
  const btnDeleteProject = document.querySelectorAll(".btn-delete-project");
  if (currentSelected != undefined) {
    currentSelected.classList.remove("selected");
  }

  // console.log(btnDeleteProject);
  if (!event.target.classList.contains("btn-delete-project")) {
    projectSelectedIndex = event.target.firstChild.id;
    event.target.classList.add("selected");
    console.log(event.target);
    appendTodoOnProjectSelect(projectSelectedIndex);
  } else {
    // console.log(event.target.previousElementSibling.id);
    deleteProject(event.target.previousElementSibling.id);
  }
};

function myListener(e) {
  innerListener(e);
}

// masih misteri kenapa jika bentuknya seperti ini, dia tidak ada
// duplikasi
const selectProject = () => {
  Array.from(projectChildren).forEach((element) => {
    element.addEventListener("click", myListener);
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

export { projectSelectedIndex, projectChildren, selectProject };
