import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const NewProductCard = ({ sProduct }) => {
  const { price, image, brandname, modelname, rating, Type, _id } =
    sProduct || {};
    const handleAddCart = () => {
      const cartProduct = {
        brandname: brandname,
        modelname: modelname,
        price: price,
        rating: rating,
        Type: Type,
        image: image,
      };
    
      fetch("https://server-side-9maji8bub-tamal-krishna-das-projects.vercel.app/product", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Product Update successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
    };
    
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{brandname}</h1>
            <h1>Model: {modelname}</h1>

            <h1>Price : {price}</h1>
            <h1>TYpe: {Type}</h1>
            <h1>Rating: {rating}</h1>
            <p className="py-6">
              Explore the world of automobiles with our comprehensive car
              website. From the latest models to classic favorites, we offer a
              rich collection of vehicles to suit every taste. Discover expert
              reviews, detailed specifications, and immersive virtual tours that
              bring the driving experience to life. Whether re looking for
              luxury sedans, powerful sports cars, or eco-friendly electric
              vehicles, our platform is your one-stop destination for all things
              automotive. Get behind the wheel and embark on an exciting journey
              through the dynamic landscape of the automotive industry.
            </p>
            <button className="btn btn-primary">Add to Cart</button>
            <Link to={`/updateproduct/${_id}`}>
              <button onClick={handleAddCart} className="btn btn-primary bg-red-500 ml-10">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductCard;
