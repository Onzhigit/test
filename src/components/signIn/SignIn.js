import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { CssBaseline, Card } from "@material-ui/core";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import { connect } from "react-redux";
import { loginAction } from "../../actions/auth-actions";
import { SignInForm } from "./SignInForm";
import { Redirect } from "react-router";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Collapse from "@material-ui/core/Collapse";

const SignIn = ({ loginAction, isAuthenticated, error, errorMessage }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => {
    setChecked(true);
  }, []);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className={classes.image}>
        <CssBaseline />
        <Container className={classes.container} component="main" maxWidth="sm">
          <Collapse
            in={checked}
            {...(checked ? { timeout: 1500 } : {})}
            collapsedHeight={0}
          >
            <Card className={classes.card}>
              <Avatar className={classes.avatar}>
                <DirectionsRunIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Вход
              </Typography>
              <SignInForm loginAction={loginAction} classes={classes} />
              {error}
              {errorMessage}
              <Link href="#" variant="body2" className={classes.link}>
                Забыли пароль?
              </Link>
              <Link href="/registration" variant="body2" className={classes.link}>
                Зарегистрироваться
              </Link>
            </Card>
          </Collapse>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  error: state.authReducer.error,
  errorMessage: state.authReducer.errorMessage,
});

const mapDispatchToProps = {
  loginAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
