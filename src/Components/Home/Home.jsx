import Banner from "../Banner/Banner";
import BestSellingCar from "../BestSellingCar";
import BrandSection from "../BrandSection/BrandSection";
import UpcommingCar from "../UpcommingCar";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandSection></BrandSection>
            <BestSellingCar></BestSellingCar>
            <UpcommingCar></UpcommingCar>
        </div>
    );
};

export default Home;