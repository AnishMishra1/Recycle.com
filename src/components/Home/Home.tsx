// Dependencies
import { useDispatch } from "react-redux";
import Slider from "../../globalSubComponents/Carasoul/Slider";
import Services from "./subComponents/Services";
import Details from "./subComponents/Details";
import OurPromise from "./subComponents/OurPromise";
import Achievement from "./subComponents/Achievement";
import Footer from "../../globalSubComponents/Footer";


// Local Files

const Home = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Slider />
      <Services />
      <Details/>
      <OurPromise/>
      <Achievement/>
      <Footer/>
      
    </div>
  );
};

export default Home;
