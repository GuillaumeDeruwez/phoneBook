import React, { useState } from 'react';
import axios from 'axios';
import config from '../config.js';
import { Button, TextField, Snackbar } from '@material-ui/core';
import Alert from '../components/alert';
import useStyles from '../styles/general';

function Create() {
    const classes = useStyles();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: ""
    });
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({message : "", severity : "error"});

    function handleClose() {
        setOpen(false);
    }

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
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={message.severity}>
                    {message.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Create;