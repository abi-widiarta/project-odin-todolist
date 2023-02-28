import { appendAllProjectFromArray, projectList } from "./loadInitialProject";
const deleteProject = (deleteProjectIndex) => {
  console.log(projectList);
  console.log(deleteProjectIndex);
  projectList.splice(deleteProjectIndex, 1);
  console.log(projectList);
  appendAllProjectFromArray(deleteProjectIndex);
};

export default deleteProject;
