import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import config from '../config.js';
import { List, Typography, InputBase } from '@material-ui/core';
import useStyles from '../styles/general';
import useStylesAppBar from '../styles/appbar';
import generate from '../components/listDisplay';
import SnackBarHook from '../components/SnackBar';
import AppBarCustom from '../components/AppBar';

export default function Home() {
    const [setOpen, SnackBarComponent] = SnackBarHook();
    const [message, setMessage] = useState({ message: "", severity: "error" });

    const classes = useStyles();
    const classesAppBar = useStylesAppBar();

    const [searchTerm, setSearchTerm] = useState();
    const [inputError, setInputError] = useState(false);
    const [arrayEntries, setArrayEntries] = useState([]);

    function handleSearchInput(e) {
        let trimmed = e.target.value.trimLeft();
        setSearchTerm(trimmed);
        switch (trimmed[0]) {
            case "+":
                if (!trimmed.match(/\+[0-9]{2}\s[0-9]{2,}\s[0-9]{6,}/)) {
                    setInputError(true);
                    setMessage({ message: "Enter a number with this format : +39 02 1234567", severity: "info" });
                } else {
                    setInputError(false);
                }
                break;
            default:
                if (trimmed === "") {
                    setInputError(true);
                    setMessage({ message: "Enter a first name, last name or phone number", severity: "info" });
                } else {
                    setInputError(false);
                }
                break;
        }
    }

    async function submitForm(e) {
        e.preventDefault();
        if (!inputError && searchTerm) {
            try {
                let response = await axios.get(`${config.serverURL}list/?search=${searchTerm}`);
                setArrayEntries(response.data);
            } catch (error) {
                console.log(error);
            }
        } else if (!searchTerm) {
            setMessage({ message: "Enter a first name, last name or phone number", severity: "info" });
            setOpen(true);
        } else {
            setOpen(true);
        }
    }

    return (
        <div>
            <AppBarCustom
                title="phoneBook"
                link={{ url: "/create", linkName: "New entries" }}
                child={
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => submitForm(e)}>
                        <div className={classesAppBar.search}>
                            <div className={classesAppBar.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                onChange={(e) => handleSearchInput(e)}
                                placeholder="Search…"
                                classes={{
                                    root: classesAppBar.inputRoot,
                                    input: classesAppBar.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </form>
                }
            />
            {
                arrayEntries.length === 0 
                ? <Typography variant="h4" align="center" className={classes.h4}>Search for a person by first name, last name or phone number</Typography>
                : <List>
                    {
                        generate(arrayEntries)
                    }
                </List>
            }
         
            <SnackBarComponent message={message} />

        </div>
    );
}
