import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'







function Blog() {
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

        <>




            <div className='container'>
                <div className='mb-3 d-flex'>
                    <h3 className=' col-3'> LATEST NEWS</h3>
                    <hr className=' col-7 ' />
                </div>
                <div className='row'>
                    {products ? (
                        products.data.map((item, index) => (
                            <div key={index} className='col  my-3 fs-6'>
                                <Card className='text-center'>
                                    <Card.Img variant="top" src='/images/b1.jpg' />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text >
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>







            </div>
        </>




    );
}

export default Blog