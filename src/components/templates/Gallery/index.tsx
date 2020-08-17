import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

import { Header } from "../Elememt/shared/Header";
import { Copyright } from "../Elememt/shared/Copyright";
import { Navigation } from "../Elememt/shared/Navigation";

export const GalleryTemplate: React.FC = () => {
  //const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  return (
    <>
      <Header />
      <Navigation />
      <Box height="100vh" display="flex" flexDirection="column">
        <Typography variant="h4" component="h2">
          キャラクター紹介
        </Typography>
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
