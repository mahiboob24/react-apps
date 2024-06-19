import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Herosubsec4() {
    const [products, setproducts] = useState();
    useEffect(() => {
        const getproducts = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3009/api/product/getProduct'
                );
                const data = await response.data;
                setproducts(data);

            } catch (error) {
                console.log(error)
            }
        }
        getproducts();
    }, []);


    return (
        <div className='container mb-5 mt-5 bg-light'>
          
            <div className="row ">
                   <div   className="col-3 mt-4" ><h3> TOP CATEGORY</h3></div> 
                   <div   className="col-8 mt-4" ><hr  /></div> 
                </div>



            <div className='row'>
                <div className=' col-lg-8 '>
                    <div className='row'>
                        {products ? (
                            products.data.map((item, index) => (
                                <div className='col-sm-4 mb-3' key={index}>
                                    <div className='card'>
                                        <div className='card-title'>
                                            <div className='card-body '>
                                                <div className='row'>
                                                    <div className='col-lg-6 col-md-4'>
                                                        <img src='/images/p1.jpeg' className="img-fluid rounded-start" alt="images" />
                                                        <div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6'>
                                                        <i className="fa-regular fa fa-star"></i>
                                                        <i className="fa-regular fa fa-star"></i>
                                                        <i className="fa-regular fa fa-star"></i>
                                                        <i className="fa-regular fa fa-star"></i>
                                                        <p className="card-text fw-bold">{item.productname}</p>
                                                        <p className="card-text fw-bold">${item.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h1>Loading...</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosubsec4