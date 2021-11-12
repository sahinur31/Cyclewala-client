import React from 'react';
import logo from '../../../images/logo.png';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProduct from '../ManageProduct/ManageProduct';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-3 ps-0" style={{minHeight:'100vh'}}>
                    <div className="dashboard border-end">
                        <img src={logo} style={{width:'70px', marginTop:'15px'}} alt="" />

                        <div className="normal-user">
                            <ul class="nav flex-column">
                                <li class="nav-item border-top p-3">
                                    <Link to="/">Home</Link>
                                </li>
                                <li class="nav-item border-top p-3">
                                    <Link to={`${url}`}>My Orders</Link>
                                </li>
                                <li class="nav-item border-top p-3">
                                    <Link to={`${url}/pay`}>Pay</Link>
                                </li>
                                <li class="nav-item border-top p-3">
                                    <Link to={`${url}/review`}>Review</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="admin-dashboard">
                        <ul class="nav flex-column border-top">
                                <li class="nav-item border-top p-3">
                                    <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                                </li>
                                <li class="nav-item border-top p-3">
                                    <Link to={`${url}/addProduct`}>Add A Product</Link>
                                </li>
                                <li class="nav-item border-top p-3">
                                    <Link to={`${url}/manageProduct`}>Manage Product</Link>
                                </li>
                                <li class="nav-item border-top border-bottom p-3">
                                    <Link to={`${url}/manageOrders`}>Manage All Orders</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="" >
                        <Switch>
                            <Route exact path={path}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route exact path={`${path}/manageProduct`}>
                                <ManageProduct></ManageProduct>
                            </Route>
                            <Route exact path={`${path}/manageOrders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </Route>
                        </Switch>

                    </div>
                    
                </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;