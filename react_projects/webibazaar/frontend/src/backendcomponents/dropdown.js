import React, { useState } from "react";

const MyComponent = () => {

  // eslint-disable-next-line
  const [selectCity, setSelectCity] = useState("");
  const cities = [
    { id: "1", value: "Delhi" },
    { id: "2", value: "Mumbai" },
    { id: "3", value: "Mumbai" },
    { id: "4", value: "Delhi" },
    { id: "5", value: "Pune" },
  ];
  const onChange=(el)=>{
    setSelectCity(el.target.value)
  }

  return (
    <>
      <select className="border-0"  style={{width:"200px"}} onChange={onChange}>
        <option>All Categories  </option>
        {cities.map((cities) => (
          <option key={cities.id} value={cities.value} >
            {cities.value}
          </option>
        ))}

      </select>
   

    </>
  );
};

export default MyComponent;





