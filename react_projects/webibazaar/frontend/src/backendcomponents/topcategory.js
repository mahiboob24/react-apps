import React, { useEffect, useState } from 'react'
import axios from 'axios'


function TopCategory () {
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

        <div className='container md-3'>
              <div className='mb-3 d-flex'>
                <h3 className=' col-3'>  TOP CATEGORY</h3>
                <hr className=' col-7 ' />
            </div>
           
            <div className='row'>

                {products ? (
                    products.data.map((item, index) => (
                        <div key={index} className='col my-3 fs-6'>
                            <div className='card '>
                                <img src='/images/c1.jpeg' className="img-fluid position-relative" alt="images" height={150} />
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

export default TopCategory 















