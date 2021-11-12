import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const Purchase = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth() || {};
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id])
    const onSubmit = data => {
        
        
        const price = product.price;
        data.price =price; 

        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal('Order processed Successfully');
                    reset();
                }
            })
    };
    return (
        <>
        <Header></Header>
        <div className="purchase-area py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center mb-5">
                            <h2>Your Orders Details</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="purchase-single">
                            <img className="img-fluid w-100 mb-3" src={product.img} alt="" />
                            <h2 className="text-capitalize">{product.name}</h2>
                            <h5 className="my-3">Category: {product.category}</h5>
                            <h5><b>Price:</b> {product.price}</h5>
                            <p className="text-justify"><b>Description:</b> {product.description}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="place-single border rounded p-4">
                            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                                <input className="form-control p-3 mb-3" defaultValue={user.displayName} {...register("name")} />

                                <input className="form-control p-3 mb-3" defaultValue={user.email} {...register("email", { required: true })} />
                                {errors.email && <span className="error">This field is required</span>}
                                <input className="form-control p-3 mb-3" placeholder="Status" defaultValue={"pending"} {...register("status")} />

                                <textarea {...register("address" , { required: true })} type="text" className="form-control p-3 mb-3" placeholder="Your Address" cols="30" rows="5"></textarea>
                                <input className="form-control p-3 mb-3" placeholder="City" defaultValue="" {...register("city")} />
                                <input className="form-control p-3 mb-3" placeholder="phone number" defaultValue="" {...register("phone")} />

                                <input className="btn theme-bg text-white" type="submit" value="Purchase Now" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Purchase;