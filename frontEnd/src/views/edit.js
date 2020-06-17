
import React, { useState } from 'react';
import {useLocation} from "react-router-dom";
import { Button, TextField, Snackbar } from '@material-ui/core';
import axios from 'axios';
import config from '../config.js';
import Alert from '../components/alert';
import useStyles from '../styles/general';

function Edit() {
    const classes = useStyles();
    const data = useLocation();
    const [form, setForm] = useState({
        firstName: data.state.value.firstName,
        lastName: data.state.value.lastName,
        phoneNumber: data.state.value.phoneNumber
    });
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({message : "", severity : "error"});

    function handleClose() {
        setOpen(false);
    }

    async function submitForm(e) {
        e.preventDefault();
        try {
            await axios.patch(`${config.serverURL}update/${data.state.value._id}`, form);
            setMessage({message : "Entry succesfully modified", severity : "success"});
            setOpen(true);
        } catch (error) {
            setMessage({message : "Entry modification failed", severity : "error"});
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
                <Button className={classes.contained} type="submit" variant="contained" color="primary">Save modification</Button>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={message.severity}>
                    {message.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Edit;