import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BookResponse } from "../../../service/ApiSample";
import { BookListItem } from "./BookListItem";

type Props = {
  books: BookResponse[];
};

export const BookList: React.FC<Props> = ({ books }) => {
  const classes = useStyles();
  return (
    <>
      {}
      <Grid>
        {books.map((book: BookResponse) => {
          return <BookListItem key={book.id} book={book} />;
        })}
      </Grid>
    </>
  );
};
// CSSを書く
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 240,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
