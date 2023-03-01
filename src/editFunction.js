import { appendAllProjectFromArray, projectList } from "./loadInitialProject";

const editProject = (editProjectIndex, newTitle) => {
  console.log(projectList[editProjectIndex]);
  projectList[editProjectIndex].projectName = newTitle;
  console.log(projectList[editProjectIndex]);
  appendAllProjectFromArray();
};

export default editProject;
