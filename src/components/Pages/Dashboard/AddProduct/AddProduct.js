import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Added successfully", "success")
                    reset();
                }
            })
    }
    return (
        <div className="p-2">
            <h2 className="py-3">Add A Product</h2>
            <div className="p-2" style={{backgroundColor: '#F4F7FC',minHeight:'90vh'}}>
                <h4 className="py-3">Please Add A Product Here</h4>
                    <div className="single-add-product">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="mb-2">Product Name</label>
                            <input className="form-control mb-3" {...register("name")} placeholder="Name" />
                            <label className="mb-2">Product Category</label>
                            <input className="form-control mb-3" type="text" {...register("category")} placeholder="Category" />
                            <label className="mb-2">Product Price</label>
                            <input className="form-control mb-3" type="number" {...register("price")} placeholder="price" />
                            <label className="mb-2">Product Description</label>
                            <textarea className="form-control mb-3" {...register("description")} placeholder="Description" />
                            <label className="mb-2">Image</label>
                            <input className="form-control mb-3" {...register("img")} placeholder="image url" />
                            <input className="btn theme-bg text-white"type="submit" />
                        </form>
                    </div>
            </div> 
        </div>
    );
};

export default AddProduct;