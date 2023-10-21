/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import NewProductCard from "./NewProductCard";

const ShowProductCard = ({ product }) => {
  const { modelname, photo, brandname } = product || {};

  const [singleProduct, setSingleProduct] = useState({});
  const { _id } = useParams();
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    if (data) {
      const findData = data.find((singleData) => singleData._id == _id);
      setSingleProduct(findData);
    }
  }, [_id, data]);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <figure>
          <img className="h-[300px] w-full" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">
            <p>{brandname}</p>
          </h2>
          <div>
            <div>
              <h1 className="bg-emerald-600 text-white font-bold py-1 rounded-lg mb-2 pl-2 w-1/2">MODEL:{modelname}</h1>
            </div>
          </div>
        
        </div>
      </div>
      <div className="card-actions justify-end">
            <Link to={`/showproductcard/${_id}`}>
              <button>See Details</button>
            </Link>
          </div>
      <NewProductCard sProduct={singleProduct} />
    </div>
  );
};

export default ShowProductCard;
