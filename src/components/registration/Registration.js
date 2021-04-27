import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import { Collapse, CssBaseline,  Card } from "@material-ui/core";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import { connect } from "react-redux";
import { RegistrationForm } from "./RegistrationForm";
import { registrationAction } from "../../actions/auth-actions";
import { Redirect } from "react-router";

const Registration = ({ registrationAction, registrated }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  if (registrated) {
    return <Redirect to="/signin" />;
  }
  return (
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
              Регистрация
            </Typography>

            <RegistrationForm
              registrationAction={registrationAction}
              classes={classes}
            />

            <Link href="/signin" variant="body2" className={classes.link}>
              Уже зарегистрированы? Нажмите что бы войти
            </Link>
          </Card>
        </Collapse>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  registrated: state.authReducer.registrated,
});

const mapDispatchToProps = {
  registrationAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
