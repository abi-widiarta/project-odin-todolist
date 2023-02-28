// import { selectProject } from "./Listeners";

import { removeListener, selectProject } from "./listeners";
import { todos } from "./createToDo";

// let projectObj = {};
let projectList = [];
let idCount = 0;

const content = document.querySelector(".projects");

const createProject = (projectName) => {
  let projectTask = [];
  return { projectName, projectTask };
};

const loadInitialProject = (projectName) => {
  console.log("calling loadInitialProject");
  const newProject = createProject(projectName);
  projectList.push(newProject);
  appendProjectDom(projectName);

  selectProject();
};

const appendProjectDom = (projectName) => {
  const projectWrapper = document.createElement("div");
  const p = document.createElement("p");
  const deleteBtn = document.createElement("button");

  projectWrapper.className = "project-wrapper";

  p.textContent = projectName;
  p.className = "project-item";
  p.style.display = "inline-block";
  p.style.pointerEvents = "none";
  p.setAttribute("id", idCount);

  deleteBtn.textContent = "Delete";
  deleteBtn.style.display = "inline-block";
  deleteBtn.className = "btn-delete-project";
  // deleteBtn.style.pointerEvents = "none";

  projectWrapper.appendChild(p);
  projectWrapper.appendChild(deleteBtn);

  content.appendChild(projectWrapper);
  idCount++;
};

const appendAllProjectFromArray = (deleteProjectIndex) => {
  idCount = 0;
  content.innerHTML = "";
  projectList.forEach((element) => {
    appendProjectDom(element.projectName);
  });
  todos.innerHTML = "";
  selectProject();
};

export { loadInitialProject, projectList, appendProjectDom, createProject, appendAllProjectFromArray };
