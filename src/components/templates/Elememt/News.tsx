import { makeStyles } from "@material-ui/core";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NewsMenu } from "../../pages/HomePage";
import { NewsMenus } from "../../pages/HomePage";
import { NewsMenuItem } from "./NewsMenuItem";

type Props = {
  newsMenus: NewsMenus[];
};

export const News: React.FC<Props> = ({ newsMenus }) => {
  // Gridの間のスペース指定。
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  };
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
          {newsMenus.map((newsMenu: NewsMenu) => (
            <NewsMenuItem key={newsMenu.key} newsMenu={newsMenu} />
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
