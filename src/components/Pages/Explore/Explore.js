import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Zoom from "react-reveal/Zoom";
import Product from '../Home/Product/Product';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://calm-refuge-73180.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <>
            <Header></Header>
            <div className="add-product py-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title mb-5 py-3">
                                <Zoom>
                                <h2 className="theme-color">Our Product</h2>
                                <p>Our all Product is here. You can purchase now this food.</p>
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
                        </div>

                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Explore;