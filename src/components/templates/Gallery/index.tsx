import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Header } from "../Elememt/shared/Header";
import { Copyright } from "../Elememt/shared/Copyright";
import { Navigation } from "../Elememt/shared/Navigation";

import { BookResponse } from "../../../service/ApiSample";
import { BookList } from "./BookList";

type Props = {
  books: BookResponse[];
};

export const GalleryTemplate: React.FC<Props> = ({ books }) => {
  //const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  return (
    <>
      <Header />
      <Navigation />
      <Box height="100vh" display="flex" flexDirection="column">
        <Typography variant="h4" component="h2">
          本紹介
        </Typography>
        <BookList books={books} />
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
