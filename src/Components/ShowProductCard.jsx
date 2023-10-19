/* eslint-disable react/prop-types */

const ShowProductCard = ({ product }) => {
  const { modelname, photo,brandname,price } = product || {};

  
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <figure>
          <img className="h-[300px] w-full" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white"><p >{brandname}</p>
          </h2>
          <div>
           
            <div>
              <h1  className="bg-emerald-600 text-white font-bold py-1 rounded-lg mb-2 pl-2 w-1/2">MODEL:{modelname}</h1>
            </div>
          <h1 className="bg-red-500 text-white py-2 rounded-lg w-1/2 pl-4 font-bold">Price:{price} $</h1>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProductCard;
