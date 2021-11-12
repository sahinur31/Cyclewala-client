import React from 'react';
import Zoom from "react-reveal/Zoom";
import { Link } from 'react-router-dom';

const Product = ({data}) => {
    const {_id,name,price,description,img,category} = data;
    return (
        <Zoom>
            <div className="col-lg-4 text-center">
            <div className="card mb-3 single-service p-3">
                <img src={img} alt="" />
                <h3 className="my-3">{name}</h3>
                <h6 className="my-2 theme-color">{category}</h6>
                <h6>Price: {price}</h6>
                <p className="text-justify">{description.slice(0,20)}</p>
                <div className="text-center">
                    <Link to={`/products/${_id}`}>
                        <button className="btn text-center text-white theme-bg">Purchase Now</button>
                    </Link> 
                </div>
            </div>
        </div>
        </Zoom>
    );
};

export default Product;