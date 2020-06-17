import React, { useState } from 'react';
import Alert from '../components/alert';
import { Snackbar} from '@material-ui/core';

export default function SnackBarHook() {
    const [open, setOpen] = useState(false);

    function handleClose() {
        setOpen(false);
    }

    const SnackBarComponent = (props) => (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={props.message.severity}>
                    {props.message.message}
                </Alert>
        </Snackbar>
    )

    return [setOpen, SnackBarComponent];
}

