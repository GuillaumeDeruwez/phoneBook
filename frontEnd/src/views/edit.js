import React from 'react';
import {
    useLocation
  } from "react-router-dom";
import { Button } from '@material-ui/core';

function Edit() {
    const data = useLocation();
    return (
        <div>
            {data.state.value.firstName}
        </div>
    );
}

export default Edit;