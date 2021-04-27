export const tasksSelector = (tasks, status) => {
  let sortedTasks = tasks.filter((tsk) => tsk.role_title === status);
  return sortedTasks;
};
