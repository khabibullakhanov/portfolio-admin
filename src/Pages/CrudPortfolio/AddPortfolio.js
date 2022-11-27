import React, { useState } from 'react'
import "./AddPortfolio.css"
import AddPhotoAlternateSharpIcon from '@mui/icons-material/AddPhotoAlternateSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';

export function AddPortfolio() {
    const navigate = useNavigate()
    const [images, setImages] = useState([]);
    const [imgData, setImgData] = useState([]);
    const [portfolio, setPortfolio] = useState({
        name: "",
        gitHub: "",
        netlify: "",
        about: ""
    })

    return (
        <div id='add-main-container'>
            <h3>Add New Portfolio</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    toast.success("Successfully added new portfolio")
                    navigate("/")
                }
                }>
                <input
                    autoComplete='off'
                    type="text"
                    required
                    onChange={(e) => {
                        setPortfolio({ ...portfolio, name: e.target.value })
                    }}
                    placeholder='Write name...' />
                <input
                    autoComplete='off'
                    type="text"
                    required
                    onChange={(e) => {
                        setPortfolio({ ...portfolio, gitHub: e.target.value })
                    }}
                    placeholder='Write git hub link...' />
                <input
                    autoComplete='off'
                    type="text"
                    required
                    onChange={(e) => {
                        setPortfolio({ ...portfolio, netlify: e.target.value })
                    }}
                    placeholder='Write netlify link...' />
                <label style={imgData.length === 1 ? { display: "none" } : { display: "flex" }}>
                    <AddPhotoAlternateSharpIcon style={{ fontSize: "45px", marginRight: "15px", marginBottom: "10px" }} />
                    <input
                        type="file"
                        onChange={(e) => {
                            setImages([...images, ...e.target.files]);
                            console.log(imgData);
                            const MyFiles = [...imgData];
                            for (let i = 0; i < e.target.files.length; i++) {
                                if (MyFiles.length < 4) {
                                    MyFiles.push(e.target.files[i]);
                                } else {
                                    MyFiles.splice(0, 1);
                                    MyFiles.push(e.target.files[i]);
                                }
                            }
                            setImgData(MyFiles);
                        }}
                    />
                </label>
                {imgData.map((img, index) => {
                    return (
                        <div id="img_card-inside" key={index}>
                            <figure id="figure">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setImgData(imgData.filter((item, i) => i !== index));
                                    }}
                                >
                                    <ClearSharpIcon />
                                </button>
                                <img src={URL.createObjectURL(img)} alt="" />
                            </figure>
                        </div>
                    );
                })}
                {/* <input
                    type="text"
                    autoComplete='off'
                    required
                placeholder='Write about...' /> */}
                <textarea
                    placeholder='Type about...'
                    autoComplete='off'
                    required
                    onChange={(e) => {
                        setPortfolio({ ...portfolio, about: e.target.value })
                    }}
                ></textarea>
                <button type='submit' id='add-portfolio-btn'>Add New Portfolio</button>
            </form>
        </div >
    )
}
