import React from 'react';
import { makeStyles, TableContainer, Table, TableBody, TableHead, TableRow, Paper, TableCell, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        padding: 0,
    },
    table: {
        minWidth: 650,
    }
}))

const UserTable = (props) => {
    const classes = useStyles()
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">FirstName</TableCell>
                        <TableCell align="right">MiddleName</TableCell>
                        <TableCell align="right">LastName</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.length > 0 ? (
                        props.users.map(user => {
                            const { id, firstName, middleName, lastName } = user;
                            return (
                                <TableRow key={id}>
                                    <TableCell component="th" scope="row">
                                        {id}
                                    </TableCell>
                                    <TableCell align="right">{firstName}</TableCell>
                                    <TableCell align="right">{middleName}</TableCell>
                                    <TableCell align="right">{lastName}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            type="submit"
                                            onClick={() => props.deleteUser(id)}
                                        >Delete</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            type="submit"
                                            onClick={() => props.editUser(id, user)}
                                        >Edit</Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    ) : (
                        <TableCell component="th" scope="row"> No User Found </TableCell>
                    )}
                </TableBody>
            </Table >
        </TableContainer >
        // <table>
        //     <thead>
        //         <tr>
        //             <th>ID</th>
        //             <th>firstName</th>
        //             <th>middleName</th>
        //             <th>lastName</th>
        //             <th>Actions</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {props.users.length > 0 ? (
        //             props.users.map(user => {
        //                 const { id, firstName, middleName, lastName } = user;
        //                 return (
        //                     <tr>
        //                         <td>{id}</td>
        //                         <td>{firstName}</td>
        //                         <td>{middleName}</td>
        //                         <td>{lastName}</td>
        //                         <td>
        //                             <button onClick={() => props.deleteUser(id)}>Delete</button>
        //                             <button onClick={() => props.editUser(id, user)}>Edit<button>
        //                         </td>
        //                     </tr>
        //         )
        //     })
        // ) : (
        //             <tr>
        //                 <td colSpan={4}>No users found</td>
        //             </tr>
        //         )
        //         }
        //     </tbody>
        // </table>
    )
}

export default UserTable;