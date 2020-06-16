import React from 'react';
import {
    useParams
  } from "react-router-dom";

function Edit() {
    let {id} = useParams();
    return (
        <div>
            test edit {id}
        </div>
    );
}

export default Edit;