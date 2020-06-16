import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';
import config from '../config.js';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Home() {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState();
    const [inputError, setInputError] = useState(false);
    const [helperText, setHelperText] = useState("");

    function handleSearchInput(e) {
        let trimmed = e.target.value.trimLeft();
        setSearchTerm(trimmed);
        switch (trimmed[0]) {
            case "+":
                if (!trimmed.match(/\+[0-9]{2}\s[0-9]{2,}\s[0-9]{6,}/)) {
                    setInputError(true);
                    setHelperText("Enter a number with this format : +39 02 1234567");
                } else {
                    setInputError(false);
                    setHelperText("");
                }
                break;
            default:
                if (trimmed === "") {
                    setInputError(true);
                    setHelperText("Enter a first name, last name or phone number");
                } else {
                    setInputError(false);
                    setHelperText("");
                }
                break;
        }
    }

    async function submitForm(e) {
        e.preventDefault();
        if (!inputError) {
            try {
                let response = await axios.get(`${config.serverURL}list/?search=${searchTerm}`);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => submitForm(e)}>
                <TextField id="standard-basic" label="Search" variant="outlined" type="search" helperText={helperText} error={inputError} onChange={(e) => handleSearchInput(e)} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }} />
            </form>
            <div>
                {searchTerm}
            </div>
        </div>
    );
}
