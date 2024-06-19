
import React from 'react'
import Navbar from '../backendcomponents/navbar'
import Footer from '../backendcomponents/footer';
import AttractionsIcon from '@mui/icons-material/Attractions';



const Services = () => {

    return (
        <div>
            <Navbar />
            <div className="mb-5 mt-4 ">
                <div className="container d-flex justify-content-center align-items-center ">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="features mt-5 ">
                                <div className=" ">
                              < AttractionsIcon className='text-center' sx={{ fontSize: 100 }}/>
                                </div>

                                <div className="content mt-4">
                                    <h4 className="title-2">Design & Development</h4>
                                    <p className="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-12 mt-5">
                            <div className="features">
                            <div className=" ">
                              < AttractionsIcon className='text-center' sx={{ fontSize: 100 }}/>
                                </div>
                                <div className="content mt-4">
                                    <h4 className="title-2">Management & Marketing</h4>
                                    <p className="text-muted mb-0">Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-12 mt-5">
                            <div className="features">
                            <div className=" ">
                              < AttractionsIcon className='text-center' sx={{ fontSize: 100 }}/>
                                </div>

                                <div className="content mt-4">
                                    <h4 className="title-2">Stratagy & Research</h4>
                                    <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-12 mt-5">
                            <div className="features">
                            <div className=" ">
                              < AttractionsIcon className='text-center' sx={{ fontSize: 100 }}/>
                                </div>

                                <div className="content mt-4">
                                    <h4 className="title-2">Easy To Use</h4>
                                    <p className="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-12 mt-5">
                            <div className="features">
                            <div className=" ">
                              < AttractionsIcon className='text-center' sx={{ fontSize: 100 }}/>
                                </div>
                                <div className="content mt-4">
                                    <h4 className="title-2">Daily Reports</h4>
                                    <p className="text-muted mb-0">Allegedly, a Latin scholar established the origin of the text by compiling unusual established word.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-12 mt-5">
                            <div className="features">
                            <div className=" ">
                              < AttractionsIcon className='text-center' sx={{ fontSize: 100 }}/>
                                </div>
                                <div className="content mt-4">
                                    <h4 className="title-2">Real Time Zone</h4>
                                    <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </div>

    )
}

export default Services