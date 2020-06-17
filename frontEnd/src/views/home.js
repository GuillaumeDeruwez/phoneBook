import React, { useState } from 'react';
import Search from '@material-ui/icons/Search';
import axios from 'axios';
import config from '../config.js';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, TextField, InputAdornment } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";
import useStyles from '../styles/general';


function generate(array) {
    return array.map((value) => {
        return <ListItem divider key={value._id}>
            <ListItemText primary={`${value.lastName} ${value.firstName}`} secondary={value.phoneNumber} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" component={Link} to={{
                            pathname: "/edit",
                            state: { value }
                        }}>
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    });
}

export default function Home() {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState();
    const [inputError, setInputError] = useState(false);
    const [helperText, setHelperText] = useState("");
    const [arrayEntries, setArrayEntries] = useState([]);

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
                setArrayEntries(response.data);
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
                <List>
                    {
                        generate(arrayEntries)
                    }
                </List>
            </div>
        </div>
    );
}
