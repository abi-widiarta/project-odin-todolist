import { appendTodoOnProjectSelect } from "./createToDo";
import { selectTodos } from "./listeners";
import { appendAllProjectFromArray, projectList } from "./loadInitialProject";

const deleteProject = (deleteProjectIndex) => {
  console.log(projectList);
  console.log(deleteProjectIndex);
  projectList.splice(deleteProjectIndex, 1);
  console.log(projectList);
  appendAllProjectFromArray(deleteProjectIndex);
};

const deleteTodos = (deleteTodoIndex, deleteTodoProjectIndex) => {
  // console.log("tes");
  // console.log("todo id :", deleteTodoIndex);
  // console.log("todo project id :", deleteTodoProjectIndex);
  console.log(projectList[deleteTodoProjectIndex].projectTask.splice(deleteTodoIndex, 1));
  console.log(projectList[deleteTodoProjectIndex].projectTask);
  appendTodoOnProjectSelect(deleteTodoProjectIndex);
  selectTodos();
  // projectList[deleteTodoProjectIndex]
};

export { deleteProject, deleteTodos };
