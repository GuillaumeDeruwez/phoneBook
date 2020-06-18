import React, { useState } from 'react';
import { Toolbar, IconButton, AppBar, Typography, Menu, MenuItem } from '@material-ui/core';
import { Link } from "react-router-dom";
import useStylesAppBar from '../styles/appbar';
import MenuIcon from '@material-ui/icons/Menu';

export default function AppBarCustom(props) {
    const classesAppBar = useStylesAppBar();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseNav = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div className={classesAppBar.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classesAppBar.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classesAppBar.title} variant="h6" noWrap>
                            {props.title}
                        </Typography>
                        {
                            props.child
                        }
                    </Toolbar>
                </AppBar>
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseNav}
            >
                <MenuItem component={Link} to={{ pathname: props.link.url }} > {props.link.linkName}</MenuItem>
            </Menu>
        </div>

    )
}