import React from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
import { useStyles } from "./styles";

const validationSchema = yup.object({
  iin: yup.string("Enter iin").required("iin is required"),
  password: yup
    .string("Enter your password")
    //  .min(8, 'Password should be of minimum 8 characters length')
    .required("Password is required"),
});

export const SignInForm = ({ loginAction }) => {
  const formik = useFormik({
    initialValues: {
      iin: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginAction(values.iin, values.password);
    },
  });
  const classes = useStyles();

  return (
    <>
      <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="iin"
          label="Введите ИИН"
          type="iin"
          name="iin"
          autoComplete="iin"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.iin}
          error={formik.touched.iin && Boolean(formik.errors.iin)}
          helperText={formik.touched.iin && formik.errors.iin}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Пароль"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button type="submit" className={classes.signButton}>
          Войти
        </Button>
      </form>
    </>
  );
};
