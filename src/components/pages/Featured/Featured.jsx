import feature from '../../../assets/home/featured.jpg'
import SectionHeading from '../../compo/SectionHeading/SectionHeading';
import './Featured.css'
const Featured = () => {
    return (
        <div className='feature mb-20 bg-fixed'>
            <div className='overlay py-10'>
                <SectionHeading
                    heading={'---Check it out---'}
                    subheading={'FROM OUR MENU'}
                ></SectionHeading>
                <div className='flex md:mx-32 items-center justify-center gap-10 pb-10 mt-10 text-white'>
                    <img className='w-[548px] h-[300px] rounded-md' src={feature} alt="" />
                    <div>
                        <p>March 20,2023</p>
                        <p>Where can i get some?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis veniam neque, error doloremque esse eligendi unde recusandae quas beatae, animi ab provident perspiciatis ipsum repellendus?</p>
                        <button className='feature-btn'>Read More</button>
                    </div>
                </div>
            </div>

        </div>
    ); n
};

export default Featured;