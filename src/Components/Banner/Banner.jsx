/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <>
  <div className=" flex h-[80vh] justify-between" style={{ background: 'linear-gradient(to right, #AB47BC, teal)' }}>
    <div>
        <h1 className="font-bold  text-sky-300 mt-4 text-5xl">
            BUY YOUR DREAM CAR HERE
        </h1>
        <p className="mt-5 text-white">Welcome to our comprehensive automobile hub, where you can  <br /> explore a diverse range of vehicles from leading manufacturers worldwide. <br /> Discover the latest models, compare specifications, and stay updated with the <br /> newest trends in the automotive industry. Whether you're looking for <br /> sleek sedans, robust SUVs, or high-performance sports cars, <br /> our platform provides a one-stop destination for all your automotive needs. <br /> Find your dream ride and embark on an exhilarating journey with us today</p>
        <h1 className="text-5xl font-bold text-green-400 text-center mt-8">Service WE Provide</h1>
        <h1 className="text-white ml-6 mt-9">In addition to an extensive vehicle selection, we also offer a range of premium services, <br /> including expert maintenance, efficient repairs, <br /> and personalized consultations to ensure you enjoy a seamless driving experience. <br /> Our team of dedicated professionals is committed to delivering top-notch customer service <br /> and exceeding your expectations at every turn. Find your dream ride and <br /> explore unparalleled automotive solutions with us today</h1>
    </div>
    <div>
        <img className="w-[1000px]" src="https://i.ibb.co/mFL7MPR/new-removebg-preview.png" alt="" />
    </div>
   
</div>

      
    </>
  );
}; 

export default Banner;
