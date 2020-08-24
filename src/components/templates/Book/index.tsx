import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

import { Header } from "../Elememt/shared/Header";
import { Copyright } from "../Elememt/shared/Copyright";
import { Navigation } from "../Elememt/shared/Navigation";
import { BookResponse } from "../../../service/ApiSample";

type Props = {
  book: BookResponse;
};

export const BookTemplate: React.FC<Props> = ({ book }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Navigation />
      <Box height="100vh" display="flex" flexDirection="column">
        <Typography variant="h4" component="h2">
          {book.title}
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
