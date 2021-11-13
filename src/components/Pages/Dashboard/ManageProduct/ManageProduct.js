import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('https://calm-refuge-73180.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            console.log(data)
        })
    }, [])
    
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete');
        if(proceed){
            const url = `https://calm-refuge-73180.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0){
                    swal('Deleted Successfully', "success");
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                }
            })
        }
    }
    return (
        <div className="p-2">
            <h2>Manage Product</h2>
            <div className="p-4" style={{backgroundColor: '#F4F7FC',minHeight:'90vh'}}>
                <h4 className="py-3">Please Manage Product Here</h4>
                <div className="order-single">
                        <Table striped bordered responsive>
                                <thead>
                                    <tr>
                                        
                                        <th>Id</th>
                                        <th>Products Name</th>
                                        <th>Price</th>
                                        <th>Category</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    products.map(product => <tr key={product._id}>
                                            <td>{product._id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.category}</td>
                                            <td>
                                                <button onClick={() => handleDelete(product._id)} className="btn btn-danger ms-2">Delete</button>
                                            </td>
                                        </tr>
                                    )} 
                                </tbody>
                            </Table>
                        </div>
            </div> 
        </div>
    );
};

export default ManageProduct;