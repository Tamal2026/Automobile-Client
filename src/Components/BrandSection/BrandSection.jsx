/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BrandSection = ({cars}) => {
  const {brandname} = cars || {} ;
  return (
    <div className="bg-slate-100 mb-10">
        
      <h1 className="text-5xl mx-auto text-center mb-10 
       bg-orange-400 text-white px-3 py-2 rounded-lg  font-semibold w-1/4">Branded Car Name And Details</h1>
   <Link to={`/showproduct/${brandname}`}> 
   <div className="grid grid-cols-3 ml-20 ">
    <div className="card w-96 bg-base-100 shadow-2xl mb-4">
        <figure>
        <img className="h-[300px] w-full" src="https://i.ibb.co/WHMW85F/HD-wallpaper-tesla-amoled-black-logo-super-amoled.jpg" alt="Shoes" />
        </figure>
        <div className="card-body text-center">
        <h2 className="font-bold text-lg mt-3 bg-red-600 text-white rounded-lg py-2">Tesla</h2>
          
        </div>
      </div>
      <div className="card w-96 bg-base-100 mb-4 shadow-2xl">
        <figure>
        <img className="h-[300px] w-full" src="https://i.ibb.co/r69yT8n/ferrari.jpg" alt="Shoes" />
        </figure>
        <div className="text-center">
        <h2 className="font-bold text-lg mt-3 bg-sky-600 text-center text-white rounded-lg py-2 mx-4">Ferrari</h2>
        </div>
      </div>
      <div className="card w-96 bg-base-100 mb-4 shadow-xl">
        <figure>
          <img className="h-[300px] w-full" src="https://i.ibb.co/vsWfwLM/images.png" alt="Shoes" />
        </figure>
        <div className="card-body">
        <h2 className="font-bold text-lg mt-3 bg-teal-700 text-center text-white rounded-lg py-2 mx-4">Audi</h2>          
          
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://i.ibb.co/09WFbDd/purepng-com-nissan-car-logologocar-brand-logoscarsnissan-car-logo-1701527428763sqzkf.png" alt="Shoes" />
        </figure>
        <div className="card-body">
        <h2 className="font-bold text-lg mt-3 bg-lime-700 text-center text-white rounded-lg py-2 mx-4">Nissan</h2>
    
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <figure>
          <img src="https://i.ibb.co/Pr6vnPb/cf71fcdcf76f8bb55f58ae9240c60049.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
        <h2 className="font-bold text-lg mt-3 bg-cyan-600 text-center text-white rounded-lg py-2 mx-4">BMW</h2>
      
         
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <figure>
          <img src="https://i.ibb.co/ysYDqh1/photo-1625074692991-b57f8ff90df6.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
        <h2 className="font-bold text-lg mt-3 bg-indigo-700 text-center text-white rounded-lg py-2 mx-4">Marcedez</h2>
        

        </div>
      </div>
    </div>
   
   </Link>
   
    </div>
  );
};

export default BrandSection;
