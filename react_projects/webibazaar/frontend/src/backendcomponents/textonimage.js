// import React from 'react'

// const Themeextimg = () => {
//     return (
//         <div>
//             <a className="image-link" href="gg" title="Home">
//                 <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2021/07/1530x300.jpg" alt="ds"></img>
//             </a>
//         </div>
//     )
// }

// export default Themeextimg

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CMSBannerItem = ({ imageSrc, text1, text2, linkText }) => {
    return (

        <div className="cms-banner-inner">
            <div className="cms-banner-img">

                <div style={{ position: 'relative',   }}>

                    <img
                        src="/images/hsub1.jpeg"
                        alt="Uncategorized"
                        style={{ width: '100%', height: '200px', display: 'block' }}
                    />


                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',  // Adjust the top position as needed
                            left: '30%', // Adjust the left position as needed
                            transform: 'translate(-50%, -50%)',
                            color: '#000000', // Text color
                            textAlign: 'center',

                        }}
                    >
                        <h6 style={{ width: "270px" }}>{text1}</h6>
                        <p style={{ width: "270px", fontSize: "12px" }}>
                            {text2}</p>
                        <a href="ggdd" target="" className="link-text" >
                            {linkText} <i className="fa fa-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
};

const Themeextimg = () => {
    return (
        <Container fluid className="theme-container mt-4">
            <Row className="vc_row wpb_row vc_inner  cms-banner">

                <Col  className="cms-banner-left">
                    <CMSBannerItem

                        text1="Create Your Own VAIO Laptop"
                        text2="CHOOSE THE COLOUR, SCREEN SIZE AND PERFORMANCE"
                        linkText="Shop now"
                    />
                </Col>


            </Row>
        </Container>
    );
};

export default Themeextimg;



// import React, { useRef, useEffect } from 'react';

// const Themeextimg = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     const image = new Image();
//     image.src = '/images/hsub1.jpeg'; // Replace with your image path
//     image.onload = () => {
//       canvas.width = image.width;
//       canvas.height = image.height;

//       // Draw the image onto the canvas
//       ctx.drawImage(image, 0, 0);

//       // Add text to the image
//       ctx.font = '20px Arial'; // Set the font size and family
//       ctx.fillStyle = 'dark'; // Set the text color
//       ctx.textAlign = 'center'; // Set text alignment
//       ctx.fillText('Your Text Here', canvas.width / 4, canvas.height - 150); // Adjust text position
//     };
//   }, []);

//   return (
//     <div>
//       <canvas ref={canvasRef} />
//     </div>
//   );
// };

// export default Themeextimg;


