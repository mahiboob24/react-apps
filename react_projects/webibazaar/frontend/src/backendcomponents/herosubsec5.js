import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Herosubsec5() {
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

        <div className='container mt-4 md-3'>
            


            <div className="row ">
                   <div   className="col-3 mt-4" ><h3> TOP CATEGORY</h3></div> 
                   <div   className="col-8 mt-4" ><hr  /></div> 
                </div>



            <div className='row'>

                {products ? (
                    products.data.map((item, index) => (
                        <div key={index} className='col  my-3 fs-6'>
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

export default Herosubsec5