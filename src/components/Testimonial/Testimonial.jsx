import SectionHeading from "../compo/SectionHeading/SectionHeading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mb-20">
            <SectionHeading
                heading={'---What Our Clients Say---'}
                subheading={'TESTIMONIALS'}
            ></SectionHeading>
            <div>
                <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review =>
                            <SwiperSlide
                                key={review._id}
                            >
                                <div className="mx-32 py-8 flex flex-col justify-center items-center">
                                    <Rating style={{ maxWidth: 150 }} value={review.rating} />
                                    <FaQuoteRight className="text-3xl mt-4"></FaQuoteRight>
                                    <p className="text-center mx-12 my-6">{review.details}</p>
                                    <h3 className="text-2xl text-orange-500">{review.name}</h3>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;