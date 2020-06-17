import React, { useState } from 'react';
import axios from 'axios';
import config from '../config.js';
import { Button, TextField } from '@material-ui/core';
import useStyles from '../styles/general';
import SnackBarHook from '../components/SnackBar';
import AppBarCustom from '../components/AppBar';

function Create() {
    const classes = useStyles();
    const [setOpen, SnackBarComponent] = SnackBarHook();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: ""
    });
    const [message, setMessage] = useState({message : "", severity : "error"});

    async function submitForm(e) {
        e.preventDefault();
        try {
            await axios.post(`${config.serverURL}newPhone`, form);
            setMessage({message : "Entry succesfully created", severity : "success"});
            setOpen(true);
        } catch (error) {
            setMessage({message : "Entry creation failed", severity : "error"});
            setOpen(true);
        }
    }

    function handleInput(e) {
        const { name, value } = e.target;
        const trimmed = value.trimLeft();
        setForm({ ...form, [name]: trimmed });
    }

    return (
        <div>
            <AppBarCustom
                title="Create a new entry"
                link={{ url: "/", linkName: "Home" }}
            />
            <form className={classes.root} autoComplete="off" onSubmit={(e) => submitForm(e)}>
                <TextField required label="First Name" name="firstName" value={form.firstName} onChange={(e) => handleInput(e)} />
                <br />
                <TextField required label="Last Name" name="lastName" value={form.lastName} onChange={(e) => handleInput(e)} />
                <br />
                <TextField required label="Phone Number" name="phoneNumber" helperText="Enter a number with this format : +39 02 1234567" value={form.phoneNumber} onChange={(e) => handleInput(e)} inputProps={{
                    pattern: "\\+[0-9]{2}\\s[0-9]{2,}\\s[0-9]{6,}"
                }} />
                <br />
                <Button className={classes.contained} type="submit" variant="contained" color="primary">Create new entry</Button>
            </form>
            <SnackBarComponent message={message} />
        </div>
    );
}

export default Create;