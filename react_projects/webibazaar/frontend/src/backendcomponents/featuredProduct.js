import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FaRegStar } from 'react-icons/fa';


function FeatureProduct() {
    const [products, setproducts] = useState();



    useEffect(() => {
        const getproducts = async () => {
            try {
                const response = await axios.get('http://localhost:3009/api/product/getProduct/');
                const data = await response.data;
                setproducts(data);

            } catch (error) {
                console.log(error)
            }
        }
        getproducts();
    }, []);













    return (
        <>

<div className='container-fluid bg-light '>
            <div className='container mb-3  '>
                <div className="row ">
                   <div   className="col-3 mt-4" ><h3>FEATURED PRODUCTS</h3></div> 
                   <div   className="col-8 mt-4" ><hr  /></div> 
                </div>
                    <div className="row   ">
                        <div className="col-8 ">
                            <div className="row">
                                {products ? (
                                    products.data.map((item, index) => (
                                        <div key={index} className='col-lg-4 col-md-6  my-3 fs-6'>
                                            <div className='card border '>

                                                <Link to={`/product/${item._id}`} >
                                                    <div className="col-lg-12  " key={index}>
                                                        <div className="card-body d-flex ">
                                                            <div className="col-6 col-md-6">
                                                                <img src={item.imageURL} className="img-fluid " alt={item.productname} style={{ objectFit: "contain" }} />
                                                            </div>

                                                            <div className="col-6 col-md-6">
                                                                <p className="text-center text-warning">
                                                                    <FaRegStar />
                                                                    <FaRegStar />
                                                                    <FaRegStar />
                                                                    <FaRegStar />
                                                                </p>
                                                                <h6 className=" text-center">{item.title}</h6>
                                                                <p className="text-center">$ {item.price}.00</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <h1>Loading...</h1>
                                )}
                            </div>
                        </div>
                        <div className="col-4">
                        <img src='/images/telivision.jpeg' className="img-fluid " alt='hhh' style={{objectFit:"contain"}} />
                        </div>
                    </div>
            </div>
            </div>




        </>

    );









}












export default FeatureProduct