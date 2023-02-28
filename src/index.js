import "./style.css";

// tambah fungsi edit, hapus di project dan to do

console.log("tes from console to test webpack setup");

// const contentContainer = document.getElementById("content");
// console.log("container : ", contentContainer);
// const h1 = document.createElement("h1");
// h1.textContent = "Testing append Dom";

// contentContainer.appendChild(h1);

import { loadInitialProject, projectListener } from "./loadInitialProject";
// import { addTodo } from "./createToDo";
import { projectList } from "./loadInitialProject";
import { selectProject } from "./listeners";

// loadInitialProject("Today");
// loadInitialProject("All Tasks");
// loadInitialProject("Next Week");

// projectObj["Today"].push(createTodo("santuy", "makan"));
// projectObj["Next Week"].push(createTodo("santuy2", "minum"));
// loadInitialProject("Today");
// loadInitialProject("NextWeek");

// console.log(projectList);
// console.log(projectList);

// Array.from(projects).forEach((element) => {
//   console.log(element);
// });
// addTodo(0);
// console.log(loadInitialProject("Next Month"));
