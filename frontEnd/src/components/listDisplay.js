import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";

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

export default generate;