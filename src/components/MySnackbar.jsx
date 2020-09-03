import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useSelector} from "react-redux";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function MySnackbar() {
    const open = useSelector(state => state.counter === 0);

    return (
        <Snackbar open={open} autoHideDuration={6000}>
            <Alert severity="warning">
                Counter becomes ZERO!
            </Alert>
        </Snackbar>
    );
}
