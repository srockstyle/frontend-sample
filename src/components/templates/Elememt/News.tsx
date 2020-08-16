import { makeStyles } from "@material-ui/core";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";

type NewsContents = {
  key: string;
  date: string;
  title: string;
  discription: string;
};

export const News: React.FC = ({ children }) => {
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);

  const classes = useStyles();

  // 配列定義
  // APIで引っ張ってくるようにする。
  // keyってどうやってやればええやろか。
  const items: NewsContents[] = [
    {
      key: "1",
      date: "20200402",
      title: "サイトオープン",
      discription: "サイトオープン",
    },
    {
      key: "2",
      date: "20200402",
      title: "サイト更新1",
      discription: "サイト更新1",
    },
    {
      key: "3",
      date: "20200402",
      title: "サイト更新2",
      discription: "サイト更新2",
    },
    {
      key: "4",
      date: "20200402",
      title: "サイト更新3",
      discription: "サイト更新4",
    },
  ];

  return (
    <>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {items.map((value) => (
            <Grid key={value.key} item>
              <Paper className={classes.paper}></Paper>
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
}));

export default News;
