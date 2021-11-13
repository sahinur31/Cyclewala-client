import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    
    const {user} = useAuth() || {};
    const [myOrders, setMyOrders] = useState([]);
    useEffect(()=> {
        fetch(`http://localhost:5000/myorders/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [user.email])

    const handleCancel = id => {
        const proceed = window.confirm('Are you sure you want to delete');
        if(proceed){
            const url = `http://localhost:5000/myorders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remainingProducts = myOrders.filter(order => order._id !== id);
                    setMyOrders(remainingProducts);
                }
            })
        }
    }
    return (
        <div className="p-2">
            <h2>Your Orders </h2>
            <div className="p-2" style={{backgroundColor: '#F4F7FC',minHeight:'90vh'}}>
                <h4 className="py-3">See your Orders Here</h4>
                <div className="order-single p-4">
                        <Table striped bordered responsive>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>User Name</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    myOrders.map(order => <tr key={order._id}>
                                            <td>{order._id}</td>
                                            <td>{order.name}</td>
                                            <td>{order.price}</td>
                                            <td>{order.status}</td>
                                            <td>
                                                <button onClick={() => handleCancel(order._id)} className="btn btn-danger ms-2">Cancel</button>
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

export default MyOrders;