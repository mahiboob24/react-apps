import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../product/product.css'
import { HiMiniAdjustmentsVertical } from "react-icons/hi2";
import { FaEye  } from "react-icons/fa";
import { CiShoppingBasket ,CiHeart } from "react-icons/ci";


function CategoryProduct() {
    const [products, setproducts] = useState();
    useEffect(() => {
        const getproducts = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3009/api/product/getProduct/'
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

        <div className='container '>
            <div className="row ">
                <div className="col-3 mt-4" ><h3>CATEGORY PRODUCTS</h3></div>
                <div className="col-3 mt-4" ><hr /></div>
                <div className='col d-flex justify-content-evenlys align-items-center'>

                    ACCESSORIES
                    ATOMTRONICS
                    NIGHT LAMPS
                    INDUCTION
                    LAMP
                </div>
            </div>

            <div className='row'>
                <div className='col-2 bg-light '>
                    <img src='/images/c.jpeg' alt='demo' className='mt-5'/>
                </div>
                {products ? (
                    products.data.map((item, index) => (
                        <div key={index} className='col  my-3 fs-6'>
                            <div className='card border-0 card-container'>
                                <Link to={`/product/${item._id}`} className='text-decoration-none text-dark'>

                                    <div className='card-body '>
                                        <img src={item.imageURL} className="img-fluid  p-img" alt="images" height={150} />
                                        <div>
                                            <i className="fa-regular fa fa-star"></i>
                                            <i className="fa-regular fa fa-star"></i>
                                            <i className="fa-regular fa fa-star"></i>
                                            <i className="fa-regular fa fa-star"></i>
                                        </div>
                                        <div className='card-title fs-5 fw-bold'>

                                            {item.productname}
                                            <div className='fw-bold'>
                                                $  {item.price}
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                                <div className="icons-container ">
                                        <span className="icons border text-center rounded" style={{width:"40px",height:"40px"}}><a className='fs-4 text-decoration-none' href='/'><CiShoppingBasket /></a></span>
                                        <span className="icons border text-center rounded" style={{width:"40px",height:"40px"}}><a className='fs-4 icon-a'href='/'><CiHeart /></a></span>
                                        <span className="icons border text-center rounded" style={{width:"40px",height:"40px"}}><a className='fs-4 icon-a'href='/'><HiMiniAdjustmentsVertical /></a></span>
                                        <span className="icons border text-center rounded" style={{width:"40px",height:"40px"}}><a className='fs-4 icon-a'href='/'><FaEye /></a></span>
                                    </div>

                            </div>
                        </div>
                    ))
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        </div>
    );
}

export default CategoryProduct