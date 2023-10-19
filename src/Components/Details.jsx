/* eslint-disable react/prop-types */


const Details = ({cars}) => {
    const {brandname,modelname,image} = cars || {};
    return (
        <div>
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{modelname}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{brandname}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;