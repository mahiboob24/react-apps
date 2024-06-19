import React from 'react'
import Navbar from '../backendcomponents/navbar';
import Footer from '../backendcomponents/footer';
const Pageerror = () => {
    return (
        <div>
            <Navbar />
           
            <section className="bg-home ">
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row ">
                        <div className="col-lg-12 col-md-6 ">
                            <img src="http://127.0.0.1:5500/images/404.png" className="img-fluid" alt="" />
                            <div className="text-uppercase mt-4 fs-1 text-center ">Oh ! no</div>
                            <div className="text-capitalize fs-2 text-dark text-center error-page">Page Not Found</div>
                            <p className="text-muted para-desc">Start working with  that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <p className="text-muted para-desc">Start working with  that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                    </div>
                    <div className="container  mb-4 d-flex justify-content-center align-items-center">
                    <div className="row">
                    <div className="col-lg-12 col-md-6 ">
                            <a href="index.html" className="btn btn-outline-primary mt-4">Go Back</a>
                            <a href="index.html" className="btn btn-primary mt-4 ml-2">Go To Home</a>
                        </div>
                    </div>
                    </div>
            </section>
            <Footer />
        </div>
    )
}

export default Pageerror