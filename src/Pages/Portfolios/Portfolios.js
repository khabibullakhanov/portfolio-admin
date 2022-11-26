import React, { useState, useEffect } from 'react'
import "./Portfolios.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import exampleImg from "../../Assets/Images/My Image.jpg"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

export function Portfolios() {

    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState([]);
    const navigate = useNavigate();

    const data = [
        {
            id: "12",
            name: "Portfolio-1",
            github: "https://github.com/khabibullakhanov",
            netlify: "https://honey-store.netlify.app/",
            likes: "324",
            moreInfo: "lorem ipsum dolor sit amet",
            img: exampleImg,
        },
        {
            id: "12",
            name: "Portfolio-1",
            github: "https://github.com/khabibullakhanov",
            netlify: "https://honey-store.netlify.app/",
            likes: "324",
            moreInfo: "lorem ipsum dolor sit amet",
            img: exampleImg,
        },
        {
            id: "12",
            name: "Portfolio-1",
            github: "https://github.com/khabibullakhanov",
            netlify: "https://honey-store.netlify.app/",
            likes: "324",
            moreInfo: "lorem ipsum dolor sit amet",
            img: exampleImg,
        },
        {
            id: "12",
            name: "Portfolio-1",
            github: "https://github.com/khabibullakhanov",
            netlify: "https://honey-store.netlify.app/",
            likes: "324",
            moreInfo: "lorem ipsum dolor sit amet",
            img: exampleImg,
        },
        {
            id: "12",
            name: "Portfolio-1",
            github: "https://github.com/khabibullakhanov",
            netlify: "https://honey-store.netlify.app/",
            likes: "324",
            moreInfo: "lorem ipsum dolor sit amet",
            img: exampleImg,
        },
        {
            id: "12",
            name: "Portfolio-1",
            github: "https://github.com/khabibullakhanov",
            netlify: "https://honey-store.netlify.app/",
            likes: "324",
            moreInfo: "lorem ipsum dolor sit amet",
            img: exampleImg,
        },
        {
            id: "12",
            name: "Portfolio-1",
            github: "https://github.com/khabibullakhanov",
            netlify: "https://honey-store.netlify.app/",
            likes: "324",
            moreInfo: "lorem ipsum dolor sit amet",
            img: exampleImg,
        },
        {
            id: "12",
            name: "Portfolio-1",
            github: "https://github.com/khabibullakhanov",
            netlify: "https://honey-store.netlify.app/",
            likes: "324",
            moreInfo: "lorem ipsum dolor sit amet",
            img: exampleImg,
        },
    ];

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (e.target.className === "mostseen_modal_body open") {
                setModal(!modal);
            }
        });
    });
    console.log(data.length);

    return (
        <div id='portfolios-main-container'>
            <h3>About Portfolios</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 338 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell align="center">Name</TableCell>
                            {/* <TableCell align="center">Git Hub</TableCell>
                            <TableCell align="center">Netlify</TableCell>
                            <TableCell align="center">Likes</TableCell> */}
                            <TableCell align="center">See More</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow
                                key={index}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <img id='portfolio-img' src={row.img} alt="" />
                                </TableCell>
                                <TableCell component="th" align="center" scope="row">
                                    {row.name}
                                </TableCell>
                                {/* <TableCell align="center">{row.github}</TableCell>
                                <TableCell align="center">{row.netlify}</TableCell>
                                <TableCell align="center">{row.likes}</TableCell> */}
                                <TableCell align="center">
                                    <IconButton
                                        onClick={() => {
                                            setModal(!modal);
                                            setModalData(row)
                                        }}
                                    >
                                        <RemoveRedEyeIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => {
                                            navigate(`portfolio_veiw${row.id}`)
                                        }}
                                    >
                                        <EditIcon />
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
                                <img src={modalData.img} alt="" />
                            </figure>
                        </div>
                        <div id="most-seen-modal-about">
                            <div>
                                <h5>Portfolio Name :</h5>
                                <p>{modalData.name}</p>;
                            </div>
                            <div>
                                <h5>
                                    Git Hub :
                                </h5>
                                <p>{modalData.github}</p>;
                            </div>
                            <div>
                                <h5>
                                    Netlify Link:
                                </h5>
                                <p id="most-seen-about-modalData">{modalData.netlify}</p>;
                            </div>
                            <div>
                                <h5>
                                    Likes :
                                </h5>
                                <p>{modalData.likes}</p>;
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
        </div>
    )
}
