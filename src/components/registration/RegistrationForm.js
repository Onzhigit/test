import React from "react";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";


export const RegistrationForm = ({ registrationAction, classes }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      userName: "",
      mobile: "",
      iin: "",
    },
    
    onSubmit: (values) => {
      registrationAction(values);
    },
  });
  return (
    <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
      <TextField
        autoComplete="fname"
        name="firstName"
        variant="outlined"
        required
        id="firstName"
        label="Имя"
        autoFocus
        onChange={formik.handleChange}
        value={formik.values.firstName}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
        className={classes.formInput}
      />

      <TextField
        variant="outlined"
        required
        id="lastName"
        label="Фамилия"
        name="lastName"
        autoComplete="lName"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
        className={classes.formInput}
      />

      <TextField
        variant="outlined"
        required
        id="userName"
        label="Имя пользователя"
        name="userName"
        autoComplete="userName"
        onChange={formik.handleChange}
        value={formik.values.userName}
        error={formik.touched.userName && Boolean(formik.errors.userName)}
        helperText={formik.touched.userName && formik.errors.userName}
        className={classes.formInput}
      />

      <TextField
        variant="outlined"
        required
        id="mobile"
        label="Мобильный телефон"
        name="mobile"
        autoComplete="mobile"
        onChange={formik.handleChange}
        value={formik.values.mobile}
        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
        helperText={formik.touched.mobile && formik.errors.mobile}
        className={classes.formInput}
      />

      <TextField
        name="iin"
        variant="outlined"
        required
        id="iin"
        label="ИИН"
        autoFocus
        onChange={formik.handleChange}
        value={formik.values.iin}
        error={formik.touched.iin && Boolean(formik.errors.iin)}
        helperText={formik.touched.iin && formik.errors.iin}
        className={classes.formInput}
      />

      <TextField
        variant="outlined"
        required
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        className={classes.formInput}
      />

      <TextField
        variant="outlined"
        required
        id="password"
        label="Пароль"
        name="password"
        type="password"
        autoComplete="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        className={classes.formInput}
      />

      <Button
        type="submit"
        
        className={classes.signButton} 
      >
        Зарегистрироваться
      </Button>
    </form>
  );
};
