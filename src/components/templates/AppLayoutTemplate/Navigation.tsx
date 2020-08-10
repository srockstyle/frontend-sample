import { Grid,makeStyles } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import { Link } from 'react-router-dom'

import React from 'react'

type HeaderNavItem = {
    label: string
    link: string
}

export const Navigation: React.FC = () => {
    // CSSを使う
    const classes = usesStyles()
    // 配列定義
    // 多分これAPIとかで引っ張ってくるんだろうな
    const items: HeaderNavItem[] = [
        { label: 'ホーム', link: '/'},
        { label: '概要', link: '/overview'},
        { label: '執筆者一覧', link: '/authors'},
        { label: '原稿規定', link: '/reguration'},
        { label: '応募フォーム', link: '/applicationform'},
        { label: 'お問い合わせ', link: '/form'},
    ]
    // classNameでclassを指定
    return (
        <>
            <Grid container justify="flex-end">
                <Grid item className={classes.linkItem}>
                    {items.map((item: HeaderNavItem) => (
                        <Link key={item.link} to={item.link} className={classes.link}>
                            <ListItem button className={classes.menuWrapper}>
                                {item.label}
                            </ListItem>
                        </Link>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}

// CSSを書く
const usesStyles = makeStyles((theme) => ({
    menuIcon: {
        color: 'white',
      },
      link: {
        textDecoration: 'none',
        color: 'white',
      },
      btn: {
        marginRight: theme.spacing(2),
      },
      label: {
        padding: theme.spacing(0, 3, 1, 3),
      },
      linkItem: {
        width: '100%',
      },
      spacer: {
        padding: theme.spacing(0, 3, 5, 3),
      },
      menuWrapper: {
        display: 'flex',
        alignItems: 'center',
        height: 40,
        padding: theme.spacing(0, 3),
      },
}))