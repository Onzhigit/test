export const dateCreator = (date) => {
  return new Date(date).toISOString().substring(0, 10);
};

//new Date(date).toDateString();
