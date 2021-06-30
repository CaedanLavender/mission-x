import React from 'react'
import {makeStyles} from '@material-ui/core/Styles';
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
import { style } from '@material-ui/system';
import './Login.css';
import Students from './Students.js';
import Teacher from './Teacher.js';
//import CloseIcon from '@material-ui/icons/Close';
import CloseIcon from './CloseIcon.png';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles( {
    dialog: {
        flexDirection: "row",
    },
})

function PopUpList(props) {

    const handleListItemClick = (value) => {
        props.onClose(value);
    }

    const styles = useStyles()
    return (
        <Dialog classes={{paperScrollPaper: styles.dialog}} open={props.dialogOpen} aria-labelledby="d-title">
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex"}}>
                    <Students />
                </div>
                <h1 class="h1">Students</h1>
                <div style={{display: "flex"}}>
                    <button class="h3">LOG IN</button>
                    <button class="h3">SIGN UP</button>
                </div>
                <br/>
                <div class="container">
                    <input type="text" placeholder="Email Address" name="email"/>
                    <br/><br/>
                    <input type="password" placeholder="Password" name="pw"/>
                    <br/><br/><br/><br/>
                    <button class="btn" type="submit">LOG IN</button>
                </div>
            </div>
            
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex"}}>
                    <Teacher />
                    <p>
                        <IconButton>
                            <img src={CloseIcon} style={{height: "35px", width: "35px"}}/>
                        </IconButton>
                    </p>
                </div>
                <h1 class="h1">Teachers</h1>
                <div style={{display: "flex"}}>
                    <button class="h3">LOG IN</button>
                    <button class="h3">SIGN UP</button>
                </div>
                <br/>
                <div class="container">
                    <input type="text" placeholder="Email Address" name="email"/>
                    <br/><br/>
                    <input type="password" placeholder="Password" name="pw"/>
                    <br/><br/><br/><br/>
                    <button class="btn" type="submit">LOG IN</button>
                </div>
            </div>
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
        setDialogOpen(true);
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
