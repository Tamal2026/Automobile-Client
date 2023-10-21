import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Details from "./Details";

const ShowProduct = () => {
  const [cars, setCars] = useState([]);
  const { brandname } = useParams();
  const carData = useLoaderData();
  console.log(carData);

  useEffect(() => {
    if (carData) {
      const findCars = carData.filter((findCar) => findCar.brandname ==  brandname);
      setCars(findCars);
    }
  }, [brandname, carData]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {cars.map((car, index) => (
        <Details key={index} cars={car} />
      ))}
    </div>
  );
};

export default ShowProduct;
