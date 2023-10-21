import { useEffect, useState } from "react";
import BrandShowing from "./BrandShowing";

const Brand = () => {
  const [brands, setBrands] = useState(); // use useState hook correctly

  useEffect(() => {
    fetch("home.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []); // provide an empty dependency array to useEffect

  return (
    <>
    
    <h1 className="text-5xl mx-auto text-center mb-10 
       bg-orange-400 text-white px-3 py-2 rounded-lg  font-semibold w-1/4">Branded Car Name And Details</h1>
       <div >
           
      <div className="grid grid-cols-3">
        {brands?.map((brand, index) => (
          <BrandShowing key={index} brands={brand}></BrandShowing>
        ))}
      </div>
    </div>
    </>
 
  );
};

export default Brand;
