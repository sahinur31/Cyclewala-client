import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Zoom from "react-reveal/Zoom";
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://calm-refuge-73180.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0,6)));
    }, [])
    return (
        <div className="latest-product py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-5 py-3">
                            <Zoom>
                            <h2 className="theme-color">Our Latest Product</h2>
                            <p>Our latest Product is here. You can purchase now this food.</p>
                            </Zoom>
                        </div>
                    </div>
                </div>
                {
                    products.length === 0 ?
                    <Spinner animation="border" />
                    :
                    <div className="row">
                    {
                        products.map(product => <Product
                        key={product._id}
                        data={product}
                        ></Product>)
                    }
                    <Link to="/explore">
                        <button className="btn mt-3 text-center text-white theme-bg">Explore More</button>
                    </Link> 
                    </div>

                }
            </div>
        </div>
    );
};

export default Products;