/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Details = ({cars}) => {
    const {brandname,modelname,image,_id} = cars || {};
    console.log(cars);
    return (
        <div>
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h1>Brand: {brandname}</h1>
    <h2 className="card-title">MODEL: {modelname}</h2>

  <Link to={`/showproductcard/${_id}`}>  <div className="card-actions justify-end">
    
      <button className="btn btn-primary">See Details</button>
    </div></Link>
  </div>
</div>
        </div>
    );
};

export default Details;