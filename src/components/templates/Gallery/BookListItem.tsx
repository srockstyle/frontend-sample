import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BookResponse } from "../../../service/ApiSample";
// import { Redirect, useParams } from "react-router-dom";

type Props = {
  book: BookResponse;
};

export const BookListItem: React.FC<Props> = ({ book }) => {
  const classes = useStyles();
  return (
    <>
      <Grid>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </Typography>
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
