import React from 'react';

// import { Link } from 'react-router-dom';
import Navbar from '../backendcomponents/navbar';
import Footer from '../backendcomponents/footer';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';



import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Contact = () => {



    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#FFFFFF',
            color: 'rgba(0, 0, 0, 0.87)',
            fontSize: theme.typography.pxToRem(12),

        },
    }));

    return (
        <>
            <Navbar />

            <div className="container mt-4 mb-4">
                <div className="row">


                    <div className="col-3">

                        <div className='card'>
                            <div className='bg-warning d-flex justify-content-around align-items-center'>
                                <i className='fa fa-bars  ms-0'></i>
                                <p className='fw-bolder mt-3 me-5 '>ALL CATEGORY</p>
                            </div>

                            <List >
                                <HtmlTooltip placement="right-start" className="bg-white"
                                    title={
                                        <Box >
                                            <div className='row'>
                                                <Typography className='card-body col-4' component="div" >
                                                    <div className='card-body'>
                                                        <div className='card-title'>CATEGORY</div>
                                                        <p>  <span>Avionics</span></p>
                                                        <p>  <span>Avionics</span></p>
                                                        <p>  <span>Avionics</span></p>
                                                        <p>  <span>Avionics</span></p>
                                                        <p>  <span>Avionics</span></p>
                                                    </div>
                                                </Typography>
                                                <Typography className='card-body col-4' component="div" >
                                                    <div className='card-body'>
                                                        <div className='card-title'>CATEGORY</div>
                                                        <p>  <span>Avionics</span></p>
                                                        <p>  <span>Avionics</span></p>
                                                        <p>  <span>Avionics</span></p>
                                                        <p>  <span>Avionics</span></p>
                                                        <p>  <span>Avionics</span></p>
                                                    </div>
                                                </Typography>
                                                <Typography className='card-body col-4' component="div" >
                                                    <div className='card-body'>
                                                        <div className='card-title'>CATEGORY</div>
                                                        {/* <p>  <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/21.jpg' width={200} alt='rrrr' />  </p> */}

                                                        <p>  <span>Avionics</span></p>
                                                        <p>  <span>Avionics</span></p>

                                                    </div>
                                                </Typography>
                                            </div>
                                        </Box>
                                    }
                                >
                                    <ListItemButton>    <ListItemText primary="Sent mail" />  </ListItemButton>
                                </HtmlTooltip>

                                <ListItemButton>
                                    <ListItemText primary="Drafts" />
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="Drafts" />
                                </ListItemButton>
                                <HtmlTooltip placement="right-start" className="bg-white"
                                    title={

                                        <Typography className='col-12' >
                                            <div className='card-body'>
                                                <p className='ps-4 pe-4 ms-5 me-5'>  <span>Avionics</span></p>
                                                <p className='ps-4 pe-4 ms-5 me-5'>  <span>Avionics</span></p>

                                            </div>
                                        </Typography>
                                    }
                                >
                                    <ListItemButton>   <ListItemText primary="Lamp" />  </ListItemButton>
                                </HtmlTooltip>
                                <ListItemButton>
                                    <ListItemText primary="Drafts" />
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="Drafts" />
                                </ListItemButton>

                                <HtmlTooltip placement="right-start" className="bg-white"
                                    title={

                                        <Typography className='col-12' >
                                            <div className='card-body'>
                                                <p className='ps-4 pe-4 ms-5 me-5'>  <span>Avionics</span></p>
                                                <p className='ps-4 pe-4 ms-5 me-5'>  <span>Avionics</span></p>

                                            </div>
                                        </Typography>
                                    }
                                >
                                    <ListItemButton>    <ListItemText primary="Avionics" />  </ListItemButton>
                                </HtmlTooltip>

                                <ListItemButton>
                                    <ListItemText primary="Drafts" />
                                </ListItemButton>



                            </List>

                        </div>

                        <div className="col-9 mt-5">
                            <p>Product Tags</p><hr />
                            <button className="btn btn-sm my-1 mx-2" style={{ backgroundColor: "whitesmoke" }}>Accessories</button>
                            <button className="btn btn-sm" style={{ backgroundColor: "whitesmoke" }}>Avionics</button>
                            <button className="btn btn-sm" style={{ backgroundColor: "whitesmoke" }}>Bioelectronics</button>
                            <button className="btn btn-sm my-1 mx-2" style={{ backgroundColor: "whitesmoke" }}>Cryotonics</button>
                            <button className="btn btn-sm" style={{ backgroundColor: "whitesmoke" }}>Electronics</button>
                            <button className="btn btn-sm my-1 mx-2" style={{ backgroundColor: "whitesmoke" }}>Handwatch</button>
                            <button className="btn btn-sm" style={{ backgroundColor: "whitesmoke" }}> Induction</button>
                            <button className="btn btn-sm my-1 mx-2" style={{ backgroundColor: "whitesmoke" }}>Integrated</button>
                            <button className="btn btn-sm" style={{ backgroundColor: "whitesmoke" }}>Iphone</button>
                            <button className="btn btn-sm my-1 mx-2" style={{ backgroundColor: "whitesmoke" }}>Laptops</button>
                            <button className="btn btn-sm" style={{ backgroundColor: "whitesmoke" }}>Mega</button>
                            <button className="btn btn-sm my-1 mx-2" style={{ backgroundColor: "whitesmoke" }}>Mobiles</button>
                        </div>

                    </div>

                    <div className="col-9">
                        <h5>CONTACT US</h5>
                        <div className='d-flex flex-row justify-content-between align-items-center '>

                            <div className='card border-0'>
                                <div className='card-body'>
                                    <div className='mt-5'>
                                        <LocationOnIcon style={{ color: "blue" }} sx={{ fontSize: 50 }} />
                                        <h5 style={{ fontWeight: "bold" }}  className='mt-2'>Address:</h5>
                                        <p>1093 Marigold Lane, Coral Way, <br />
                                            Miami, Florida, 33169</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card border-0'>
                                <div className='card-body'>
                                    <div className='mt-5'>
                                        <LocalPhoneIcon style={{ color: "blue" }} sx={{ fontSize: 50 }} />
                                        <h5 style={{ fontWeight: "bold" }} className='mt-2'>Phone numbers:</h5>
                                        <p>610-403-403</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card border-0'>
                                <div className='card-body'>

                                    <div className='mt-5'>
                                        <EmailIcon style={{ color: "blue" }} sx={{ fontSize: 50 }} />
                                        <h5 style={{ fontWeight: "bold" }} className='mt-2'>Email:</h5>
                                        <p>company@example.com</p>
                                    </div>
                                </div>
                            </div>




                        </div>


                        <div className='mt-5'>
                            <form>
                                <fieldset >
                                    <div className="mb-3">
                                        <label for="disabledTextInput" className="form-label">Your Name(required)</label>
                                        <input type="text" id="disabledTextInput" className="form-control bg-light" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="disabledSelect" className="form-label">Your Email(required)</label>
                                        <input type="text" id="disabledSelect" className="form-control bg-light" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="disabledSelect" className="form-label">Subject</label>
                                        <input type="text" id="disabledSelect" className="form-control bg-light" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="disabledSelect" className="form-label">Your Message</label>
                                        <input type="text" id="disabledSelect" className="form-control py-5 bg-light" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </fieldset>
                            </form>
                        </div>




                    </div>



                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;