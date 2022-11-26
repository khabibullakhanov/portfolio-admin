import React from 'react'
import "./Feedback.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import { useDispatch } from 'react-redux';
import { acLoading } from '../../Redux/Loading';




export function Feedback() {
    const dispatch = useDispatch()

    const users = [
        {
            name: "John",
            email: "john@example.com",
            phone: "+998993414718",
            status: "false",
            date: "10:33:40 PM 10 2022"
        },
        {
            name: "John",
            email: "john@example.com",
            phone: "+998993414718",
            status: "false",
            date: "10:34:23 PM 10 2022"
        },
        {
            name: "John",
            email: "john@example.com",
            phone: "+998993414718",
            status: "false",
            date: "10:35:02 PM 10 2022"
        },
        {
            name: "John",
            email: "john@example.com",
            phone: "+998993414718",
            status: "false",
            date: "10:37:35 PM 10 2022"
        },
        {
            name: "John",
            email: "john@example.com",
            phone: "+998993414718",
            status: "false",
            date: "10:39:12 PM 10 2022"
        },
    ]

    const current = new Date();
    const year = current.getFullYear();
    const month = current.getMonth()
    const fullTime = current.toLocaleTimeString()
    const fullDate = fullTime + " " + month + " " + year
    // console.log(fullTime + " " + month + " " + year);

    return (
        <div id='feedback-main-container'>
            <h3
                onClick={() => {
                    dispatch(acLoading(true))
                }}
            >Feedback</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 655 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Phone Number</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row, index) => (
                            <TableRow
                                key={index}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell component="th" align="center" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell component="th" align="center" scope="row">
                                    {row.phone}
                                </TableCell>
                                <TableCell component="th" align="center" scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell component="th" align="center" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell component="th" align="center" scope="row">
                                    {row.status ? <ErrorOutlineIcon /> : <CheckCircleOutlineSharpIcon />}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
