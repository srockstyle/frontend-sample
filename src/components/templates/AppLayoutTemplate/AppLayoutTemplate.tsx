import { AppBar,makeStyles } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/icons/Menu'
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import React from 'react'

import { Header } from './Header'
import { Copyright } from '../Elememt/Copyright'
import { Navigation } from './Navigation'

export const ApplayoutTemplate: React.FC = ({children}) => {
    const classes = useStyles()
    return (
        <>
            <Navigation />
            <Header />
            {children}
            <Copyright />
        </>     
    )
};
// CSSを書く
const useStyles = makeStyles((theme) => ({

}))
export default ApplayoutTemplate;
