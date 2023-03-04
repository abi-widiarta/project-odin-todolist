import "./style.css";

// projects :
// - edit(done),hapus(done)
// todo :
// - edit(done),hapus(done)
// all projects :
// - add display mechanism so the latest to do will be at the bottom

// added dataset todos(still has bugs)

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
