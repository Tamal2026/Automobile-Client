const BrandSection = () => {
  return (
    <div className="bg-slate-100">
        
      <h1>Branded Car Name And Details</h1>
    <div className="grid grid-cols-3 ml-20 ">
    <div className="card w-96 bg-base-100 shadow-2xl">
        <figure>
        <img className="h-[300px] w-full" src="https://i.ibb.co/WHMW85F/HD-wallpaper-tesla-amoled-black-logo-super-amoled.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Tesla</h2>
          
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
        <img className="h-[300px] w-full" src="https://i.ibb.co/r69yT8n/ferrari.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Ferrari</h2>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px] w-full" src="https://i.ibb.co/vsWfwLM/images.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Audi</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://i.ibb.co/09WFbDd/purepng-com-nissan-car-logologocar-brand-logoscarsnissan-car-logo-1701527428763sqzkf.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Nissan</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <figure>
          <img src="https://i.ibb.co/Pr6vnPb/cf71fcdcf76f8bb55f58ae9240c60049.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"></h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <figure>
          <img src="https://i.ibb.co/ysYDqh1/photo-1625074692991-b57f8ff90df6.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Mercedez</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
   
    </div>
  );
};

export default BrandSection;
