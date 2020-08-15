import { makeStyles } from '@material-ui/core'
import Grid, { GridSpacing } from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import React from 'react'

export const News: React.FC = ({children}) => {
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);  

    const classes = useStyles()
    return (
        <>
            <Grid item xs={12}>
                 <Grid container justify="center" spacing={spacing}>
                      {[0, 1, 2, 3].map((value) => (
                          <Grid key={value} item>
                              <Paper className={classes.paper} />
                          </Grid>
                      ))}
                  </Grid>
            </Grid>
        </>
    )
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
}))

export default News;