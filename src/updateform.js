import React, { useState, useEffect } from 'react';
import { makeStyles, Container, TextField, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        padding: 0,
    },
    btn: {
        padding: theme.spacing(2)
    }
}))

const EditUserForm = (props) => {
    const classes = useStyles()
    const [user, setUser] = useState(props.currentUser);

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) props.updateUser(user);
    }

    return (

        <Container >
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="firstName" value={user.firstName} variant="outlined" onChange={handleChange} />
                <TextField id="filled-basic" label="middleName" value={user.middleName} variant="outlined" onChange={handleChange} />
                <TextField id="outlined-basic" label="lastName" value={user.lastName} variant="outlined" onChange={handleChange} />
                <Button className={classes.btn}
                    variant="outlined"
                    color="primary"
                    type="submit"
                    onClick={() => handleSubmit}
                > Done </Button>
                <Button className={classes.btn}
                    variant="outlined"
                    color="primary"
                    type="submit"
                    onClick={() => props.setEditing(false)}
                > Cancel </Button>
            </form>
        </Container >

        // <form>
        //     <input className="u-full-width" type="text" value={user.firstName} name="name" onChange={handleChange} />
        //     <input className="u-full-width" type="text" value={user.middleName} name="username" onChange={handleChange} />
        //     <input className="u-full-width" type="text" value={user.lastName} name="username" onChange={handleChange} />
        //     <button className="button-primary" type="submit" onClick={handleSubmit} >Done</button>
        //     <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        // </form>
    )
}

export default EditUserForm;

