import { makeStyles } from '@material-ui/core'
//import { GridSpacing } from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import React from 'react'

// 画像は一つ一つimportが必要
import top from '../images/top.jpg'

import { Header } from './Elememt/Header'
import { Copyright } from './Elememt/Copyright'
import { Navigation } from './Elememt/Navigation'
import { News } from './Elememt/News'
import { NewsMenus } from '../pages/HomePage'

type Props = {
    newsContents: NewsMenus,
}

export const HomeTemplate: React.FC<Props> = ({children,newsContents}) => {
    //const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    const classes = useStyles()
    return (
        <>
            <Header />
            <Navigation />
            <Box height="100vh" display="flex" flexDirection="column" class={classes.root}>
                <img src={top} width="100%" alt="top"/>
            </Box>
            <News newsContents={newsContents} />
            <Copyright />
        </>
    )
};
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

export default HomeTemplate;