import React from "react";
import ProductCards from "..";

const Product = (props) => {

    return (
        <div class="col-sm-4">
            <div class="card">
                <img src={props.data.image_link} class="card-img-top"/>
                <div class="card-body">
                    <h3 class="card-title" >
                        {props.data.name}
                    </h3>
                    <h1>{props.data.price_sign + props.data.price}</h1>
                    <p class="card-text">{props.data.description}</p>
                    <p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Product;