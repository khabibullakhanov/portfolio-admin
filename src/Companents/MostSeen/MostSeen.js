import React, { useEffect, useState } from 'react'
import "./MostSeen.css"
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';




export function MostSeen() {
    const navigate = useNavigate()

    const [product, setProduct] = useState([])

    const mostSeenProducts = product.filter((item) => item.view > 10).sort((a, b) => {
        return b.view - a.view
    });

    useEffect(() => {
        axios("https://honey.pandashop.uz/product/view")
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);
    return (
        // <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 540 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Like</TableCell>
                            <TableCell align="center">Number of Viewers</TableCell>
                            <TableCell align="center">See More</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mostSeenProducts.map((row, index) => (
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
                                    115
                                </TableCell>
                                <TableCell component="th" align="center" scope="row">
                                    {row.view}
                                </TableCell>
                                <TableCell component="th" align="center" scope="row">
                                    <IconButton
                                        onClick={() => {
                                            navigate(`view_portfolio`)
                                        }}
                                    >
                                        <RemoveRedEyeIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        // </div>
    )
}
