/* eslint-disable react/prop-types */


const Details = ({cars}) => {
    const {brandname,modelname,image} = cars || {};
    console.log(cars);
    return (
        <div>
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{modelname}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{brandname}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;