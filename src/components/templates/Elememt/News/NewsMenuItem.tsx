import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NewsMenu } from "../../../pages/Home";

type Props = {
  newsMenu: NewsMenu;
};

export const NewsMenuItem: React.FC<Props> = ({ newsMenu }) => {
  const classes = useStyles();
  return (
    <>
      <Grid key={newsMenu.key} item>
        <Paper className={classes.paper}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {newsMenu.date}
          </Typography>
          <Typography variant="h5" component="h2">
            {newsMenu.title}
          </Typography>
          <Typography variant="body2" component="p">
            {newsMenu.discription}
            <br />
          </Typography>
          <Button size="small">More</Button>
        </Paper>
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
