import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user} = useAuth() || {};

    const onSubmit = data => {
        console.log(data);

        axios.post('https://calm-refuge-73180.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Added successfully", "success")
                    reset();
                }
            })
    }
    return (
        <div className="p-2">
            <h2>Review</h2>
            <div className="p-4" style={{backgroundColor: '#F4F7FC',minHeight:'90vh'}}>
                <h4 className="py-3">Please Add a Review</h4>
                    <div className="single-add-product">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                            <input className="form-control mb-3" defaultValue={user.displayName} {...register("name")} placeholder="Your Name" />
                            <input className="form-control mb-3" type="text" {...register("companyDesig")} placeholder=" Designation, Company's Name" />
                            <input className="form-control mb-3" maxlength="5" type="number" {...register("rating", {maxLength: 5 })} placeholder="Give rating between 0 to 5" />
                            <textarea className="form-control mb-3" style={{height:'150px'}} {...register("description")} placeholder="Description" />
                            <input className="form-control mb-3" {...register("img")} placeholder="Your image url" />
                            <input className="btn theme-bg text-white px-4" type="submit"  value="Submit Review" />
                        </form>
                    </div>
            </div> 
        </div>
    );
};

export default Review;