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
import CloseIcon from '@mui/icons-material/Close';
import { acLoading } from '../../Redux/Loading';
import { useDispatch } from 'react-redux';



export function MostSeen() {
    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    const [modalData, setModalData] = useState([]);
    const [images, setImages] = useState([]);
    const [modal, setModal] = useState(false)

    const mostSeenProducts = product.filter((item) => item.view > 10).sort((a, b) => {
        return b.view - a.view
    });

    useEffect(() => {
        dispatch(acLoading(true))
        axios("https://honey.pandashop.uz/product/view")
            .then((res) => {
                setProduct(res.data);
                dispatch(acLoading(false))
            })
            .catch((err) => {
                dispatch(acLoading(false))
                console.log(err.response.data);
            });
    }, [dispatch]);
    return (
        // <div>
        <>
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
                                            setModal(!modal);
                                            setModalData(row)
                                            setImages(row.img[0])
                                        }}>
                                        <RemoveRedEyeIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div
                className={modal ? "mostseen_modal_body open" : "mostseen_modal_body"}
            >
                <div
                    className={modal ? "mostseen_modal_card open" : "mostseen_modal_card"}
                >
                    <IconButton
                        onClick={() => {
                            setModal(!modal);
                        }}
                    >
                        <CloseIcon style={{ color: "grey" }} />
                    </IconButton>
                    {/* {modalData.map((item, index) => {
                        return ( */}
                    <div id='portfolio-see-inside'>
                        <div className="mostseen_modal_img">
                            <figure>
                                <img src={images} alt="" />
                            </figure>
                        </div>
                        <div id="most-seen-modal-about">
                            <div>
                                <h5>Portfolio Name :</h5>
                                <p>{modalData.name};</p>
                            </div>
                            <div>
                                <h5>
                                    Git Hub :
                                </h5>
                                <a href={modalData.github} target="_blank" rel="noopener noreferrer">{modalData.github};</a>
                            </div>
                            <div>
                                <h5>
                                    Netlify Link:
                                </h5>
                                <a href={modalData.github} target="_blank" rel="noopener noreferrer">{modalData.netlify};</a>
                            </div>
                            <div>
                                <h5>
                                    Likes :
                                </h5>
                                <p>{modalData.likes};</p>
                            </div>
                            <div>
                                <h5>
                                    About :
                                </h5>
                                <p>
                                    {modalData.moreInfo} ;
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* )
                    })} */}
                </div>
            </div>
        </>
    )
}
