import Testimonial from "../../Testimonial/Testimonial";
import AboutMy from "../../compo/AboutMy";
import CallUs from "../../compo/CallUs";
import Recommend from "../../compo/Recommend";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import { Helmet } from "react-helmet-async";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>My Restaurant | Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutMy></AboutMy>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Recommend></Recommend>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;