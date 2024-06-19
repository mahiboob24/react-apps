
  // src/Marquee.js
  import React from "react";
  import "./style.css";
  
  const image=[
      "/images/s1.jpeg",
      "/images/s2.jpeg",
      "/images/s3.jpeg",
      "/images/s4.jpeg",
      "/images/s5.jpeg",
      "/images/s6.png",
      "/images/s1.jpeg",
  ]
  
  const Marquee = () => {
  
    return (
      <div className="container mt-5  mb-5" >
        <div className="row ">
          <div className="col">
            <div className="marquee-container card"style={{height:"100px"}}>
              <div className="marquee-content card-content  d-flex justify-content-between align-items-center">
                {image.map((imageSrc, index) => (
                  <img key={index} src={imageSrc} alt={`Imag ${index}`} width={120} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Marquee;