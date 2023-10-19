import Banner from "../Banner/Banner";
import BestSellingCar from "../BestSellingCar";
import Brand from "../BrandSection/Brand";
import UpcommingCar from "../UpcommingCar";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
      
            <Brand></Brand>
            <BestSellingCar></BestSellingCar>
            <UpcommingCar></UpcommingCar>
        </div>
    );
};

export default Home;