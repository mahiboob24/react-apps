import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';
import Herosecton from '../backendcomponents/category';
import Navbar from '../backendcomponents/navbar'
import Footer from '../backendcomponents/footer';
import Blog from '../backendcomponents/blog';
import CategoryProduct from '../backendcomponents/categoryproduct';
import Herosubsec5 from '../backendcomponents/herosubsec5';
import Themeextimg from '../backendcomponents/dealoftheday';
import Cards from '../backendcomponents/herosubsec';
import Marquee from '../backendcomponents/movingbrand';
import   FeatureProduct  from '../backendcomponents/featuredProduct';
import { HiMiniAdjustmentsVertical } from "react-icons/hi2";
import { FaEye  } from "react-icons/fa";
import { CiShoppingBasket ,CiHeart } from "react-icons/ci";
import './product.css'



function Productlist() {
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
            <Navbar />
            <Herosecton />
            <Cards />
            <Herosubsec5 />

            <div className='container mb-3 mt-4 '>
                <div className='mb-3 d-flex'>
                    <h3 className=' col-3'>  LATEST PRODUCTS</h3>
                    <hr className=' col-7 ' />
                </div>
                <div className='row'>
                    {products ? (
                        products.data.map((item, index) => (
                            <div key={index} className='col-lg-3 col-md-6  my-3 fs-6'>
                                <div className='card border-0 card-container'>


                                    <div className='card-body '>
                                        <Link to={`/product/${item._id}`} className='text-decoration-none text-dark'>
                                            <img src={item.imageURL} className="img-fluid p-img" alt={item.productname} style={{objectFit:"contain"}} />
                                            <div>
                                                <i className="fa-regular fa fa-star"></i>
                                                <i className="fa-regular fa fa-star"></i>
                                                <i className="fa-regular fa fa-star"></i>
                                                <i className="fa-regular fa fa-star"></i>
                                            </div>
                                            <div className='card-title fs-5 fw-bold '>
                                                {item.productname}
                                                <div className='fw-bold'>
                                                    $  {item.price}
                                                </div>
                                                <div className='fw-bold'>
                                                      {item.category}
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
                            </div>
                        ))
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>
            </div>
            <FeatureProduct />
           

            {/* <TopCategory /> */}
            <CategoryProduct />

            <Themeextimg />

            <Blog />


           <Marquee /> 
            <Footer />

        </>

    );









}












export default Productlist