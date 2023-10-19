/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BrandShowing = ({brands}) => {
    const {brandname,image} = brands || {};

    return (
        <div>
              <Link to={`/showproduct/${brandname}`}>  <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="card-title font-bold text-lg mt-3  text-center bg-teal-600  text-white rounded-lg py-2">{brandname}</h2>
  </div>
 
</div>
</Link>
        </div>
    );
};

export default BrandShowing;