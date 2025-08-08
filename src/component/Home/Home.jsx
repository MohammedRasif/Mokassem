import Banner from "../Pages/Banner";
import Pioneering from "../Pages/Pioneering";
import WhyChoose from "../Pages/WhyChoose";
import PlanSection from "./PlanSection";
import Work from "./Work";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Pioneering/>
            <Work></Work>
            <WhyChoose></WhyChoose>
            <PlanSection></PlanSection>
            
        </div>
    );
}

export default Home;
