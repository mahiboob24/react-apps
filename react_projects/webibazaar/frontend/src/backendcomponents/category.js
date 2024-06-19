import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';


import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';



function Herosecton() {
    


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
        <div>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-3 mb-4'>
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
                    </div>
                    <div className='col-md-9' >
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src='/images/home.jpg'
                                    alt="First slide"
                                />
                             <Carousel.Caption style={{ color: "white", marginLeft: "40%",  }}>
                                    <h6>Spring-SUMMER 2022</h6>
                                    <h1>Mi Airdots Pro</h1>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.pharetra augue mollis interdum.</p>
                                    <button className='btn btn-primary'>Shop now</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src='/images/home.jpg'
                                    alt="Second slide"
                                />
                               <Carousel.Caption style={{ color: "white", marginLeft: "40%",  }}>
                                    <h6>Spring-SUMMER 2022</h6>
                                    <h1>Mi Airdots Pro</h1>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.pharetra augue mollis interdum.</p>
                                    <button className='btn btn-primary'>Shop now</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src='/images/home.jpg'
                                    alt="Third slide"
                                />
                              <Carousel.Caption style={{ color: "white", marginLeft: "40%",  }}>
                                    <h6>Spring-SUMMER 2022</h6>
                                    <h1>Mi Airdots Pro</h1>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.pharetra augue mollis interdum.</p>
                                    <button className='btn btn-primary'>Shop now</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>


                    </div>





                </div>



            </div>




        </div>
    )
}

export default Herosecton