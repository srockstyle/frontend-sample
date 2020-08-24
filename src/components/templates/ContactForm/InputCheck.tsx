import { makeStyles, Container, Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { GridSpacing } from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";

import React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Header } from "../Elememt/shared/Header";
import { Copyright } from "../Elememt/shared/Copyright";
import { Navigation } from "../Elememt/shared/Navigation";

type MyFormValues = {
  firstName: string;
};

type Props = {
  state: string;
};

const initialValues = {
  firstName: "",
};

export const InputCheckTemplate: React.FC = () => {
  //const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const handleOnClick = (f: string) => {
    console.log(f);
  };
  const classes = useStyles();
  const initialValues: MyFormValues = { firstName: "" };
  return (
    <>
      <Header />
      <Navigation />
      <Container fixed>
        <Box height="100vh" display="flex" flexDirection="column">
          お問い合わせ内容確認
          <h1>My Example</h1>
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
