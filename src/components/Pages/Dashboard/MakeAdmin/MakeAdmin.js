import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success,setSuccess] = useState(false);

  const onSubmit = (data) => {
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(data => {
        if (data.inserted) {
            setSuccess(true);
            reset();
        }
    });
    console.log(data);
  };
    return (
        <div>
            <h1 className="p-2">Make admin</h1>
            <div className="p-5" style={{backgroundColor: '#F4F7FC',minHeight:'90vh'}}>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4>Please give an email Address</h4>
                    <input
                    style={{width: '50%'}}
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                    />
                    <input
                    className="submit-btn btn theme-bg mt-3"
                    type="submit"
                    value="Make as Admin"
                    />
                </form>
                {success && <span className="text-primary">Make admin successfully</span>}
            </div>

        </div>
    );
};

export default MakeAdmin;