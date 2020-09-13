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
import * as yup from "yup";
import { Header } from "../Elememt/shared/Header";
import { Copyright } from "../Elememt/shared/Copyright";
import { Navigation } from "../Elememt/shared/Navigation";
import { Props } from "../../pages/elements/FormFeild/TextField";

export const ChontactFormTemplate: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const initialState = {
    firstName: "",
  };

  return (
    <>
      <Header />
      <Navigation />
      <Container fixed>
        <Box height="100vh" display="flex" flexDirection="column">
          お問い合わせ
          <h1>My Example</h1>
          <Formik
            initialValues={initialState}
            onSubmit={(values, actions) => {
              history.push("/inputcheck");
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <Form className={classes.root} noValidate autoComplete="off">
                <Field
                  name="firstName"
                  onChangeText={handleChange("firstName")}
                  value={values.firstName}
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
          </Formik>
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
