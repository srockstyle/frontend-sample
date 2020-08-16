import { makeStyles } from "@material-ui/core";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NewsMenu } from "../../pages/HomePage";
import { NewsMenus } from "../../pages/HomePage";

type Props = {
  newsContents: NewsMenus[];
};

export const News: React.FC = ({ newsContents }) => {
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);

  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Typography variant="h4" component="h2">
            News
          </Typography>
        </Grid>
        <Grid container justify="center" spacing={spacing}>
          {newsContents.map((news: NewsMenu) => (
            <Grid key={news.key} item>
              <Paper className={classes.paper}>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {news.date}
                </Typography>
                <Typography variant="h5" component="h2">
                  {news.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {news.discription}
                  <br />
                </Typography>
                <Button size="small">More</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
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

export default News;
