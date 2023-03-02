import { appendTodoOnProjectSelect } from "./createToDo";
import { appendAllProjectFromArray, projectList } from "./loadInitialProject";

const editProject = (editProjectIndex, newTitle) => {
  console.log(projectList[editProjectIndex]);
  projectList[editProjectIndex].projectName = newTitle;
  console.log(projectList[editProjectIndex]);
  appendAllProjectFromArray();
};

const editTodo = (editTodoIndex, editTodoProjectIndex, newTitle, newDesc) => {
  // console.log(projectList[editTodoProjectIndex].projectTask[editTodoIndex].title);
  projectList[editTodoProjectIndex].projectTask[editTodoIndex].title = newTitle;
  projectList[editTodoProjectIndex].projectTask[editTodoIndex].desc = newDesc;
  appendTodoOnProjectSelect(editTodoProjectIndex);
};

export { editProject, editTodo };
