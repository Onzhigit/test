export const statusColorHandler = (status, classes) => {
    if (status === "Done") {
      return classes.done;
    }
    if (status === "To") {
      return classes.doing;
    }
    if (status === "Doing") {
      return classes.doing;
    }
    if (status === "New") {
      return classes.new;
    }
  };