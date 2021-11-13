import React from 'react';
import logo from '../../../images/logo.png';
import { Switch, Route, Link, useRouteMatch,useHistory } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProduct from '../ManageProduct/ManageProduct';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../../routes/AdminRoute';
import DashboardHome from '../DashboardHome/DashboardHome';
import './Dashboard.css';
import { faCreditCard, faDolly, faHome, faPlusSquare, faShoppingBag, faShoppingCart, faStarHalfAlt, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const history = useHistory();
    const {logout,isAdmin} = useAuth();
    const logOutHandle= () => {
        logout();
        history.push('/home');
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-3 ps-0" style={{minHeight:'100vh'}}>
                    <div className="dashboard border-end">
                        <img src={logo} style={{width:'90px', padding:'10px'}} alt="" />

                        <div className="normal-user">
                            <ul className="nav flex-column">
                                <li className="nav-item border-top p-3">
                                    <Link to="/"> <FontAwesomeIcon icon={faHome} ></FontAwesomeIcon> Home</Link>
                                </li>
                                <li className="nav-item border-top p-3">
                                    <Link to={`${url}`}><FontAwesomeIcon icon={faUsers} ></FontAwesomeIcon> Dashboard</Link>
                                </li>
                            </ul>
                            {!isAdmin && 
                                <ul className="nav flex-column">
                                    <li className="nav-item border-top p-3">
                                        <Link to={`${url}/myorder`}><FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> My Orders</Link>
                                    </li>
                                    <li className="nav-item border-top p-3">
                                        <Link to={`${url}/pay`}><FontAwesomeIcon icon={faCreditCard} ></FontAwesomeIcon> Pay</Link>
                                    </li>
                                    <li className="nav-item border-top p-3">
                                        <Link to={`${url}/review`}><FontAwesomeIcon icon={faStarHalfAlt} ></FontAwesomeIcon> Review</Link>
                                    </li>
                                    <li className="nav-item border-top border-bottom p-3">
                                        <button onClick={logOutHandle} className="btn theme-bg text-white">Logout</button>
                                    </li>
                                    
                                </ul>
                            }
                        </div>
                        <div className="admin-dashboard">
                            
                            {isAdmin && 
                                <ul className="nav flex-column border-top">
                                    <li className="nav-item border-top p-3">
                                        <Link to={`${url}/makeAdmin`}><FontAwesomeIcon icon={faUser} ></FontAwesomeIcon> Make Admin</Link>
                                    </li>
                                    <li className="nav-item border-top p-3">
                                        <Link to={`${url}/addProduct`}><FontAwesomeIcon icon={faPlusSquare} ></FontAwesomeIcon> Add A Product</Link>
                                    </li>
                                    <li className="nav-item border-top p-3">
                                        <Link to={`${url}/manageProduct`}><FontAwesomeIcon icon={faShoppingBag} ></FontAwesomeIcon> Manage Product</Link>
                                    </li>
                                    <li className="nav-item border-top p-3">
                                        <Link to={`${url}/manageOrders`}><FontAwesomeIcon icon={faDolly} ></FontAwesomeIcon> Manage All Orders</Link>
                                    </li>
                                    <li className="nav-item border-top border-bottom p-3">
                                        <button onClick={logOutHandle} className="btn theme-bg text-white">Logout</button>
                                    </li>
                                </ul>
                            }
                           
                        </div>
                    </div>
                </div>
                <div className="col-md-9">

                    <div className="" >
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route exact path={`${path}/myorder`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <AdminRoute exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/manageProduct`}>
                                <ManageProduct></ManageProduct>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/manageOrders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </AdminRoute>
                        </Switch>

                    </div>
                    
                </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;