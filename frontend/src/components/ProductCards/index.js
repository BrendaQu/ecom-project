import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";


const ProductCards = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=dior&product_type=eyeshadow')
        .then(response => {
            setProducts(response.data)
        })
        .catch(error => console.error(error));
    })

    return (
        <div className="container">
            <div className="row">
                {
                    products.map(product => <Product data={product} />)
                }
            </div>
                
        </div>
    )
}

export default ProductCards;