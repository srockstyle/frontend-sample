import { Grid, makeStyles, GridSpacing, Typography } from "@material-ui/core";

import React from "react";

import { NewsMenu } from "../../../pages/Home";
import { NewsMenuItem } from "./NewsMenuItem";

type Props = {
  newsMenus: NewsMenu[];
};

// ここの段階では、親で定義されてるnewsオブジェクトの中のnewsMenusの中身だけが入ってくる
// newsMenusは
// 1. 配列になってる
// 2. 配列の中身はNewsMenus型のオブジェクトが入ってる想定
// 具体的にはこんな感じ↓
// [
//   {
//     id: 1,
//     key: "1",
//     date: "20200402",
//     title: "サイトオープン",
//     discription: "公式サイトを起動",
//     link: "",
//   },
// ]
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
