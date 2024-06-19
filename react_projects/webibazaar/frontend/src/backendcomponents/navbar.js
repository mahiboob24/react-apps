import React from 'react'
import { MDBInputGroup } from 'mdb-react-ui-kit';
import MyComponent from './dropdown'
import Subnav from './subnav'
import { TiShoppingCart } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


function Navbar() {


    return (

        <>

            <div>

            </div>


            <div className='container-fluid mb-2 bg-light'>
                <div className='row'>
                    <div className='col '>
                        <div className='nav d-flex justify-content-around align-items-center'>
                            <div className='nav-link'>
                                <img src="/images/webi-logo.png" alt='logo' />

                            </div>
                            <div className='nav-link'>Shopeur Electronics WooCommerce Theme</div>
                            <div className=' d-flex'>
                                <div className='nav-link '><img src="/images/desk.png" alt='desk' width={50} />Desktop</div>
                                <div className='nav-link'><img src="/images/tab.png" alt='tab' width={50} />Tablet</div>
                                <div className='nav-link'><img src="/images/phon.png" alt='phon' width={50} />Mobile</div>

                            </div>

                            <div className='nav-link'><button className='btn btn-secondary float-end'>Buy</button></div>
                        </div>
                    </div>
                </div>



                <div className='conatiner mb-3'>
                    <div className='row'>
                        <div className='col'>
                            <div className='nav d-flex justify-content-around align-items-center'>
                                <div className='nav-link'>
                                    <img src='/images/logo.png' alt='shoplogo' />
                                </div>
                                <div className='nav-link  '>
                                    <div className='d-flex ' >

                                        <MDBInputGroup tag="form" className='d-flex border'>
                                            < MyComponent />
                                            <input className='border-0  text-muted' style={{ width: "400px" }} placeholder="search products" aria-label="Search" type='Search' />
                                            <button className='btn btn-warning'>search</button>
                                        </MDBInputGroup>
                                    </div>
                                </div>
                                <div className=' '>

                                    <PopupState variant="popover" popupId="demo-popup-menu">
                                        {(popupState) => (
                                            <React.Fragment>
                                                <span variant="contained " {...bindTrigger(popupState)}>
                                                    {/* <Link to="/Signin"  className='text-decoration-none text-dark' >  */}
                                                    <div className='d-flex justify-content-around align-items-center'>
                                                        <div className='border p-2 rounded bg-light '>
                                                            <FaRegUser className='icon fs-2 ' />
                                                        </div>

                                                        <div>
                                                            <span className=''>   My Account  </span> <br />
                                                            <p className=''> Sign in   </p>
                                                        </div>

                                                    </div>
                                                </span>
                                                <Menu {...bindMenu(popupState)}>
                                                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                                    <MenuItem onClick={popupState.close}> <Link to="/signin " className='text-decoration-none text-dark' >Sign in    </Link> </MenuItem>
                                                    <MenuItem onClick={popupState.close}>  <Link to="/ " className='text-decoration-none text-dark' >Logout    </Link> </MenuItem>
                                                </Menu>
                                            </React.Fragment>
                                        )}
                                    </PopupState>
                                </div>



                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='border p-2 rounded bg-light '>
                                        <TiShoppingCart className='icon fs-2' />
                                    </div>

                                    <div>
                                        <Link to="/addToCart" className='text-decoration-none text-dark' >My Cart    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Subnav />







            </div >


        </>



    )
}

export default Navbar