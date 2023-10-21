/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-[80vh] lg:h-auto justify-between" style={{ background: 'linear-gradient(to right, #AB47BC, teal)' }}>
        <div className="lg:w-1/2">
          <h1 className="font-bold text-sky-300 mt-4 text-4xl lg:text-5xl lg:text-center lg:mt-0">
            BUY YOUR DREAM CAR HERE
          </h1>
          <p className="mt-5 text-white text-sm lg:text-base">
            Welcome to our comprehensive automobile hub, where you can  <br /> explore a diverse range of vehicles from leading manufacturers worldwide. <br /> Discover the latest models, compare specifications, and stay updated with the <br /> newest trends in the automotive industry. Whether you're looking for <br /> sleek sedans, robust SUVs, or high-performance sports cars, <br /> our platform provides a one-stop destination for all your automotive needs. <br /> Find your dream ride and embark on an exhilarating journey with us today
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold text-green-400 text-center mt-8">Service WE Provide</h1>
          <h1 className="text-white ml-6 mt-3 lg:text-base lg:mt-9">
            In addition to an extensive vehicle selection, we also offer a range of premium services, <br /> including expert maintenance, efficient repairs, <br /> and personalized consultations to ensure you enjoy a seamless driving experience. <br /> Our team of dedicated professionals is committed to delivering top-notch customer service <br /> and exceeding your expectations at every turn. Find your dream ride and <br /> explore unparalleled automotive solutions with us today
          </h1>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <img className="w-3/4 lg:w-[1000px]" src="https://i.ibb.co/mFL7MPR/new-removebg-preview.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
