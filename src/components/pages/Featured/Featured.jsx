import feature from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='feature mb-20 bg-fixed'>
            <div className='overlay py-10'>
                <div className="mx-auto text-center md:w-4/12 my-8">
                    <p className="text-yellow-600 mb-2">FROM OUR MENU</p>
                    <h3 className="text-3xl text-white uppercase border-y-4 py-4">---Check it out---</h3>
                </div>
                <div className='flex md:mx-32 items-center justify-center gap-10 pb-10 mt-10 text-white'>
                    <img className='w-[548px] h-[300px] rounded-md' src={feature} alt="" />
                    <div>
                        <p>March 20,2023</p>
                        <p>Where can i get some?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis veniam neque, error doloremque esse eligendi unde recusandae quas beatae, animi ab provident perspiciatis ipsum repellendus?</p>
                        {/* <button className='feature-btn'>Read More</button> */}
                        <button className='btn btn-outline text-white border-b-4 border-0 mt-8'>Read More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Featured;