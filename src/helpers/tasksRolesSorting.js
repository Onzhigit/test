export const tasksRolesSorting = (users, status) => {
  let executor = users.filter((a) => a.role_title === status);
  return executor.map((ex) => ex.full_name);
};
