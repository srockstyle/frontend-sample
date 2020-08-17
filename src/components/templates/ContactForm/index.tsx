import { makeStyles } from "@material-ui/core";
// import { GridSpacing } from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import React from "react";

import { Header } from "../Elememt/shared/Header";
import { Copyright } from "../Elememt/shared/Copyright";
import { Navigation } from "../Elememt/shared/Navigation";

export const ChontactFormTemplate: React.FC = () => {
  //const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  return (
    <>
      <Header />
      <Navigation />
      <Box height="100vh" display="flex" flexDirection="column">
        お問い合わせ
      </Box>
      <Copyright />
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
