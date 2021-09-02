import React, { useState } from 'react';
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


const AddUserForm = (props) => {
    const classes = useStyles()

    const initUser = { id: null, firstName: "", middleName: "", lastName: "" };
    
    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) {
            handleChange(e, props.addUser(user));
        }
    }

    return (
        <Container>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="firstName" value={user.firstName} variant="outlined" onChange={handleChange} />
                <TextField id="filled-basic" label="middleName" value={user.middleName} variant="outlined" onChange={handleChange} />
                <TextField id="outlined-basic" label="lastName" value={user.lastName} variant="outlined" onChange={handleChange} />
                <Button className={classes.btn}
                    variant="outlined"
                    color="primary"
                    type="submit"
                    onClick={() => handleSubmit}
                > Submit </Button>
            </form>
        </Container>
    )
}

export default AddUserForm;