import React, { useEffect, useState } from 'react'
import "./MostSeen.css"
import axios from 'axios';



export function MostSeen() {

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
        <div>{mostSeenProducts.map((item, index) => {
            return (
                <p>{item.name}</p>
            )
        })}</div>
    )
}
