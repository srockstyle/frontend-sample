import { makeStyles, Container, Box, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

import { Header } from "../Elememt/shared/Header";
import { Copyright } from "../Elememt/shared/Copyright";
import { Navigation } from "../Elememt/shared/Navigation";

const initialValues = {
  firstName: "",
};

export const ChontactFormTemplate: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <Header />
      <Navigation />
      <Container fixed>
        <Box height="100vh" display="flex" flexDirection="column">
          お問い合わせ
          <h1>My Example</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              //console.log({ values, actions });
              //alert(JSON.stringify(values, null, 2));
              //actions.setSubmitting(false);
              history.push("/inputcheck");
            }}
            render={(formikBag) => (
              <Form className={classes.root} noValidate autoComplete="off">
                <Field
                  name="firstName"
                  render={({ field, form, meta }) => (
                    <div>
                      <input type="text" {...field} placeholder="First Name" />
                      {meta.touched && meta.error && meta.error}
                    </div>
                  )}
                />
                <Button color="primary" variant="contained" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          />
        </Box>
      </Container>
      <Copyright />
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
