import SectionHeading from "./SectionHeading/SectionHeading";
import reco from '../../assets/home/slide1.jpg'
const Recommend = () => {
    return (
        <div className="mb-20">
            <SectionHeading
                heading={'cheff recommends'}
                subheading={'---Should Try---'}
            ></SectionHeading>
            {/* recommends box  */}
            <div className="grid md:grid-cols-3 gap-10">
                <div className="card  rounded-none bg-base-100 border shadow-xl">
                    <figure><img src={reco} className="w-full rounded-none h-[300px]" alt="Shoes" /></figure>
                    <div className="card-body flex space-y-4 flex-col justify-center items-center bg-[#F3F3F3] ">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam aperiam ex nostrum similique doloremque. Odit.</p>
                        <button className="btn btn-outline w-1/2 bg-[#E8E8E8]  uppercase border-b-4 border-0 text-orange-400">
                            Add To cart
                        </button>
                    </div>
                </div>
                <div className="card rounded-none bg-base-100 border shadow-xl">
                    <figure><img src={reco} className="w-full rounded-none h-[300px]" alt="Shoes" /></figure>
                    <div className="card-body flex space-y-4 flex-col justify-center items-center bg-[#F3F3F3] ">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam aperiam ex nostrum similique doloremque. Odit.</p>
                        <button className="btn btn-outline w-1/2 bg-black  uppercase border-b-4 border-0 text-orange-400">
                            Add To cart
                        </button>
                    </div>
                </div>
                <div className="card rounded-none bg-base-100 border shadow-xl">
                    <figure><img src={reco} className="w-full rounded-none h-[300px]" alt="Shoes" /></figure>
                    <div className="card-body flex space-y-4 flex-col justify-center items-center bg-[#F3F3F3] ">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam aperiam ex nostrum similique doloremque. Odit.</p>
                        <button className="btn btn-outline w-1/2 bg-[#E8E8E8]  uppercase border-b-4 border-0 text-orange-400">
                            Add To cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommend;