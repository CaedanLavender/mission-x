import React from 'react'

import {useState} from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { EmailSharp } from '@material-ui/icons'

function PopUpList(props) {

    const handleListItemClick = (value) => {
        props.onClose(value);
    }

    return (
        <Dialog open={props.dialogOpen} aria-labelledby="d-title">
            <DialogTitle id="d-title">Students</DialogTitle>
            <List></List>
        </Dialog>
    )
}

export default function Login() {

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = (value) => {
        setDialogOpen(false);
    }

    const handleClickOpen = () => {
    }

    return (
        <Card>
            <CardActions>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>login</Button>
            </CardActions>
            <PopUpList dialogOpen={dialogOpen} onClose={handleDialogClose} />
        </Card>
    )
}
